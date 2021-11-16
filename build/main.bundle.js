!async function(){const o=await fetch("/.netlify/functions/lambda"),a=await o.json();if("Unknown station"==a.data)console.log("The location you searched for has no stations for pollution detection.");else{var e,t=a.data.aqi;e=t>300?"hazardous":t>200?"very unhealthy":t>150?"unhealthy":t>100?"unhealthy for sensitive groups":t>50?"moderate":"good",console.log(`The estimated AQI for ${a.data.city.name} has a value of ${t}. The pollution rate is ${e}.`),console.log(' For further details, you can check out the reference website infos <a href="https://www.airnow.gov/aqi/aqi-basics/">here</a>.')}}();