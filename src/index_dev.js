
  import "./style.css";

  var userLatitude, userLongitude, results;

  var helpUser = [
    "I couldn't find any stations for pollution detection in the location you searched for. Do you want to try a keyword search?",
    "I couldn't find any stations for pollution detection. Do you want to try a geolocation search?"
  ];
  var unableToFind = [
    "I couldn't find any stations for pollution detection in the location you searched for.",
    "I couldn't find any stations for pollution detection. Be sure to provide a proper location keyword."
  ];

  const geoLocOptions = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000
  };

  const signal = new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject, geoLocOptions));
  signal.then(pos => {
    userLatitude = pos.coords.latitude;
    userLongitude = pos.coords.longitude;
  }).catch(error => {
    console.log(error);
  });

  function findName(){
    if(isInputOk("name")){
      locating(0);
    }else{
      document.getElementById("answer").innerHTML = "The operation failed. Please, type any world location to search for.";
    }
  }

  function findKeyword(){
    if(isInputOk("name")){
      locating(1);
    }else{
      document.getElementById("answer").innerHTML = "The operation failed. Please, type any world location to search for.";
    }
  }

  function findPosition(){
    if(isInputOk("position")){
      locating(2);
    }else{
      document.getElementById("answer").innerHTML = "The operation failed. Please, provide your current position and reload this page.";
    }
  }

  function isInputOk(userInput){
    if(userInput == "name"){
      if (document.getElementById("query").value != ""){
        return true;
      }
    }else if(userInput == "position"){
      if (userLatitude != undefined && userLongitude != undefined){
        return true;
      }
    }
  }

  function locating(searching){
    resetValues();
    let cityQuery = document.getElementById("query").value;
    let data;
    const API_KEY = process.env.API_KEY;
    let site;
    if (searching == 0){
      site = `https://api.waqi.info/feed/${cityQuery}/?token=${API_KEY}`;
    }else if (searching == 1) {
      site = `https://api.waqi.info/search/?keyword=${cityQuery}&token=${API_KEY}`;
    }else if (searching == 2) {
      site = `https://api.waqi.info/feed/here/?token=${API_KEY}`;
    }
    fetch(site)
    .then(response => response.json())
    .then(data => {
      getResult(data, searching);
    })
    .catch(function (error) {
      getResult("error", searching);
    });
  }

  function resetValues(){
    document.getElementById("answer").innerHTML = "";
    document.getElementById("keyword-results").innerHTML = "";
    document.getElementById("keyword-results").style.visibility = "hidden";
  }

  function getResult(data, searching){
    results = data;
    if (results == "error") {
      document.getElementById("answer").innerHTML = "Something went wrong. Try reloading the page and repeating your search, please.";
      return;
    }
    if ((searching == 0 && results.data == "Unknown station") || (searching == 1 && results.data.length == 0)){
      provideHelp(searching);
      return;
    }
    if (searching == 1){
      for (let i = 0; i < results.data.length; i++){
        document.getElementById("keyword-results").append(createOption(results.data[i].station.name));
      }
      if (results.data.length > 1){
        document.getElementById("keyword-results").style.visibility = "visible";
      }
      selecting();
    }
    else {
      let name = results.data.city.name;
      let aqi = results.data.aqi;
      let far = getDistance(results.data.city.geo[0], results.data.city.geo[1]);
      let judgement = quality(aqi);
      showResult(name, aqi, far, judgement, searching);
    }
  }

  function provideHelp(searching){
    repositionDiv();
    document.getElementById("agree").style.visibility = "visible";
    document.getElementById("page").style.visibility = "hidden";
    document.getElementById("question").innerHTML = helpUser[searching];
    document.getElementById("question").value = searching;
  }

  function repositionDiv(){
    document.getElementById("agree").style.position = "fixed";
    document.getElementById("agree").style.top = `${document.getElementById("page").offsetTop - 5}px`;
    document.getElementById("agree").style.left = `${document.getElementById("page").offsetLeft}px`;
  }

  function userFeedback(answer, searching){
    if (answer == "no"){
      document.getElementById("answer").innerHTML = unableToFind[searching];
      backToPage();
      return;
    }
    backToPage();
    if (searching == 0){
      findKeyword();
    }else if(searching == 1){
      findPosition();
    }
  }

  function backToPage(){
    document.getElementById("agree").style.visibility = "hidden";
    document.getElementById("page").style.visibility = "visible";
  }

  function createOption(text){
      let listOption = document.createElement("option");
      listOption.id = "option" + (document.getElementById("keyword-results").options.length + 1);
      listOption.value = text;
      listOption.innerHTML = text;
      listOption.className = "listOptions";
      listOption.style.color = "#222";
      return listOption;
  }

  function selecting(){
    let index = document.getElementById("keyword-results").selectedIndex;
    if (index > -1){
      let name = results.data[index].station.name;
      let aqi = results.data[index].aqi;
      let far = getDistance(results.data[index].station.geo[0], results.data[index].station.geo[1]);
      let judgement = quality(aqi);
      showResult(name, aqi, far, judgement, 1);
    }
  }

  function getDistance(placeLatitude, placeLongitude){
    const radius = 6371e3; // metres
    const diameter1 = placeLatitude * Math.PI/180;
    const diameter2 = userLatitude * Math.PI/180;
    const difference1 = (userLatitude - placeLatitude) * Math.PI/180;
    const difference2 = (userLongitude - placeLongitude) * Math.PI/180;
    const a = Math.sin(difference1/2) * Math.sin(difference1/2) +
              Math.cos(diameter1) * Math.cos(diameter2) *
              Math.sin(difference2/2) * Math.sin(difference2/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = radius * c / 1000; // in kilometres
    return Math.round(d);
  }

  function quality(aqi){
    if (aqi > 300){
      return "hazardous";
    }else if (aqi > 200) {
      return "very unhealthy";
    }else if (aqi > 150) {
      return "unhealthy";
    }else if (aqi > 100) {
      return "unhealthy for sensitive groups";
    }else if (aqi > 50) {
      return "moderate";
    }else {
      return "good";
    }
  }

  function showResult(name, aqi, far, judgement, searching){
    let resultMessage;
    if (searching == 2){
      resultMessage = `The nearest station to your estimated position is in ${name}. The estimated AQI has a value of ${aqi}.`
    }else{
      resultMessage = `The estimated AQI for ${name} has a value of ${aqi}.`
    }
    resultMessage += ` The pollution rate is ${quality(aqi)}.`;
    if (far != null || far != undefined) {
      resultMessage += ` The estimated distance from your position is about ${far} kilometers.`;
    }
    document.getElementById("answer").innerHTML = resultMessage;
  }

  window.addEventListener('resize', repositionDiv);
  document.getElementById("button-name").addEventListener("click", findName);
  document.getElementById("button-keyword").addEventListener("click", findKeyword);
  document.getElementById("button-geoloc").addEventListener("click", findPosition);
  document.getElementById("keyword-results").addEventListener("change", selecting);
  document.getElementById("button-agree").addEventListener("click", function(){
    userFeedback("yes", document.getElementById("question").value);
  });
  document.getElementById("button-deny").addEventListener("click", function(){
    userFeedback("no", document.getElementById("question").value);
  });
