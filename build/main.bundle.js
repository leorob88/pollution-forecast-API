(()=>{var e;navigator.geolocation.getCurrentPosition((async function(o){e=await o.coords,console.log(o),console.log("Current position:"),console.log(`Latitude : ${e.latitude}`),console.log(`Longitude: ${e.longitude}`),console.log(`(Accuracy: about ${e.accuracy} meters.`)}),(function(e){console.warn(`Error(${e.code}): ${e.message}`)}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0});var o=`geo:${e.latitude};${e.longitude}`;!async function(){const e=await fetch(`/.netlify/functions/lambda?name=${o}`),t=await e.json();if(console.log(t),"Unknown station"==t.data)document.getElementById("answer").innerHTML="The location you searched for has no stations for pollution detection.";else{var a,n=t.data.aqi;a=n>300?"hazardous":n>200?"very unhealthy":n>150?"unhealthy":n>100?"unhealthy for sensitive groups":n>50?"moderate":"good",document.getElementById("answer").innerHTML+=`The nearest station to your estimated position is in ${t.data.city.name}. The estimated AQI has a value of ${t.data.aqi}. The pollution rate is ${a}.`,document.getElementById("answer").innerHTML+=' For further details, you can check out the reference website infos <a href="https://www.airnow.gov/aqi/aqi-basics/">here</a>.'}}()})();