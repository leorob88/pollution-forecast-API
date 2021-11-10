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

  var cityQuery = "Sona";
  const response = await fetch("https://api.waqi.info/feed/" + /*cityQuery*/ "here" + "/?token=" + API_KEY);
  const data = await response.json();

  if (data.data == "Unknown station"){
    console.log("Il luogo cercato non ha stazioni di rilevamento disponibili.");
  }
  else{
    //console.log(data.data.city.name + " " + data.data.time.tz + " " + data.data.aqi);
    const near = await fetch("https://api.waqi.info/feed/geo:" + data.data.city.geo[0] + ";" + data.data.city.geo[1] + "/?token=" + API_KEY);
    const station = await near.json();
    console.log(station.data.city.name);
  }
}

requestPollutionData()
