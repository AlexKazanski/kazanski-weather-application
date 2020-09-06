const request = require("request");
const forecast = require("./utils/forecast.js");
const geocode = require("./utils/geocode.js");
const yargs = require("yargs");

yargs.command({
  command: "search",
  description: "search a location",
  builder: {
    location: {
      description: "the location",
      demandOption: true,
      type: "string",
    },
  },
});

geocode(yargs.parse().location, (error, data) => {
  if (error) return console.log(error);
  const { longitude, latitude, place_name } = data;
  forecast(longitude, latitude, place_name, (error, forecastData) => {
    if (error) return console.log(error);
    console.log(forecastData);
  });
});
