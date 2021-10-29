exports.handler = async event => {

  const API_KEY =  process.env.API_KEY
  const cityQuery = "Milan"
  const response = await fetch("https://api.waqi.info/feed/" + cityQuery + "/?token=" + API_KEY)
  const data = await response.json()

  const pass = (body) => {
    return {
      statusCode: 200,
      body: JSON.stringify(body)
    }
  }

  return pass(data)
}
