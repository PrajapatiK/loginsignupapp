import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams, useNavigate } from "react-router-dom";

import EditUserComponent from '../components/EditUser'
import { validate } from "../lib/common";

toast.configure();

const EditUser = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  let users = JSON.parse(localStorage.getItem("userInfo"));
  var userIndex = users.findIndex((user) => user.email === id);
  const initialValue = {
    username: "",
    email: "",
    password: "",
    cpassword: "",
    role: "user",
  };
  const [formValues, setFormValues] = useState(users[userIndex]);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = validate(formValues)
    if (Object.keys(errors).length === 0) {
      users.splice(userIndex, 1, formValues);
      localStorage.setItem("userInfo", JSON.stringify(users));
      navigate(-1);
      toast.success("Infomation successfully updated");
    }
    else {
      setFormErrors(errors)
      toast.error("Something went wrong");
    }
  };

  return (
    <EditUserComponent
      handleSubmit={handleSubmit}
      formValues={formValues}
      handleChange={handleChange}
      formErrors={formErrors} />
  );
};

export default EditUser;
