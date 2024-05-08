const Job = require("../models/job");
const User = require("../models/user");

const postJob = async (req, res) => {
  try {
    const newJob = await Job.create({ ...req.body });
    return res
      .status(200)
      .json({ message: "Job Created Successfully", newJob });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ datePosted: -1 });
    return res.status(200).json({ jobs });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(201).json({ message: "No Job Found" });
    }
    return res.status(200).json({ job });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const editJob = async (req, res) => {
  try {
    let job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(201).json({ message: "No Job Found" });
    }
    job = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json({ message: "Job Updated Successfully", job });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const deleteJob = async (req, res) => {
  try {
    let job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(201).json({ message: "No Job Found" });
    }
    job = await Job.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Job Deleted Successfully" });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const userJobs = async (req, res) => {
  try {
    const userId = req.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const userJobs = await Job.find({ createdBy: userId }).sort({ date: -1 });    

    return res.status(200).json({ userJobs });
  } catch (error) {
    return res.status(500).json({ message: "Server error At User Jobs" });
  }
};

module.exports = {
  getAllJobs,
  getJobById,
  postJob,
  editJob,
  deleteJob,
  userJobs,
};
