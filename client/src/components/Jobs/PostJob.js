import React, { useState } from "react";
import { useJobContext } from "../../context/JobContext";
import Navbar from "../ForHeader/Navbar";
import Footer from "../ForFooter/Footer";
import { useNavigate } from "react-router-dom";

export default function PostJob() {
  const [jobData, setJobData] = useState({
    title: "",
    company: "",
    location: "",
    jobtype: "Full Time", // Default value
    createdBy: localStorage.getItem("user_id"),
    skills: "",
    level: "Entry Level",
    description: "",
  });

  const navigate = useNavigate();
  const { createJob } = useJobContext();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobData({
      ...jobData,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    createJob(jobData);
    navigate("/home");
  };

  return (
    <div>
      <Navbar />
      <div className="container add-job">
        <div className="row">
          <div>
            <form className="row g-3" onSubmit={handleOnSubmit}>
              <div className="col-md-4">
                <label htmlFor="title" className="form-label"style={{color:"white"}}>
                  Job Title
                </label>
                <input
                  type="text"
                  className="form-control shadow-none"
                  id="title"
                  name="title" // Add the 'name' attribute
                  value={jobData.title}
                  onChange={handleInputChange} // Handle input changes
                  required
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="company" className="form-label"style={{color:"white"}}>
                  Company
                </label>
                <input
                  type="text"
                  className="form-control shadow-none"
                  id="company"
                  name="company"
                  value={jobData.company}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="level" className="form-label"style={{color:"white"}}>
                  Job Level
                </label>
                <select
                  name="level"
                  className="form-select shadow-none"
                  value={jobData.level}
                  onChange={handleInputChange}
                  required
                >
                  <option value="Entry Level">Entry Level</option>
                  <option value="Mid Senior">Mid Senior</option>
                  <option value="Senior">Senior</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="skills" className="form-label"style={{color:"white"}}>
                  Skills Required
                </label>
                <input
                  type="text"
                  className="form-control shadow-none"
                  id="skills"
                  name="skills"
                  value={jobData.skills}
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="job-type" className="form-label"style={{color:"white"}}>
                  Job Type
                </label>
                <select
                  name="jobtype"
                  className="form-select shadow-none"
                  value={jobData.jobtype}
                  onChange={handleInputChange}
                  required
                >
                  <option value="Full Time">Full Time</option>
                  <option value="Internship">Internship</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>
              <div className="col-12">
                <label htmlFor="description" className="form-label"style={{color:"white"}}>
                  Description
                </label>
                <textarea
                  type="text"
                  className="form-control shadow-none"
                  id="description"
                  name="description"
                  rows={10}
                  value={jobData.description}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <div className="col-12">
                <label htmlFor="location" className="form-label"style={{color:"white"}}>
                  Location
                </label>
                <input
                  type="text"
                  className="form-control shadow-none"
                  id="location"
                  name="location"
                  placeholder="Ex. Hyderabad, India"
                  value={jobData.location}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-12">
                <button type="submit" className="btn" style={{background:"#f26e11",color:"white"}}>
                  Add Job
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
