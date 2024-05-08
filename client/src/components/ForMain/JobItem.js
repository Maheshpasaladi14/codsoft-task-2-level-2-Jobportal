import React from "react";
import { Link } from "react-router-dom";

export default function JobItem(props) {
  return (
    <div className="job-item">
      <div className="title-apply">
        <div className="title-type">
          <h4 className="my-0">
            <Link to={`/job-details/${props.jobId}`} className="job-link">
              {props.title}
            </Link>
          </h4>
          <p className="my-0 job-type">{props.type}</p>
        </div>
        <div className="company">
          <p className="company-name">
            <span className="material-symbols-outlined mx-2">apartment</span>
            {props.company}
          </p>
        </div>
        <div className="location">
          <p className="location-text">
            <span className="material-symbols-outlined mx-2">location_on</span>
            {props.location}
          </p>
        </div>
      </div>
    </div>
  );
}
