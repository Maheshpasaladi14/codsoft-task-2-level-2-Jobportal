import React, { useEffect, useState } from "react";
import Navbar from "../ForHeader/Navbar";
import Footer from "../ForFooter/Footer";
import { Link, useParams } from "react-router-dom";

export default function JobDetails() {
  const [job, setJob] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/v1/jobs/${params.id}`,
          {
            method: "GET",
            headers: {
              "auth-token": localStorage.getItem("auth-token"),
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setJob(data.job);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJob();
  }, [params.id]);

  if (job === null) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="job-details">
        <h1>{job.title}</h1>
        <h4>{job.company}</h4>
        <Link to="/apply">
          <button className="btn btn-primary mb-2">Apply to this Job</button>
        </Link>
        <div className="description">
          <h4>Job Description</h4>
          <p>{job.description}</p>
        </div>
        <div className="skills">
          <h4>Skills Required</h4>
          <p>{job.skills}</p>
        </div>
        <div className="location">
          <h4>Job Location</h4>
          <p>{job.location}</p>
        </div>
        <div className="salary">
          <h4>Salary</h4>
          <p>Best in Industry</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
