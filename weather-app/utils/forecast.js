const request = require("request");

const forecast = (
  longitude,
  latitude,
  location,
  callback,
  accessKey = "<API_KEY>"
) => {
  const url = `http://api.weatherstack.com/current?access_key=${accessKey}&query=${latitude},${longitude}&units=f`;
  request({ uri: url, method: "GET", json: true }, (error, response, body) => {
    if (error) {
      callback(error, "Unable to connect to location services!");
    } else if (response.body.error) {
      callback(error, "Unable to find coordinates");
    } else {
    const {
      current: { temperature, feelslike },
    } = body;
      callback(
        undefined,
        `It is ${temperature}° in ${location}, but it feels like ${feelslike}°`
      );
    }
  });
};

module.exports = forecast;
