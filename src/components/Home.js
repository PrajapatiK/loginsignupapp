import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Home = () => {
  let userInfo = [];
  userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let loginDetail = JSON.parse(localStorage.getItem("loggedinrole"));
  //console.log(loginDetail);
  userInfo = userInfo.filter((user) => user.role !== "admin");
  const removeUser = (email) => {
    let users = userInfo.filter((user) => user.email !== email);
    localStorage.setItem("userInfo", JSON.stringify(users));
    toast.success("List item Removed successfully!", { autoClose: 3000 });
  };
  return (
    <div>
      <br />
      <br />
      <h3>{loginDetail.username},welcome to home page</h3>
      <p
        style={{
          color: "green",
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        Name: {loginDetail.username}
        <br />
        Email:{loginDetail.email}
        <br />
        Role:{loginDetail.role}
      </p>
      <div>
        {loginDetail.role === "admin"}
        {
          <Link className="btn btn-outline-primary" to="/users/add">
            Add user
          </Link>
        }
      </div>
      {/* //else{} */}
      {userInfo.length === 0
        ? "No Entry for display"
        : loginDetail.role === "admin" && (
            <>
              <div
                className="d-flex bd-highlight justify-content-start"
                style={{ color: "black" }}
              >
                <div className="p-2 flex-fill bd-highlight">
                  <h6>userName</h6>
                </div>
                <div className="p-2 flex-fill bd-highlight">
                  <h6>userEmail</h6>
                </div>
                <div className="p-2 flex-fill bd-highlight">
                  <h6>userPwd</h6>
                </div>
                <div className="p-2 flex-fill bd-highlight">
                  <h6>userId</h6>
                </div>
                <div className="p-2 flex-fill bd-highlight">
                  <h6>Action Button</h6>
                </div>
              </div>

              {userInfo.reverse().map((item, index) => (
                <div
                  className="d-flex bd-highlight justify-content-start"
                  key={index}
                  style={{ color: "#DEA79B" }}
                >
                  <div className="p-2 flex-fill bd-highlight">
                    {item.username}
                  </div>
                  <div className="p-2 flex-fill bd-highlight">{item.email}</div>
                  <div className="p-2 flex-fill bd-highlight">
                    {item.password}
                  </div>
                  <div className="p-2 flex-fill bd-highlight">{index + 1}</div>
                  <div className="p-2 flex-fill bd-highlight">
                    <Link
                      className="btn btn-danger"
                      to="# "
                      style={{ textDecoration: "none" }}
                      onClick={() => removeUser(item.email)}
                    >
                      Remove
                    </Link>
                    <Link className="btn btn-primary mx-1" to="/users/edit">
                      Edit
                    </Link>
                  </div>
                </div>
              ))}
            </>
          )}
    </div>
  );
};

export default Home;
