import { regex } from "./constant";

export const validate = (values) => {
  const errors = {}
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

export const getItem = (userInfo) => {
  return JSON.parse(localStorage.getItem(userInfo));
}

export const setItem = (signupData) => {
  return localStorage.setItem("userInfo", JSON.stringify(signupData));
}