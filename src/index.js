
async function callLambdaFunction() {
  const response = await fetch("/.netlify/functions/lambda");
  const data = await response.json();

  console.log(data.data.city.name + " " + data.data.time.tz + " " + data.data.aqi);
}

callLambdaFunction();
