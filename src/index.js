
async function callLambdaFunction() {
  const response = await fetch("/.netlify/functions/lambda");
  const data = await response.json();

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
      more = "unhealthy"
    }else if (aqi > 100) {
      more = "unhealthy for sensitive groups"
    }else if (aqi > 50) {
      more = "moderate"
    }else {
      more = "good"
    }
    //document.getElementById("answer").innerHTML = `The estimated AQI for ${data.data.city.name} has a value of ${aqi}. The pollution rate is ${more}.`;
    document.getElementById("answer").innerHTML = `The nearest station to your estimated position is in ${station.data.city.name}. The estimated AQI has a value of ${station.data.aqi}. The pollution rate is ${more}.`;
    document.getElementById("answer").innerHTML += ` For further details, you can check out the reference website infos <a href="https://www.airnow.gov/aqi/aqi-basics/">here</a>.`;
  }
}

callLambdaFunction();
