
var crd;
function infos(pos) {
  crd = pos.coords;
  console.log(pos);
  console.log('Current position:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`(Accuracy: about ${crd.accuracy} meters.`);
}
function error(err) {
  console.warn(`Error(${err.code}): ${err.message}`);
}
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

navigator.geolocation.getCurrentPosition(infos, error, options);

var check = 0;
var queryarg = /*document.getElementById("query").value*/ `geo:${crd.latitude};${crd.longitude}`;

async function callLambdaFunction() {

  const response = await fetch(`/.netlify/functions/lambda?name=${queryarg}`);
  const data = await response.json();

  console.log(data);

  if (data.data == "Unknown station"){
    // if (check == 0){
      document.getElementById("answer").innerHTML = "The location you searched for has no stations for pollution detection.";
    //   queryarg = `geo:${crd.latitude};${crd.longitude}`;
    //   check = 1;
    //   callLambdaFunction(queryarg);
    // }else{
    //   document.getElementById("answer").innerHTML += " I also tried to locate your position but still it has no stations for pollution detection.";
    // }
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
    // document.getElementById("answer").innerHTML = `The estimated AQI for ${data.data.city.name} has a value of ${aqi}. The pollution rate is ${more}.`;
    document.getElementById("answer").innerHTML = `The nearest station to your estimated position is in ${data.data.city.name}. The estimated AQI has a value of ${data.data.aqi}. The pollution rate is ${more}.`;
    document.getElementById("answer").innerHTML += ` For further details, you can check out the reference website infos <a href="https://www.airnow.gov/aqi/aqi-basics/">here</a>.`;
  }
}

callLambdaFunction();
