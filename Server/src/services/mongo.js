const mongoose = require("mongoose");
const morgan = require("morgan");

const MONGO_URL = `mongodb://localhost:27017`;
//   "mongodb://127.0.0.1:27017/";
//"mongodb+srv://nasa-api:DmB8J1E3zfRIX3aD@nasacluster.coxzp.mongodb.net/nasa?retryWrites=true&w=majority&appName=NASACluster";
// ("mongodb+srv://nasa-api:<db_password>@nasacluster.coxzp.mongodb.net/?retryWrites=true&w=majority&appName=NASACluster");

async function mongoConnect(){
  await mongoose.connect(MONGO_URL)
}
async function mongoDisconnect() {
  await mongoose.disconnect();
}

mongoose.connection.once("open", async () => {
  console.log("MongoDB connection successful");
});
mongoose.connection.on("error", (err) => {
  console.error(err);
});

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
