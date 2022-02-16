import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomeComponent from '../components/Home'
toast.configure();

const Home = () => {
  let userInfo = [];
  userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let loginDetail = JSON.parse(localStorage.getItem("loggedinrole"));
  userInfo = userInfo.filter((user) => user.role !== "admin");

  const removeUser = (email) => {
    let users = userInfo.filter((user) => user.email !== email);
    localStorage.setItem("userInfo", JSON.stringify(users));
    toast.success("List item Removed successfully!", { autoClose: 3000 });
  };

  return (
   <HomeComponent loginDetail={loginDetail} userInfo={userInfo} removeUser={removeUser} />
  );
};

export default Home;
