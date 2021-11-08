exports.handler = async event => {

  const API_KEY =  process.env.API_KEY
  const fetch = require('cross-fetch')
  const cityQuery = "Milan"
  const response = await fetch("https://api.waqi.info/feed/" + cityQuery + "/?token=" + API_KEY)
  const data = await response.json()
  console.log(data.data.city.name + " " + data.data.time.tz + " " + data.data.aqi)

  const pass = (body) => {
    return {
      statusCode: 200,
      body: JSON.stringify(body)
    }
  }

  return pass(data)
}
