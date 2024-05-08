import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar sticky top">
      <div className="name">
        <Link to="/home">
          <h2>DREAMJobs</h2>
        </Link>
      </div>
      <div className="options">
        <Link
          to="/profile"
          className="navitem mx-2"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span className="material-symbols-outlined">account_circle</span>
          <span className="mx-1">Profile</span>
        </Link>
        <Link
          to="/home"
          className="navitem mx-2"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span className="material-symbols-outlined">home</span>
          <span className="mx-1">Home</span>
        </Link>
        <Link
          to="/add-new-job"
          className="navitem mx-2"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span className="material-symbols-outlined">work</span>
          <span className="mx-1">Post Job</span>
        </Link>
        <Link
          to="/about-us"
          className="navitem mx-2"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span className="material-symbols-outlined">
            <span className="material-symbols-outlined">contact_support</span>
          </span>
          <span className="mx-1">About Us</span>
        </Link>
        <Link
          className="navitem mx-2"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          to="/"
          onClick={() => localStorage.clear()}
        >
          <span className="material-symbols-outlined">
            <span className="material-symbols-outlined">logout</span>
          </span>
          <span className="mx-1">Logout</span>
        </Link>
      </div>
    </div>
  );
}
