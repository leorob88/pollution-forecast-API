//import img from "./project-icon.png";

async function requestPollutionData() {

  const API_KEY = process.env.API_KEY;

  // function infos(pos) {
  //   var crd = pos.coords;
  //   console.log(pos);
  //   console.log('Current position:');
  //   console.log(`Latitude : ${crd.latitude}`);
  //   console.log(`Longitude: ${crd.longitude}`);
  //   console.log(`(Accuracy: about ${crd.accuracy} meters.`);
  // }
  // function error(err) {
  //   console.warn(`Error(${err.code}): ${err.message}`);
  // }
  // var options = {
  //   enableHighAccuracy: true,
  //   timeout: 5000,
  //   maximumAge: 0
  // };

  //navigator.geolocation.getCurrentPosition(infos, error, options);

  var cityQuery = document.getElementById("query").value;
  const response = await fetch("https://api.waqi.info/feed/" + /*cityQuery*/ "here" + "/?token=" + API_KEY);
  const data = await response.json();
  console.log(data);
  if (data.data == "Unknown station"){
    document.getElementById("answer").innerHTML = "The location you searched for has no stations for pollution detection.";
  }
  else{
    var aqi = data.data.aqi;
    var more;
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
    //document.getElementById("answer").innerHTML = `The estimated AQI for ${data.data.city.name} has a value of ${aqi}. The pollution rate is ${more}.`;
    document.getElementById("answer").innerHTML += `The nearest station to your estimated position is in ${data.data.city.name}. The estimated AQI has a value of ${data.data.aqi}. The pollution rate is ${more}.`;
    document.getElementById("answer").innerHTML += ` For further details, you can check out the reference website infos <a href="https://www.airnow.gov/aqi/aqi-basics/">here</a>.`;
  }
}

requestPollutionData();
