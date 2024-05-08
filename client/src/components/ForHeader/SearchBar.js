import React from "react";

export default function SearchBar({ handleSearch }) {

  const handleChange = (e) => {
    const { name, value } = e.target;
    handleSearch((prevParams) => ({
      ...prevParams,
      [name]: value,
    }));
  };

  return (
    <div className="mt-5 search-bar">
      <p style={{color:"white"}}>Over 1 million plus job openings</p>
      <h1 className="mb-4" style={{color:"white"}}>Find Your new Job. <span style={{color:"#f26e11",fontWeight:"bold"}}>Build Your Career.</span> </h1>
      <div className="search">
        <form className="row g-3">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
            <input
              type="text"
              className="form-control form-control-lg shadow-none custom-input"
              placeholder="Job Title"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
            <input
              type="text"
              className="form-control form-control-lg shadow-none custom-input"
              placeholder="Location"
              name="location"
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
            <select
              name="type"
              className="form-select form-select-lg shadow-none custom-select"
              onChange={handleChange}
            >
              <option value="">Job Type</option>
              <option value="Internship">Internship</option>
              <option value="Full Time">Full Time</option>
              <option value="Contract">Contract</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
}
