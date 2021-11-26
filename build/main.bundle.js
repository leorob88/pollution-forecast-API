(()=>{function t(t){console.log(t),fetch(`/.netlify/functions/lambda?${t}`).then((t=>t.json())).then((e=>{if(console.log(e),"Unknown station"==e.data)t.indexOf("city=")>-1?document.getElementById("answer").innerHTML="I couldn't find any stations for pollution detection in the location you searched for.":document.getElementById("answer").innerHTML="I couldn't find any stations for pollution detection with your current position.";else{let n,o=e.data.aqi;n=o>300?"hazardous":o>200?"very unhealthy":o>150?"unhealthy":o>100?"unhealthy for sensitive groups":o>50?"moderate":"good",t.indexOf("city=")>-1?document.getElementById("answer").innerHTML=`The estimated AQI for ${e.data.city.name} has a value of ${o}. The pollution rate is ${n}.`:document.getElementById("answer").innerHTML=`The nearest station to your estimated position is in ${e.data.city.name}. The estimated AQI has a value of ${e.data.aqi}. The pollution rate is ${n}.`;const a=6371e3,i=e.data.city.geo[0],s=e.data.city.geo[1],d=t.substring(6,t.indexOf("&longi")),r=t.indexOf("&longi")+6,l=t.substring(r,t.length-r),c=i*Math.PI/180,h=d*Math.PI/180,u=(d-i)*Math.PI/180,g=(l-s)*Math.PI/180,y=Math.sin(u/2)*Math.sin(u/2)+Math.cos(c)*Math.cos(h)*Math.sin(g/2)*Math.sin(g/2),m=a*(2*Math.atan2(Math.sqrt(y),Math.sqrt(1-y)))/1e3;console.log(m+" kilometers")}document.getElementById("answer").innerHTML+=' For further details, you can check out the reference website infos <a target="_blank" href="https://www.airnow.gov/aqi/aqi-basics/">here</a>.'}))}document.getElementById("butt1").addEventListener("click",(function(){t(`city=${document.getElementById("query").value}`)})),document.getElementById("butt2").addEventListener("click",(function(){new Promise(((t,e)=>navigator.geolocation.getCurrentPosition(t,e))).then((e=>{t(`latit=${e.coords.latitude}&longi=${e.coords.longitude}`),console}))}))})();