const mongoose = require("mongoose");

const JobSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  jobtype: {
    type: String,
    required: true,
    default: "Full Time",
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  skills: {
    type: String,
  },
  description: {
    type: String,
  },
  level: {
    type: String,
    required: true,
    default: "Mid Senior",
  },
  datePosted: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Job", JobSchema, "jobs");
