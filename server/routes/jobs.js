const express = require("express");
const jobRouter = express.Router();
const verifyToken = require("../middleware/authentication");

const {
  getAllJobs,
  getJobById,
  postJob,
  editJob,
  deleteJob,
  userJobs,
} = require("../controllers/jobs.js");

jobRouter.get("/all-jobs", verifyToken, getAllJobs);
jobRouter.get("/user-jobs", verifyToken, userJobs);
jobRouter.get("/:id", verifyToken, getJobById);
jobRouter.post("/add", verifyToken, postJob);
jobRouter.put("/edit/:id", verifyToken, editJob);
jobRouter.delete("/delete/:id", verifyToken, deleteJob);

module.exports = jobRouter;
