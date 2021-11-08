//import img from "./project-icon.png";

async function requestPollutionData() {

  const API_KEY = process.env.API_KEY;

  var cityQuery = "Milan";
  const response = await fetch("https://api.waqi.info/feed/" + cityQuery + "/?token=" + API_KEY);
  const data = await response.json();

  console.log(data.data.city.name + " " + data.data.time.tz + " " + data.data.aqi);
}

requestPollutionData()
