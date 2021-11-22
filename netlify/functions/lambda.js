const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const API_KEY =  process.env.API_KEY;

exports.handler = async event => {

  let target = event.queryStringParameters;
  let data;

  if (target.city){
    const response = await fetch(`https://api.waqi.info/feed/${target.city}/?token=${API_KEY}`);
    data = await response.json();
  }else if (target.latit && target.longi) {
    const response = await fetch(`https://api.waqi.info/feed/geo:${target.latit};${target.longi}/?token=${API_KEY}`);
    data = await response.json();
  }

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}
