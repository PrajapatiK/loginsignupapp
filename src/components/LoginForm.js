import React, { useState } from "react";

const LoginForm = ({ Login, error }) => {
  const [details, setDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Login(details);
  };
  
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <br />
      <h3>welcome to LoginForm page</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3 ">
          <label htmlFor="name" className="form-label" required>
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={details.username}
            onChange={handleChange}
            aria-describedby="emailHelp"
          />
        </div>
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

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
