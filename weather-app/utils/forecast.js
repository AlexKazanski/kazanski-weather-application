const request = require("request");
const settings = require("../settings.js");

const forecast = (
  longitude,
  latitude,
  location,
  callback,
  accessKey = settings.accessKey
) => {
  const uri = `http://api.weatherstack.com/current?access_key=${accessKey}&query=${latitude},${longitude}&units=f`;
  request(
    { uri, method: "GET", json: true },
    (error, { body: { error: bodyError } }, body) => {
      if (error) {
        callback(error, "Unable to connect to location services!");
      } else if (bodyError) {
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
    }
  );
};

module.exports = forecast;
