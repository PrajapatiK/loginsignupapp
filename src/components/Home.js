import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
const {loginDetail, userInfo, removeUser} = props

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
    {loginDetail.role === "admin" && (
      <div>
        <Link className="btn btn-outline-primary" to="/users/add">
          Add user
        </Link>
      </div>
    )}
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
                  <Link className="btn btn-primary mx-1" to={`/users/edit/${item.email}`}>
                    Edit
                  </Link>
                </div>
              </div>
            ))}
          </>
        )}
  </div>
  )
}

export default Home