import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Root from "./components/Root";

function App() {
  const [error, setError] = useState("");
  const [loginUser, IsloginUser] = useState(
    JSON.parse(localStorage.getItem("loginUser"))
  );
  let navigate = useNavigate();
  const Login = (details) => {
    let userIndex;
    let storageInfo = JSON.parse(localStorage.getItem("userInfo"));
    console.log("storageInfo", storageInfo);
    if (storageInfo.length > 0) {
      userIndex = storageInfo.findIndex((user) => user.email === details.email);
      console.log(userIndex);
      if (userIndex !== -1 && storageInfo[userIndex].email === details.email) {
        IsloginUser(true);
        localStorage.setItem("loginUser", "true");
        localStorage.setItem("loggedinrole", storageInfo[userIndex].role);
        //for redirect
        navigate("home");
      }
    } else {
      console.log("not matched");
      alert("Unauthrized user Plz signup first.");
    }
  };

  const Logout = (e) => {
    console.log(e);
    e.preventDefault();
    localStorage.setItem("loginUser", "false");
    IsloginUser(false);
    console.log("logout");
  };

  return (
    <div>
      <Navbar loginUser={loginUser} Logout={Logout} />
      <Routes>
        <Route exact path="/" element={<Root />} />
        {loginUser && <Route exact path="dashboard" element={<Dashboard />} />}
        {loginUser && <Route exact path="home" element={<Home />} />}
        {loginUser && <Route exact path="about" element={<About />} />}
        <Route
          exact
          path="login"
          element={<LoginForm Login={Login} error={error} />}
        />
        <Route exact path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
