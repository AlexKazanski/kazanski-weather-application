const path = require("path");
const express = require("express");

console.log(__dirname);
console.log(__filename);

const app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is sunny",
    location: "Tampa",
  });
});

app.listen(3000, () => {
  console.log("Server running on http://127.0.0.1:3000");
});
