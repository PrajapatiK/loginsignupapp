import React from "react";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" >
            iDashboard
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {props.loginUser && <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/home">
                  Home
                </Link>
              </li>}
              {props.loginUser && <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>}
            </ul>
            <form className="d-flex">
              {props.loginUser ?<button onClick={props.Logout}>Logout</button>:<Link className="btn btn-primary mx-1" to="/login" role="button">
                Login
              </Link>}
              {!props.loginUser &&<Link className="btn btn-primary mx-1" to="/signup" role="button">
                Signup
              </Link>}
             
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
