const path = require("path");
const express = require("express");

const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.static(path.join(__dirname, "../public")));

app.get("", (req, res) => {
  res.render("index", { name: "Alexander" });
});

app.get("/help", (req, res) => {
  res.render("help", { info: "You are on the help page!" });
});

app.get("/about", (req, res) => {
  res.render("about", { name: "Alexander" });
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
