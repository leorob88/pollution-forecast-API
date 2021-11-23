(()=>{function e(e){fetch(`/.netlify/functions/lambda?${e}`).then((e=>e.json())).then((t=>{if(console.log(t),"Unknown station"==t.data)e.indexOf("city=")>-1?document.getElementById("answer").innerHTML="I couldn't find any stations for pollution detection in the location you searched for.":document.getElementById("answer").innerHTML="I couldn't find any stations for pollution detection with your current position.";else{let n,o=t.data.aqi;n=o>300?"hazardous":o>200?"very unhealthy":o>150?"unhealthy":o>100?"unhealthy for sensitive groups":o>50?"moderate":"good",e.indexOf("city=")>-1?document.getElementById("answer").innerHTML=`The estimated AQI for ${t.data.city.name} has a value of ${o}. The pollution rate is ${n}.`:document.getElementById("answer").innerHTML=`The nearest station to your estimated position is in ${t.data.city.name}. The estimated AQI has a value of ${t.data.aqi}. The pollution rate is ${n}.`}document.getElementById("answer").innerHTML+=' For further details, you can check out the reference website infos <a href="https://www.airnow.gov/aqi/aqi-basics/">here</a>.'}))}document.getElementById("butt1").addEventListener("click",(function(){e(`city=${document.getElementById("query").value}`)})),document.getElementById("butt2").addEventListener("click",(function(){new Promise(((e,t)=>navigator.geolocation.getCurrentPosition(e,t))).then((t=>{e(`latit=${t.coords.latitude}&longi=${t.coords.longitude}`)}))}))})();