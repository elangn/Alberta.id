import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="upper pt-0 mt-0 ">
        <div className="container">
          <div className="upper-box ">
            <div className="upper-box1">
              <i className="fa-solid fa-phone text-light me-1"> </i>
              <span className=" me-4">+62 811-1122</span>
            </div>
            <div className="upper-box2">
              <i className="fa-brands fa-twitter text-light me-3 "></i>
              <i className="fa-brands fa-facebook text-light me-3"></i>
              <i className="fa-brands fa-youtube text-light me-3"></i>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-light ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="img/airplane2.png" alt="" className="me-2" />
            <span>
              Alberta <span className="nav-brand1"> .id</span>
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-2">
                <Link to={`/`} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item  me-2">
                <Link to={`/explore`} className="nav-link">
                  Explore
                </Link>
              </li>
              <li className="nav-item  me-2">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <button className="btn btn-sm btn-outline-primary">
                {" "}
                Login{" "}
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
