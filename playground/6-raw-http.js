const http = require("http");
const settings = require("../weather-app/settings.js");

const url = `http://api.weatherstack.com/current?access_key=${settings.accessKey}&query=40,-75&units=f`;

const request = http.request(url, (res) => {
  let data = "";
  res.on("data", (chunk) => {
    console.log(JSON.parse(chunk.toString()));
  });
  res.on("end", () => {
    console.log("I finished!");
  });
});

request.on("error", (error) => {
  console.log("An error", error);
});

request.end();
