const http = require("http");
const { mongoConnect } = require("./services/mongo");
//checking if MongoDb has been connected successfully or if an error is encountered

const { loadPlanetsData } = require("./models/planets.model");
const {loadLaunchesData}= require ("./models/launches.model")

const app = require("./app");
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);
async function startServer() {
  await mongoConnect();
  await loadPlanetsData();
  await loadLaunchesData();
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}
startServer();