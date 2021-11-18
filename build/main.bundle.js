!async function(){const e=await fetch("/.netlify/functions/lambda?name=here"),t=await e.json();if("Unknown station"==t.data)document.getElementById("answer").innerHTML="The location you searched for has no stations for pollution detection.";else{var a,n=t.data.aqi;a=n>300?"hazardous":n>200?"very unhealthy":n>150?"unhealthy":n>100?"unhealthy for sensitive groups":n>50?"moderate":"good";const e=await fetch("https://api.waqi.info/feed/geo:"+t.data.city.geo[0]+";"+t.data.city.geo[1]+"/?token="+API_KEY),o=await e.json();document.getElementById("answer").innerHTML=`The nearest station to your estimated position is in ${o.data.city.name}. The estimated AQI has a value of ${o.data.aqi}. The pollution rate is ${a}.`,document.getElementById("answer").innerHTML+=' For further details, you can check out the reference website infos <a href="https://www.airnow.gov/aqi/aqi-basics/">here</a>.'}}();