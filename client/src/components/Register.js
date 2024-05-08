import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [alert, setAlert] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    if (json.success) {
      navigate("/");
    } else {
      console.log(json);
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
              <span style={{ fontSize: "18px" }}>Register</span> <b style={{color:"#f26ell"}}>JOBIFY</b>
            </h4>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Username"
                className="form-control shadow-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <br />
              <input
                type="email"
                placeholder="Email"
                className="form-control shadow-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <br />
              <input
                type="password"
                placeholder="Password"
                className="form-control shadow-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {alert && (
                <p
                  className="m-1"
                  style={{ textAlign: "center", color: "red" }}
                >
                  {alert}
                </p>
              )}
              <button type="submit" className="btn  my-2 w-100"style={{background:"#f26e11",color:"white"}}>
                Register
              </button>
              <p className="mt-4 text-center">
                Already have an Account?{" "}
                <Link to="/">
                  <b style={{color:"#f26e11"}}>Login</b>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
