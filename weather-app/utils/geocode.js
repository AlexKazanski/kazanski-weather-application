const request = require("request");

const geocode = (location, callback) => {
  const uri = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    location
  )}.json?access_token=<API_KEY>&limit=1`;
  request({ uri: uri, method: "GET", json: true }, (error, response, body) => {
    if (error) {
      callback(error, "Unable to connect to location services!");
    } else if (response.body.error || !response.body.features.length) {
      callback(error, "Unable to find location");
    } else {
      const { center, place_name } = body.features[0];
      const [longitude, latitude] = center;
      callback(undefined, {
        longitude: longitude,
        latitude: latitude,
        place_name: place_name,
      });
    }
  });
};

module.exports = geocode;
