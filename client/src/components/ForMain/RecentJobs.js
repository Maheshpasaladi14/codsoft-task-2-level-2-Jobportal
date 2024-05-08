import React, { useState } from "react";
import JobItem from "./JobItem";
import { useJobContext } from "../../context/JobContext";
import SearchBar from "../ForHeader/SearchBar";

export default function Main() {
  const { jobs } = useJobContext();
  const [searchParams, setSearchParams] = useState({
    title: "",
    location: "",
    type: "",
  });

  // Callback function to handle search
  const handleSearch = (params) => {
    setSearchParams(params);
  };

  // Filter jobs based on search parameters
  const filteredJobs = jobs.filter((job) => {
    const titleMatch =
      !searchParams.title ||
      job.title.toLowerCase().includes(searchParams.title.toLowerCase());
    const locationMatch =
      !searchParams.location ||
      job.location.toLowerCase().includes(searchParams.location.toLowerCase());
    const typeMatch = !searchParams.type || job.jobtype === searchParams.type;

    return titleMatch && locationMatch && typeMatch;
  });

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <div className="recent-jobs">
        <h1 style={{color:"white",fontWeight:"bold"}}>Recent Jobs</h1>
        <div className="job-items mt-5">
          {filteredJobs.map((job) => (
            <JobItem
              key={job._id}
              title={job.title}
              type={job.jobtype}
              company={job.company}
              location={job.location}
              jobId={job._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
