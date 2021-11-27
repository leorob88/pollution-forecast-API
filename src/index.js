
var userLatitude, userLongitude;

//tries to get current user position
const signal = new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));
signal.then(pos => {
  //store coordinates
  userLatitude = pos.coords.latitude;
  userLongitude = pos.coords.longitude;
}).catch(error => console.log(error));

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
        //calculate distance between 2 coordinates (45;9 -- 46;11)
        const radius = 6371e3; // metres
        const lat1 = data.data.city.geo[0];
        const lon1 = data.data.city.geo[1];
        const lat2 = location.substring(6, location.indexOf("&longi"));
        const lon2 = location.substring(location.indexOf("&longi") + 7, location.length);
        console.log(lat2 + " " + lon2);
        const diam1 = lat1 * Math.PI/180;
        const diam2 = lat2 * Math.PI/180;
        const diff1 = (lat2 - lat1) * Math.PI/180;
        const diff2 = (lon2 - lon1) * Math.PI/180;
        const a = Math.sin(diff1/2) * Math.sin(diff1/2) +
                  Math.cos(diam1) * Math.cos(diam2) *
                  Math.sin(diff2/2) * Math.sin(diff2/2);
                  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
                  const d = radius * c / 1000; // in kilometres
        console.log(d + " kilometers");
        //tell user the result and quality for their nearest position
        document.getElementById("answer").innerHTML = `The nearest station to your estimated position is in ${data.data.city.name}. The estimated AQI has a value of ${data.data.aqi}. The pollution rate is ${more}.`;
      }
    }
    //optional further info
    document.getElementById("answer").innerHTML += ` For further details, you can check out the reference website infos <a target="_blank" href="https://www.airnow.gov/aqi/aqi-basics/">here</a>.`;
  });
}

//click event handlers for buttons
document.getElementById("butt0").addEventListener("click", function(){
  //go and call main function with text input by user
  locating(`city=${document.getElementById("query").value}`);
});
document.getElementById("butt2").addEventListener("click", function(){
  //go and find user coordinates and pass them to the main function
  locating(`latit=${userLatitude}&longi=${userLongitude}`);
});
