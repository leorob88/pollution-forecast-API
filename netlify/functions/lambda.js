const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const API_KEY =  process.env.API_KEY;

exports.handler = async event => {

  let target = event.queryStringParameters;
  let data;

  let url = target.city != null ? `https://api.waqi.info/feed/${target.city}/?token=${API_KEY}` :
          target.custom != null ? `https://api.waqi.info/search/?keyword=${target.custom}&token=${API_KEY}` :
          (target.latit != null && target.longi != null) ? `https://api.waqi.info/feed/geo:${target.latit};${target.longi}/?token=${API_KEY}`;

  const response = await fetch(url);
  data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}
