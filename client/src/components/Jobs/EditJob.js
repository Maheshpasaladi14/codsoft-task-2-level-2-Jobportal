import React from "react";
import Navbar from "../ForHeader/Navbar";
import Footer from "../ForFooter/Footer";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
export default function EditJob() {
  const params = useParams();
  const navigate = useNavigate();

  const [jobData, setJobData] = useState({
    id: "", // Initialize with the job ID you want to edit
    title: "",
    company: "",
    location: "",
    skills: "",
    jobType: "Full Time", // Set the default job type
    description: "",
  });

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // Send a PATCH request to update the job details
    await fetch(`http://localhost:5000/api/v1/jobs/edit/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
      body: JSON.stringify({
        title: jobData.title,
        company: jobData.company,
        location: jobData.location,
        skills: jobData.skills,
        jobType: jobData.jobType,
        description: jobData.description,
      }),
    });

    // Redirect to the job listing page or perform any other action upon success.
    navigate("/profile");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div>
      <Navbar />
      <div className="container add-job">
        <div className="row">
          <div>
            <form className="row g-3" onSubmit={handleOnSubmit}>
              <div className="col-md-4">
                <label htmlFor="title" className="form-label">
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
                <label htmlFor="company" className="form-label">
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
                <label htmlFor="level" className="form-label">
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
                <label htmlFor="skills" className="form-label">
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
                <label htmlFor="job-type" className="form-label">
                  Job Type
                </label>
                <select
                  name="jobType"
                  className="form-select shadow-none"
                  value={jobData.jobType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="Full Time">Full Time</option>
                  <option value="Internship">Internship</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>
              <div className="col-12">
                <label htmlFor="description" className="form-label">
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
                <label htmlFor="location" className="form-label">
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
                <button type="submit" className="btn btn-primary">
                  Edit Job
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
