

let check = 0;
let queryarg2 = document.getElementById("query").value;

async function callLambdaFunction(queryarg) {

  console.log(check);
  console.log(queryarg);
  const response = await fetch(`/.netlify/functions/lambda?name=${queryarg}`);
  const data = await response.json();

  console.log(data);

  if (data.data == "Unknown station"){
    if (check == 0){
      document.getElementById("answer").innerHTML = "I couldn't find any stations for pollution detection in the location you searched for.";
      const locate = new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));
      locate.then(pos => {
        let crd = pos.coords;
        console.log(pos);
        console.log('Current position:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`(Accuracy: about ${crd.accuracy} meters.`);
        check = 1;
        let pass = "geo:" + crd.latitude.toString() + ";" + crd.longitude.toString();
        callLambdaFunction("geo:45.4886;9.1647");
      })
    }else{
      document.getElementById("answer").innerHTML += " I also tried to locate your position but still it has no stations for pollution detection.";
    }
  }
  else{
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
    // document.getElementById("answer").innerHTML = `The estimated AQI for ${data.data.city.name} has a value of ${aqi}. The pollution rate is ${more}.`;
    document.getElementById("answer").innerHTML += `The nearest station to your estimated position is in ${data.data.city.name}. The estimated AQI has a value of ${data.data.aqi}. The pollution rate is ${more}.`;
    document.getElementById("answer").innerHTML += ` For further details, you can check out the reference website infos <a href="https://www.airnow.gov/aqi/aqi-basics/">here</a>.`;
  }
}

callLambdaFunction(queryarg2);
