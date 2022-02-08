import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Root from "./components/Root";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageNotFound from "./components/PageNotFound";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

toast.configure();
function App() {
  const [error, setError] = useState("");
  const [loginUser, IsloginUser] = useState(
    JSON.parse(localStorage.getItem("loginUser"))
  );
  let navigate = useNavigate();
  const Login = async (details) => {
    let userIndex;
    let storageInfo = JSON.parse(localStorage.getItem("userInfo"));
    // storageInfo.map((item) => {
    //   if (item.email === details.email) {
    if (storageInfo && storageInfo.length > 0) {
      userIndex = storageInfo.findIndex((user) => user.email === details.email);
      let isCompare = false;
      isCompare = details.password === storageInfo[userIndex].password;
      if (
        (userIndex !== -1 &&
          storageInfo[userIndex].email === details.email &&
          isCompare) ||
        details.email !== undefined ||
        details.password !== undefined
      ) {
        IsloginUser(true);
        localStorage.setItem("loginUser", "true");
        localStorage.setItem(
          "loggedinrole",
          JSON.stringify(storageInfo[userIndex])
        );
        //console.log("yha kse///");
        toast.success("login successfully!!!");
        navigate("home");
      } else {
        toast.error("Email or password is incorrect!");
      }
    } else {
      toast.error("Unauthorized user not allowed!");
    }
    //   } else {
    //     toast.error("Details not available at storage");
    //   }
    // });
  };

  const Logout = (e) => {
    e.preventDefault();
    localStorage.setItem("loginUser", "false");
    IsloginUser(false);
    navigate("");
    toast.success("logout successfully!!!");
  };
  return (
    <div>
      <Navbar loginUser={loginUser} Logout={Logout} />
      <Routes>
        <Route path="*" exact={true} element={<PageNotFound />} />
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
        <Route exact path="users/add" element={<AddUser />} />
        <Route exact path="users/edit" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
