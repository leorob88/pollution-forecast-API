
//main function for fetch
function locating(location){
  //fetch infos with given input via buttons
  fetch(`/.netlify/functions/lambda?${location}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    //if response is not found,
    if (data.data == "Unknown station"){
      //if search by text
      if (location.indexOf("city=") > -1){
        //tell user input text result was not found
        document.getElementById("answer").innerHTML = "I couldn't find any stations for pollution detection in the location you searched for.";
      }
      //if search by geoloc
      else {
        //tell user geolocation result was not found
        document.getElementById("answer").innerHTML = "I couldn't find any stations for pollution detection with your current position.";
      }
    }
    //if response is found
    else {
      //take notice of aqi value for further text info
      let aqi = data.data.aqi;
      let more;
      if (aqi > 300){
        more = "hazardous";
      }else if (aqi > 200) {
        more = "very unhealthy";
      }else if (aqi > 150) {
        more = "unhealthy";
      }else if (aqi > 100) {
        more = "unhealthy for sensitive groups";
      }else if (aqi > 50) {
        more = "moderate";
      }else {
        more = "good";
      }
      //if search by text
      if (location.indexOf("city=") > -1){
        //tell user the result and quality for their searched position
        document.getElementById("answer").innerHTML = `The estimated AQI for ${data.data.city.name} has a value of ${aqi}. The pollution rate is ${more}.`;
      }
      //if search by geoloc
      else {
        //tell user the result and quality for their nearest position
        document.getElementById("answer").innerHTML = `The nearest station to your estimated position is in ${data.data.city.name}. The estimated AQI has a value of ${data.data.aqi}. The pollution rate is ${more}.`;
      }
    }
    //optional further info
    document.getElementById("answer").innerHTML += ` For further details, you can check out the reference website infos <a target="_blank" href="https://www.airnow.gov/aqi/aqi-basics/">here</a>.`;
  });
}

//function to call fetch by text input
function select(input){
  //calls main function with input target given by button (text input by user)
  locating(`city=${input}`);
}

//function to call fetch by geoloc input
function geo(){
  //tries to get current user position
  const signal = new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));
  signal.then(pos => {
    //store coordinates
    const latit = pos.coords.latitude;
    const longi = pos.coords.longitude;
    //calls main function with input target given by button (stored coordinates above)
    locating(`latit=${latit}&longi=${longi}`);
  });
}

//click event handlers for buttons
document.getElementById("butt1").addEventListener("click", function(){
  //go and call main function with text input by user
  select(document.getElementById("query").value);
});
document.getElementById("butt2").addEventListener("click", function(){
  //go and find user coordinates and pass them to the main function
  geo();
});
