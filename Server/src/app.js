const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const planetsRouter = require("./routes/planets/planets.router");
const launchesRouter = require("./routes/launches/launches.router");

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:8000");
//   // You can also specify multiple origins like this:
//   // res.setHeader('Access-Control-Allow-Origin', ['http://localhost:8000', 'http://www.example.com']);
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// });
app.use(
  cors({
    origin: ["http://localhost:8000", "http://localhost:3000"],
  })
);
app.use(morgan("combined"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use("/planets", planetsRouter);
app.use("/launches", launchesRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
module.exports = app;
