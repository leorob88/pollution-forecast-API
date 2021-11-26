//import img from "./project-icon.png";

async function requestPollutionData() {

  const API_KEY = process.env.API_KEY;

  var cityQuery = document.getElementById("query").value;
  const signal = new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));
  signal.then(pos => {
    //store coordinates
    const latit = pos.coords.latitude;
    const longi = pos.coords.longitude;
    //calls main function with input target given by button (stored coordinates above)
    console.log(pos);
  });

  //calculate distance between 2 coordinates (45;9 -- 46;11)
  const R = 6371e3; // metres
  const φ1 = 45.470501 * Math.PI/180; // φ, λ in radians
  const φ2 = 46.5338368 * Math.PI/180;
  const Δφ = (46.5338368 - 45.470501) * Math.PI/180;
  const Δλ = (11.2427008 - 9.19746075) * Math.PI/180;

  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  const d = R * c / 1000; // in metres
  console.log(d + " chilometri");

  const response = await fetch("https://api.waqi.info/search/?keyword=" + cityQuery /*"here"*/ + "&token=" + API_KEY);
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
    document.getElementById("answer").innerHTML += ` For further details, you can check out the reference website infos <a target="_blank" href="https://www.airnow.gov/aqi/aqi-basics/">here</a>.`;
  }
}

requestPollutionData();
