async function requestPollutionData() {
  // la nostra chiave è al sicuro nelle Environment Variables
  const API_KEY = process.env.API_KEY;

  var cityQuery = "Milan";
  const response = await fetch("https://api.waqi.info/feed/" + cityQuery + "/?token=" + API_KEY); // non scriverò COME fare la richiesta, va capito dalla documentazione https://aqicn.org/json-api/doc/
  const data = await response.json();

  console.log(data.data.city.name + " " + data.data.time.tz); // facciamo ciò che vogliamo con i dati ottenuti: scelta, elaborazione, visualizzazione..
}

requestPollutionData()
