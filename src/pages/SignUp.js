import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getItem, validate } from "../lib/common";
import { signup } from "../services/api";
import SignupComponent from '../components/Signup'

toast.configure();


//New user signup form
const SignUp = () => {
  const initialValue = {
    username: "",
    email: "",
    password: "",
    cpassword: "",
    role: "user",
  };
  const [state, setState] = useState({});
  const [formValues, setFormValues] = useState(initialValue);
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const errors = {};

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
      let dataDummyItems = getItem("userInfo");
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
      signup(userInfo)
      toast.success("Infomation successfully entered");
      setIsSubmit(true);
      setFormValues(initialValue);
    } else {
      toast.error("Empty entry not allowed");
    }
  };

  return (
    <SignupComponent handleSubmit={handleSubmit} formValues={formValues} handleChange={handleChange} formErrors={formErrors} />
  );
};

export default SignUp;
