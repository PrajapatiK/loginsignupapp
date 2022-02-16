import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validate } from "../lib/common";

toast.configure();

const LoginForm = ({ Login, error }) => {
  const [details, setDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});

  let navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(details));
    (details.email || details.password) === "" ? navigate("") : Login(details);
  };

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <br />
      <h3>welcome to LoginForm page</h3>

      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="mb-3 ">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={details.email}
            onChange={handleChange}
            aria-describedby="emailHelp"
          />
        </div>
        <p style={{ color: "red", marginTop: "-16px" }}>{formErrors.email}</p>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={details.password}
            onChange={handleChange}
          />
        </div>
        <p style={{ color: "red", marginTop: "-16px" }}>
          {formErrors.password}
        </p>
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
