
import "./style.css";

var userLatitude, userLongitude, results;

var helpUser = [
  "I couldn't find any stations for pollution detection in the location you searched for. Do you want to try a keyword search?",
  "I couldn't find any stations for pollution detection. Do you want to try a geolocation search?",
  "I couldn't use your position to find any stations for pollution detection. Do you want to try a name search?"
];
var unableToFind = [
  "I couldn't find any stations for pollution detection in the location you searched for.",
  "I couldn't find any stations for pollution detection. Be sure to provide a proper location keyword.",
  "I couldn't find any stations for pollution detection. Be sure to provide your current position"
];

const geoLocOptions = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000
};

//tries to get current user position
const signal = new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject, geoLocOptions));
signal.then(pos => {
  //store coordinates
  userLatitude = pos.coords.latitude;
  userLongitude = pos.coords.longitude;
}).catch(error => {
  //on error, log error
  console.log(error);
});

//main function for fetch, expects data to search for and a value stating the type of search
function locating(location, searching){
  console.log(location);
  resetValues();
  //fetch infos with given input via buttons (or recursive function)
  fetch(`/.netlify/functions/lambda?${location}`)
  .then(response => response.json())
  .then(data => {
    getResult(data, searching);
  })
  .catch(function (error) {
    getResult("error", searching);
  });
}

function getResult(data, searching){
  results = data;
  console.log(results);
  if (results == "error") {
    document.getElementById("answer").innerHTML = `Something went wrong. Try reloading the page and repeating your search, please.`;
    return;
  }
  //if response is not found,
  if (results.data == "Unknown station" || (searching == 1 && results.data.length == 0)){
    provideHelp(searching);
    return;
  }
  //if response is found
  //if search WAS by keyword (multiple possible result)
  if (searching == 1){
    for (let i = 0; i < results.data.length; i++){
      document.getElementById("keyword-results").append(createOption(results.data[i].station.name));
    }
    if (results.data.length > 1){
      document.getElementById("keyword-results").style.visibility = "visible";
    }
    //selects the first result
    selecting();
  }
  //if search WAS NOT by keyword (unique result)
  else {
    //take notice of aqi value for further text info
    let aqi = results.data.aqi;
    //calculate distance from user for first result
    let far = getDistance(results.data.city.geo[0], results.data.city.geo[1]);
    //if search was by name
    if (searching == 0) {
      //tell user the result and quality for their searched position
      document.getElementById("answer").innerHTML = `The estimated AQI for ${results.data.city.name} has a value of ${aqi}. The pollution rate is ${quality(aqi)}.`;
    }
    //if search was by geolocation
    else if (searching == 2) {
      //tell user the result and quality for their current position (nearest)
      document.getElementById("answer").innerHTML = `The nearest station to your estimated position is in ${results.data.city.name}. The estimated AQI has a value of ${aqi}. The pollution rate is ${quality(aqi)}.`;
    }
    //if user position (and distance) is known, tell also the user how far they are from the stated station
    if (far != null || far != undefined) {
      document.getElementById("answer").innerHTML += `The estimated distance from your position is about ${far} kilometers.`;
    }
  }
}

function resetValues(){
  document.getElementById("answer").innerHTML = "";
  document.getElementById("keyword-results").innerHTML = "";
  document.getElementById("keyword-results").style.visibility = "hidden";
}

function provideHelp(searching){
  document.getElementById("agree").style.position = "fixed";
  document.getElementById("agree").style.top = `${document.getElementById("page").offsetTop - 5}px`;
  document.getElementById("agree").style.left = `${document.getElementById("page").offsetLeft}px`;
  document.getElementById("agree").style.visibility = "visible";
  document.getElementById("page").style.visibility = "hidden";
  document.getElementById("question").innerHTML = helpUser[searching];
  document.getElementById("question").value = searching;
}

function userFeedback(answer, searching){
  if (answer == "no"){
    document.getElementById("answer").innerHTML = unableToFind[searching];
    backToPage();
    return;
  }
  let newSearching = searching == 2 ? 0 : searching + 1;
  let newFetch = newSearching == 0 ? `city=${document.getElementById("query").value}` :
                 newSearching == 1 ? `custom=${document.getElementById("query").value}` :
                 `latit=${userLatitude}&longi=${userLongitude}`;
  getResult(newFetch, newSearching);
  backToPage();
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
    //shows info about the selected list result
    let currentResult = results.data[index];
    let aqi = currentResult.aqi;
    //calculate distance between user and result
    let far = getDistance(currentResult.station.geo[0], currentResult.station.geo[1]);
    //tell user the result and quality for the current result position
    let resultMessage = `The estimated AQI for ${currentResult.station.name} has a value of ${aqi}. The pollution rate is ${quality(aqi)}.`;
    //if user position (and distance) is known, tell also the user how far they are from the stated station
    if (far != null || far != undefined) {
      resultMessage += ` The estimated distance from your position is about ${far} kilometers.`;
    }
    document.getElementById("answer").innerHTML = resultMessage;
  }
}

//calculate distance between 2 coordinates
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

//event listeners for main interactions
document.getElementById("button-name").addEventListener("click", function(){
  //go and call main function with name input by user
  locating(`city=${document.getElementById("query").value}`, this.value);
});
document.getElementById("button-keyword").addEventListener("click", function(){
  //go and call main function with keyword input by user
  locating(`custom=${document.getElementById("query").value}`, this.value);
});
document.getElementById("button-geoloc").addEventListener("click", function(){
  //go and call main function with user current position
  locating(`latit=${userLatitude}&longi=${userLongitude}`, this.value);
});
document.getElementById("keyword-results").addEventListener("change", selecting);


//event listeners for "yes" and "no" buttons
document.getElementById("button-agree").addEventListener("click", function(){
  userFeedback("yes", document.getElementById("question").value);
});
document.getElementById("button-deny").addEventListener("click", function(){
  userFeedback("no", document.getElementById("question").value);
});
