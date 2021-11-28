
var userLatitude, userLongitude, searching;

const options = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000
};

//tries to get current user position
const signal = new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject, options));
signal.then(pos => {
  //store coordinates
  userLatitude = pos.coords.latitude;
  userLongitude = pos.coords.longitude;
}).catch(error => {
  //on error, log error
  console.log(error);
});

//calculate distance between 2 coordinates
function distance(placeLatitude, placeLongitude){
  const radius = 6371e3; // metres
  console.log(placeLatitude + " " + placeLongitude);
  const diam1 = placeLatitude * Math.PI/180;
  const diam2 = userLatitude * Math.PI/180;
  const diff1 = (userLatitude - placeLatitude) * Math.PI/180;
  const diff2 = (userLongitude - placeLongitude) * Math.PI/180;
  const a = Math.sin(diff1/2) * Math.sin(diff1/2) +
            Math.cos(diam1) * Math.cos(diam2) *
            Math.sin(diff2/2) * Math.sin(diff2/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const d = radius * c / 1000; // in kilometres
  return Math.round(d);
}

//main function for fetch
function locating(location){
  console.log(location);
  //fetch infos with given input via buttons
  fetch(`/.netlify/functions/lambda?${location}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    //if response is not found,
    if (data.data == "Unknown station"){
      //if search by text
      if (searching == 1){
        //tell user input text result was not found
        document.getElementById("answer").innerHTML = "I couldn't find any stations for pollution detection in the location you searched for.";
      }
      //if search by keyword
      else if (searching == 2) {
        //tell user keyword result was not found
        document.getElementById("answer").innerHTML = "I couldn't find any stations for pollution detection. Be sure to provide a proper location keyword.";
      }
      //if search by geoloc
      else if (searching == 3) {
        //tell user geolocation result was not found
        document.getElementById("answer").innerHTML = "I couldn't find any stations for pollution detection. Be sure to provide your current position";
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
      if (searching == 1) {
        //tell user the result and quality for their searched position
        document.getElementById("answer").innerHTML = `The estimated AQI for ${data.data.city.name} has a value of ${aqi}. The pollution rate is ${more}.`;
      }
      //if search by keyword
      else if (searching == 2) {
        //tell user the result and quality for the selected(?) position
        document.getElementById("answer").innerHTML = "I couldn't find any stations for pollution detection. Be sure to provide a proper location keyword.";
      }
      //if search by geoloc
      else if (searching == 3) {
        //tell user the result and quality for their current position (nearest)
        document.getElementById("answer").innerHTML = `The nearest station to your estimated position is in ${data.data.city.name}. The estimated AQI has a value of ${data.data.aqi}. The pollution rate is ${more}.`;
      }
      if (searching == 2){
        console.log("array " + data.data.size);
      }else {
        const placeLatitude = data.data.city.geo[0];
        const placeLongitude = data.data.city.geo[1];
        console.log(`${distance(placeLatitude, placeLongitude)} kilometers`);
      }
    }
    //optional further info
    document.getElementById("answer").innerHTML += ` For further details, you can check out the reference website infos <a target="_blank" href="https://www.airnow.gov/aqi/aqi-basics/">here</a>.`;
  });
}

//click event handlers for buttons
document.getElementById("butt0").addEventListener("click", function(){
  //go and call main function with text input by user
  searching = 1;
  locating(`city=${document.getElementById("query").value}`);
});
//click event handlers for buttons
document.getElementById("butt1").addEventListener("click", function(){
  //go and call main function with text input by user
  searching = 2;
  locating(`custom=${document.getElementById("query").value}`);
});
document.getElementById("butt2").addEventListener("click", function(){
  //go and find user coordinates and pass them to the main function
  searching = 3;
  locating(`latit=${userLatitude}&longi=${userLongitude}`);
});
