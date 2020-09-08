const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Alex Kazanski",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Alex Kazanski",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is some helpful text.",
    title: "Help",
    name: "Alex Kazanski",
  });
});

app.get("/weather", ({ query: { address } }, res) => {
  if (!address) {
    return res.send({
      error: "You must provide an address.",
    });
  }
  geocode(address, (error, { longitude, latitude, place_name } = {}) => {
    if (error) return res.send({ error });
    forecast(longitude, latitude, address, (error, data) => {
      if (error) return res.send({ error: data });
      return res.send({
        forecast: data,
        location: place_name,
      });
    });
  });
});

app.get("/products", ({ query: { search } }, res) => {
  if (!search) {
    return res.send({
      error: "You must provide a search term.",
    });
  }
  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    errorMessage: "Help article not found.",
    name: "Alex Kazanski",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    errorMessage: "Help page not found.",
    name: "Alex Kazanski",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
