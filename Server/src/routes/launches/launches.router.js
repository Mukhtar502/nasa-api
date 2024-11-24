const express = require("express");
const {
  httpGetAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch,
  httpGetLaunchById,
} = require("./launches.controller");
// const { httpAbortLaunch } = require("../../../../client/src/hooks/requests");
const launchesRouter = express.Router();
launchesRouter.get("/", httpGetAllLaunches);
launchesRouter.get("/:id", httpGetLaunchById)
launchesRouter.post("/", httpAddNewLaunch);
launchesRouter.delete("/:id", httpAbortLaunch);
module.exports = launchesRouter;
