
async function callLambdaFunction() {
  const response = await fetch("/.netlify/functions/lambda");
  const data = await response.json();

  console.log(data);
}

callLambdaFunction();
