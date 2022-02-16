import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const AddUser = () => {
  const initialValue = {
    username: "",
    email: "",
    password: "",
    cpassword: "",
    role: "user",
  };
  const [formValues, setFormValues] = useState(initialValue);
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const errors = {};
  let navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    if (
      (formValues.username ||
        formValues.email ||
        formValues.password ||
        formValues.cpassword) !== (null || undefined || "")
    ) {
      if (formValues.password !== formValues.cpassword) {
        errors.password = "password not matches";
        return;
      }

      let dataItems = [];
      let dataDummyItems = JSON.parse(localStorage.getItem("userInfo"));
      let userIndex = (dataDummyItems || []).findIndex(
        (user) => user.email === formValues.email
      );
      if (userIndex >= 0) {
        alert("Email already registered Plz signup with new one");
        return;
      }
      dataDummyItems
        ? dataDummyItems.push(formValues)
        : dataItems.push(formValues);
      //for the very first entry
      let userInfo = dataItems.length > 0 ? dataItems : dataDummyItems;
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      toast.success("Infomation successfully entered");
      setIsSubmit(true);
      setFormValues(initialValue);
      navigate("");
    } else {
      toast.error("Empty entry not allowed");
    }
  };
  //validation/regex for the user fields
  const validate = (values) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };
  return (
    <div className="container">
      <h3 className="my-3">welcome to add users</h3>
      <form onSubmit={handleSubmit} autocomplete="off">
        <div className="mb-3 ">
          <label htmlFor="name" className="form-label" required>
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={formValues.username}
            onChange={handleChange}
            aria-describedby="emailHelp"
          />
        </div>
        <p style={{ color: "red", marginTop: "-16px" }}>
          {formErrors.username}
        </p>
        <div className="mb-3 ">
          <label htmlFor="email" className="form-label" required>
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            aria-describedby="emailHelp"
          />
        </div>
        <p style={{ color: "red", marginTop: "-16px" }}>{formErrors.email}</p>
        <div className="mb-3">
          <label htmlFor="password" className="form-label" required>
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <p style={{ color: "red", marginTop: "-16px" }}>
          {formErrors.password}
        </p>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label" required>
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            value={formValues.cpassword}
            onChange={handleChange}
          />
        </div>
        <p style={{ color: "red", marginTop: "-16px" }}>
          {formErrors.password}
        </p>
        <div className="mb-3">
          <label htmlFor="role" className="form-label" required>
            Role
            <select name="role" value={formValues.role} onChange={handleChange}>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </label>
        </div>
        <div className="custom-file">
          <input type="file" className="custom-file-input" id="customFile" />
          <label className="custom-file-label">{/* Choose file */}</label>
        </div>
        <button type="submit" className="btn btn-primary my-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUser;
