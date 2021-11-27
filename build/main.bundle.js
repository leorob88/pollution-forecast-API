(()=>{var t,e;const n={enableHighAccuracy:!0,maximumAge:3e4,timeout:27e3};function o(n){console.log(n),fetch(`/.netlify/functions/lambda?${n}`).then((t=>t.json())).then((o=>{if(console.log(o),"Unknown station"==o.data)n.indexOf("city=")>-1?document.getElementById("answer").innerHTML="I couldn't find any stations for pollution detection in the location you searched for.":document.getElementById("answer").innerHTML="I couldn't find any stations for pollution detection with your current position.";else{let a,i=o.data.aqi;a=i>300?"hazardous":i>200?"very unhealthy":i>150?"unhealthy":i>100?"unhealthy for sensitive groups":i>50?"moderate":"good",n.indexOf("city=")>-1?document.getElementById("answer").innerHTML=`The estimated AQI for ${o.data.city.name} has a value of ${i}. The pollution rate is ${a}.`:document.getElementById("answer").innerHTML=`The nearest station to your estimated position is in ${o.data.city.name}. The estimated AQI has a value of ${o.data.aqi}. The pollution rate is ${a}.`;const s=6371e3,c=o.data.city.geo[0],d=o.data.city.geo[1];console.log(c+" "+d);const l=c*Math.PI/180,r=t*Math.PI/180,u=(t-c)*Math.PI/180,h=(e-d)*Math.PI/180,m=Math.sin(u/2)*Math.sin(u/2)+Math.cos(l)*Math.cos(r)*Math.sin(h/2)*Math.sin(h/2),y=s*(2*Math.atan2(Math.sqrt(m),Math.sqrt(1-m)))/1e3;console.log(y+" kilometers")}document.getElementById("answer").innerHTML+=' For further details, you can check out the reference website infos <a target="_blank" href="https://www.airnow.gov/aqi/aqi-basics/">here</a>.'}))}new Promise(((t,e)=>navigator.geolocation.getCurrentPosition(t,e,n))).then((n=>{t=n.coords.latitude,e=n.coords.longitude})).catch((t=>{console.log(t)})),document.getElementById("butt0").addEventListener("click",(function(){o(`city=${document.getElementById("query").value}`)})),document.getElementById("butt1").addEventListener("click",(function(){o(`custom=${document.getElementById("query").value}`)})),document.getElementById("butt2").addEventListener("click",(function(){o(`latit=${t}&longi=${e}`)}))})();