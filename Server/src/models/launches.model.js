const launchesDatabase = require("./launches.mongo");
const launches = new Map();
let latestFlightNumber = 100;
const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("February 14, 2030"),
  target: "Kepler-442 b",
  Customers: ["Mukhtar Efunkunle", "NASA"],
  upcoming: true,
  success: true,
};
saveLaunch(launch);

function existsLaunchWithId(launchId) {
  return launches.has(launchId);
}
async function getAllLaunches() {
  return await launchesDatabase.find({});
}

async function saveLaunch(launch) {
  await launchesDatabase.updateOne(
    {
      flightNumber: launch.flightNumber,
    },
    { launch },
    {
      upsert: true,
    }
  );
}
function addNewLaunch(launch) {
  latestFlightNumber++;
  Object.assign(launch, {
    success: true,
    upcoming: true,
    flightNumber: latestFlightNumber,
    customers: ["zero to Mastery", "NASA"],
  });
  launches.set(latestFlightNumber, launch);
}

function abortLaunchById(launchId) {
  const aborted = launches.get(launchId);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted;
}

module.exports = {
  existsLaunchWithId,
  getAllLaunches,
  addNewLaunch,
  abortLaunchById,
};
