const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

exports.handler = async event => {

  const API_KEY =  process.env.API_KEY;

  var city = event.queryStringParameters.name;
  const response = await fetch("https://api.waqi.info/feed/" + city + "/?token=" + API_KEY);
  const data = await response.json();

  const pass = (body) => {
    return {
      statusCode: 200,
      body: JSON.stringify(body)
    }
  };

  return pass(data);
}
