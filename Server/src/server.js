const http = require("http");
const mongoose = require("mongoose");
//checking if MongoDb has been connected successfully or if an error is encountered
mongoose.connection.once("open", () => {
  console.log("MongoDB connection successful");
});
mongoose.connection.on("error", (err) => {
  console.error(err);
});
const { loadPlanetsData } = require("./models/planets.model");
const app = require("./app");
const PORT = process.env.PORT || 8000;
const MONGO_URL = `mongodb://localhost:27017`;
//"mongodb+srv://nasa-api:DmB8J1E3zfRIX3aD@nasacluster.coxzp.mongodb.net/nasa?retryWrites=true&w=majority&appName=NASACluster";
// ("mongodb+srv://nasa-api:<db_password>@nasacluster.coxzp.mongodb.net/?retryWrites=true&w=majority&appName=NASACluster");
const server = http.createServer(app);
async function startServer() {
  await mongoose.connect(MONGO_URL);
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}
startServer();

// const http = require("http");
// const mongoose = require("mongoose");

// mongoose.connection.once("open", () => {
//   console.log("MongoDB connection successful");
// });
// mongoose.connection.on("error", (err) => {
//   console.error("MongoDB connection error:", err);
// });

// const { loadPlanetsData } = require("./models/planets.model");
// const app = require("./app");
// const PORT = process.env.PORT || 8000;
// const MONGO_URL =
//   "mongodb+srv://nasa-api:DmB8J1E3zfRIX3aD@nasacluster.coxzp.mongodb.net/nasa?retryWrites=true&w=majority&appName=NASACluster";

// const server = http.createServer(app);

// async function startServer() {
//   try {
//     // Mongoose connection options (removing deprecated options)
//     await mongoose.connect(MONGO_URL, {
//       serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
//       socketTimeoutMS: 45000, // Timeout for idle sockets
//     });

//     // Load data only after MongoDB connection is successful
//     await loadPlanetsData();

//     // Start server after MongoDB connection is ready
//     server.listen(PORT, () => {
//       console.log(`Listening on port ${PORT}...`);
//     });
//   } catch (error) {
//     console.error("Failed to start server:", error);
//     process.exit(1); // Exit process if connection fails
//   }
// }

// startServer();
