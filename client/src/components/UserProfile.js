import React, { useState, useEffect } from "react";
import Navbar from "./ForHeader/Navbar";
import Footer from "./ForFooter/Footer";
import { useJobContext } from "../context/JobContext";
import { Link } from "react-router-dom";

export default function UserProfile() {
  const [name, setName] = useState();
  const [bio, setBio] = useState("Jobify User");
  const [designation, setDesignation] = useState("Employee");
  const { userJobs, deleteJob } = useJobContext();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/v1/auth/user-details",
          {
            method: "GET",
            headers: {
              "auth-token": localStorage.getItem("auth-token"),
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setName(data.user.name);
          setBio(data.user.bio);
          setDesignation(data.user.designation);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchUser();
  }, []);

  const editProfile = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:5000/api/v1/auth/edit-profile",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify({ name, bio, designation }),
      }
    );
    const json = await response.json();
    if (json.ok) {
      console.log("Ok");
    } else {
      setTimeout(() => {}, 1500);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="user-profile">
        <div className="profile text-center py-4">
          <h1 style={{color:"white"}}>
            {name}
            <span
              className="material-symbols-outlined mx-2"
              data-toggle="modal"
              data-target="#editModal"
            >
              edit
            </span>
          </h1>
          <p>{designation}</p>
          <p>{bio}</p>
        </div>
        <div className="container text-center">
          <div className="row">
            <h3 className="my-2" style={{color:"white"}}>My Jobs</h3>
            <ul className="list-group">
              {/* Add posted jobs here */}
              {userJobs.map((job) => (
                <li key={job._id} className="list-group-item">
                  {job.title}
                  {/* <button className="btn btn-primary btn-sm mx-2">Edit</button> */}
                  <Link to={`/edit-job/${job._id}`} className="job-link btn btn-primary btn-sm mx-2">
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteJob(job._id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
      {/* Modal */}
      <div
        className="modal fade"
        id="editModal"
        tabIndex="-1"
        aria-labelledby="editModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="editModalLabel">
                Edit Profile
              </h1>
              <button
                type="button"
                className="btn-close"
                data-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={editProfile} className="p-2">
                <label htmlFor="username">Name</label>
                <br />
                <input
                  type="text"
                  name="username"
                  className="form-control shadow-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                <label htmlFor="designation">Designation</label>
                <br />
                <input
                  type="text"
                  name="designation"
                  className="form-control shadow-none"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                />
                <br />
                <label htmlFor="bio">Bio</label>
                <br />
                <textarea
                  name="bio"
                  rows="5"
                  className="form-control shadow-none"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
                <button
                  type="submit"
                  className="btn btn-primary btn-sm mt-2 w-100"
                  onClick={editProfile}
                  data-dismiss="modal"
                >
                  Edit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
