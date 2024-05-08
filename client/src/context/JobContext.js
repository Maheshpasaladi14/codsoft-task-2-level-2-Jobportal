import React, { createContext, useContext, useState, useEffect } from "react";

const JobContext = createContext();

export function useJobContext() {
  return useContext(JobContext);
}

const JobProvider = (props) => {
  const host = "http://localhost:5000/api/v1/jobs";
  const [jobs, setJobs] = useState([]);
  const [userJobs, setUserJobs] = useState([]);

  useEffect(() => {
    // Fetch jobs here and update the 'jobs' state
    const fetchJobs = async () => {
      try {
        const response = await fetch(`${host}/all-jobs`, {
          method: "GET",
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        }); // Replace with your API end
        if (response.ok) {
          const data = await response.json();
          setJobs(data.jobs);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  const createJob = async (newJobData) => {
    try {
      const response = await fetch(`${host}/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify(newJobData),
      }); // Replace with your API endpoint
      if (response.ok) {
        const data = await response.json();
        setJobs([...jobs, data.newJob]);
      }
    } catch (error) {
      console.error("Error Creating jobs:", error);
    }
  };

  useEffect(() => {
    // Fetch jobs here and update the 'jobs' state
    const fetchUserJobs = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/v1/jobs/user-jobs",
          {
            method: "GET",
            headers: {
              "auth-token": localStorage.getItem("auth-token"),
            },
          }
        );
        const data = await response.json();
        setUserJobs(data.userJobs);
      } catch (error) {
        console.log("Error Fetching User Jobs", error);
      }
    };

    fetchUserJobs();
  }, []);

  const deleteJob = async (id) => {
    await fetch(`http://localhost:5000/api/v1/jobs/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
    });
    const updatedJobs = userJobs.filter((job) => job._id !== id);
    setUserJobs(updatedJobs);
  };

  return (
    <JobContext.Provider value={{ jobs, createJob, userJobs, deleteJob }}>
      {props.children}
    </JobContext.Provider>
  );
};

export default JobProvider;
