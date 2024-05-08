import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("auth-token", json.token);
      localStorage.setItem("user_id", json.user_id);
      navigate("/home");
    } else {
      setAlert(json.message);
    }
  };
  return (
    <div className="container bg-white" style={{ marginTop: "90px" }}>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://img.freepik.com/free-vector/programmer-working-web-development-code-engineer-programming-python-php-java-script-computer_90220-251.jpg?w=900&t=st=1694778519~exp=1694779119~hmac=79c4d9380b7b5d042f24c8f1d7a647d60b60c5dfeb06009150e2c2dc9e2ccb27"
            alt="Programmer"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="login-form" style={{ width: "250px" }}>
            <h4 className="text-center my-3">
              <span style={{ fontSize: "18px" }}>Login To</span> <b style={{color:"#f26e11",fontWeight:"bold"}}>JOBIFY</b>
            </h4>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                className="form-control shadow-none"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <input
                type="password"
                placeholder="Password"
                className="form-control shadow-none"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {alert && (
                <p
                  className="m-1"
                  style={{ textAlign: "center", color: "red" }}
                >
                  {alert}
                </p>
              )}
              <button className="btn w-100 my-2" style={{color:"white",background:"#f26e11"}}>Login</button>
              <p className="mt-4 text-center">
                Don't have an Account?
                <Link to="/register">
                  <b style={{color:"#f26ell"}}>Register</b>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
