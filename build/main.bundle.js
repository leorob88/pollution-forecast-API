(()=>{async function e(){const e={enableHighAccuracy:!0,maximumAge:3e4,timeout:27e3};(await new Promise(((t,n)=>navigator.geolocation.getCurrentPosition(t,n,e)))).then((e=>{console.log(e);const t=e.coords.latitude,n=e.coords.longitude;return console.log("restituisco le coord"),{userLatitude:t,userLongitude:n}})).catch((e=>{console.log(e)}))}function t(t,n){console.log("calcolo la distanza"),console.log(t+" "+n);const o=t*Math.PI/180,a=e().userLatitude*Math.PI/180,i=(e().userLatitude-t)*Math.PI/180,s=(e().userLongitude-n)*Math.PI/180,r=Math.sin(i/2)*Math.sin(i/2)+Math.cos(o)*Math.cos(a)*Math.sin(s/2)*Math.sin(s/2),l=2*Math.atan2(Math.sqrt(r),Math.sqrt(1-r))*6371e3/1e3;return Math.round(l)}function n(e){return e>300?"hazardous":e>200?"very unhealthy":e>150?"unhealthy":e>100?"unhealthy for sensitive groups":e>50?"moderate":"good"}function o(e,o){console.log(e),fetch(`/.netlify/functions/lambda?${e}`).then((e=>e.json())).then((e=>{if(console.log(e),"Unknown station"==e.data)1==o?document.getElementById("answer").innerHTML="I couldn't find any stations for pollution detection in the location you searched for.":2==o?document.getElementById("answer").innerHTML="I couldn't find any stations for pollution detection. Be sure to provide a proper location keyword.":3==o&&(document.getElementById("answer").innerHTML="I couldn't find any stations for pollution detection. Be sure to provide your current position");else if(2==o){console.log("array "+e.data.length),e.data.length,currentResult=e.data[1];let o=currentResult.aqi;document.getElementById("answer").innerHTML=`The estimated AQI for ${currentResult.station.name} has a value of ${o}. The pollution rate is ${n(o)}.`,console.log(`${t(currentResult.station.geo[0],currentResult.station.geo[1])} kilometers`)}else{let a=e.data.aqi;1==o?document.getElementById("answer").innerHTML=`The estimated AQI for ${e.data.city.name} has a value of ${a}. The pollution rate is ${n(a)}.`:3==o&&(document.getElementById("answer").innerHTML=`The nearest station to your estimated position is in ${e.data.city.name}. The estimated AQI has a value of ${a}. The pollution rate is ${n(a)}.`),console.log(`${t(e.data.city.geo[0],e.data.city.geo[1])} kilometers`)}document.getElementById("answer").innerHTML+=' For further details, you can check out the reference website infos <a target="_blank" href="https://www.airnow.gov/aqi/aqi-basics/">here</a>.'}))}document.getElementById("butt0").addEventListener("click",(function(){console.log("faccio fetch milano"),o(`city=${document.getElementById("query").value}`,1)})),document.getElementById("butt1").addEventListener("click",(function(){o(`custom=${document.getElementById("query").value}`,2)})),document.getElementById("butt2").addEventListener("click",(function(){o(`latit=${e().userLatitude}&longi=${e().userLongitude}`,3)}))})();