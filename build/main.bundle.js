(()=>{var e,t,n;const o={enableHighAccuracy:!0,maximumAge:3e4,timeout:27e3};function a(n,o){console.log(n+" "+o);const a=n*Math.PI/180,i=e*Math.PI/180,r=(e-n)*Math.PI/180,s=(t-o)*Math.PI/180,d=Math.sin(r/2)*Math.sin(r/2)+Math.cos(a)*Math.cos(i)*Math.sin(s/2)*Math.sin(s/2),l=2*Math.atan2(Math.sqrt(d),Math.sqrt(1-d))*6371e3/1e3;return Math.round(l)}function i(e){console.log(e),fetch(`/.netlify/functions/lambda?${e}`).then((e=>e.json())).then((e=>{if(console.log(e),"Unknown station"==e.data)1==n?document.getElementById("answer").innerHTML="I couldn't find any stations for pollution detection in the location you searched for.":2==n?document.getElementById("answer").innerHTML="I couldn't find any stations for pollution detection. Be sure to provide a proper location keyword.":3==n&&(document.getElementById("answer").innerHTML="I couldn't find any stations for pollution detection. Be sure to provide your current position");else{let t,o=e.data.aqi;t=o>300?"hazardous":o>200?"very unhealthy":o>150?"unhealthy":o>100?"unhealthy for sensitive groups":o>50?"moderate":"good",1==n?document.getElementById("answer").innerHTML=`The estimated AQI for ${e.data.city.name} has a value of ${o}. The pollution rate is ${t}.`:2==n?document.getElementById("answer").innerHTML="I couldn't find any stations for pollution detection. Be sure to provide a proper location keyword.":3==n&&(document.getElementById("answer").innerHTML=`The nearest station to your estimated position is in ${e.data.city.name}. The estimated AQI has a value of ${e.data.aqi}. The pollution rate is ${t}.`),2==n?(console.log("array "+e.data.length),console.log(`${a(e.data[0].station.geo[0],e.data[0].station.geo[1])} kilometers`)):console.log(`${a(e.data.city.geo[0],e.data.city.geo[1])} kilometers`)}document.getElementById("answer").innerHTML+=' For further details, you can check out the reference website infos <a target="_blank" href="https://www.airnow.gov/aqi/aqi-basics/">here</a>.'}))}new Promise(((e,t)=>navigator.geolocation.getCurrentPosition(e,t,o))).then((n=>{e=n.coords.latitude,t=n.coords.longitude})).catch((e=>{console.log(e)})),document.getElementById("butt0").addEventListener("click",(function(){n=1,i(`city=${document.getElementById("query").value}`)})),document.getElementById("butt1").addEventListener("click",(function(){n=2,i(`custom=${document.getElementById("query").value}`)})),document.getElementById("butt2").addEventListener("click",(function(){n=3,i(`latit=${e}&longi=${t}`)}))})();