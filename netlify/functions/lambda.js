exports.handler = async event => {

  const API_KEY =  process.env.API_KEY;

  var cityQuery = document.getElementById("query").value;
  const fetch = require('cross-fetch');
  const response = await fetch("https://api.waqi.info/feed/" + /*cityQuery*/ "here" + "/?token=" + API_KEY);
  const data = await response.json();
  const near = await fetch("https://api.waqi.info/feed/geo:" + data.data.city.geo[0] + ";" + data.data.city.geo[1] + "/?token=" + API_KEY);
  const station = await near.json();

  console.log(data);

  const pass = (body) => {
    return {
      statusCode: 200,
      body: JSON.stringify(body)
    }
  };

  return pass(data);
}
