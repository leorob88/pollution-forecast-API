
var userLatitude, userLongitude;

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

//main function for fetch, expects data to search for and a value stating the type of search
function locating(location, searching){
  //fetch infos with given input via buttons (or recursive function)
  fetch(`/.netlify/functions/lambda?${location}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    //if response is not found,
    if (data.data == "Unknown station" || (searching == 2 && data.data.length == 0)){
      //if search was by name,
      if (searching == 1){
        //ask user if they want to try keyword search
        let retry = confirm("I couldn't find any stations for pollution detection in the location you searched for. Do you want to try a keyword search?");
        //if yes, try it
        if (retry){
          locating(`custom=${document.getElementById("query").value}`, 2);
        }
        //if not, tell user name result was not found
        else {
          document.getElementById("answer").innerHTML = "I couldn't find any stations for pollution detection in the location you searched for.";
        }
      }
      //if search was by keyword,
      else if (searching == 2) {
        //ask user if they want to try geolocation search
        let retry = confirm("I couldn't find any stations for pollution detection. Do you want to try a geolocation search?");
        //if yes, try it
        if (retry){
          locating(`latit=${userLatitude}&longi=${userLongitude}`, 3);
        }
        //if not, tell user keyword result was not found
        else {
          document.getElementById("answer").innerHTML = "I couldn't find any stations for pollution detection. Be sure to provide a proper location keyword.";
        }
      }
      //if search was by geolocation,
      else if (searching == 3) {
        //ask user if they want to try a name search
        let retry = confirm("Wanna try name search?");
        //if yes, try it
        if (retry){
          locating(`city=${document.getElementById("query").value}`, 1);
        }
        //if not, tell user geolocation result was not found
        else {
          document.getElementById("answer").innerHTML = "I couldn't find any stations for pollution detection. Be sure to provide your current position";
        }
      }
    }
    //if response is found
    else {
      //if search was by keyword (multiple possible result)
      if (searching == 2){
        console.log("array " + data.data.length);
        //create list if there are more than 1 result
        if (data.data.length > 1){

        }
        //select anyway the first result and get aqi
        currentResult = data.data[0];
        let aqi = currentResult.aqi;
        //calculate distance from user for first result
        let far = distance(currentResult.station.geo[0], currentResult.station.geo[1]);
        //tell user the result and quality for the current result position
        document.getElementById("answer").innerHTML = `The estimated AQI for ${currentResult.station.name} has a value of ${aqi}. The pollution rate is ${quality(aqi)}.`;
        //if user position (and distance) is known, tell also the user how far they are from the stated station
        if (far != null || far != undefined) {
          document.getElementById("answer").innerHTML += `The estimated distance from your position is about ${far} kilometers.`;
        }
      }
      //if search was NOT by keyword (unique result)
      else {
        //take notice of aqi value for further text info
        let aqi = data.data.aqi;
        //calculate distance from user for first result
        let far = distance(data.data.city.geo[0], data.data.city.geo[1]);
        //if search was by name
        if (searching == 1) {
          //tell user the result and quality for their searched position
          document.getElementById("answer").innerHTML = `The estimated AQI for ${data.data.city.name} has a value of ${aqi}. The pollution rate is ${quality(aqi)}.`;
        }
        //if search was by geolocation
        else if (searching == 3) {
          //tell user the result and quality for their current position (nearest)
          document.getElementById("answer").innerHTML = `The nearest station to your estimated position is in ${data.data.city.name}. The estimated AQI has a value of ${aqi}. The pollution rate is ${quality(aqi)}.`;
        }
        //if user position (and distance) is known, tell also the user how far they are from the stated station
        if (far != null || far != undefined) {
          document.getElementById("answer").innerHTML += `The estimated distance from your position is about ${far} kilometers.`;
        }
      }
    }
    //optional further info
    document.getElementById("answer").innerHTML += ` For further details, you can check out the reference website infos <a target="_blank" href="https://www.airnow.gov/aqi/aqi-basics/">here</a>.`;
  });
}

//click event handlers for buttons
document.getElementById("butt0").addEventListener("click", function(){
  //go and call main function with name input by user
  locating(`city=${document.getElementById("query").value}`, 1);
});
document.getElementById("butt1").addEventListener("click", function(){
  //go and call main function with keyword input by user
  locating(`custom=${document.getElementById("query").value}`, 2);
});
document.getElementById("butt2").addEventListener("click", function(){
  //go and call main function with user current position
  locating(`latit=${userLatitude}&longi=${userLongitude}`, 3);
});
