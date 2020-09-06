const path = require("path");
const express = require("express");
const hbs = require("hbs");
const header = require("./templates/partials/header.hbs");
const footer = require("./templates/partials/footer.hbs");

const app = express();
const joinpath = (l) => path.join(__dirname, l);

hbs.registerPartials(joinpath("./templates/views/partials"));
hbs.registerPartial("header", header);
hbs.registerPartial("footer", footer);

app.set("view engine", "hbs");
app.set("views", joinpath("./templates/views"));
app.use(express.static(joinpath("../public")));

app.get("", (req, res) => {
  res.render("index", { name: "Alexander", title: "Weather" });
});

app.get("/help", (req, res) => {
  res.render("help", { info: "You are on the help page!", title: "Help" });
});

app.get("/about", (req, res) => {
  res.render("about", { name: "Alexander", title: "About" });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is sunny",
    location: "Tampa",
  });
});

app.listen(3000, () => {
  console.log("Server running on http://127.0.0.1:3000");
});
