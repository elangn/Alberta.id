import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="upper pt-0 mt-0">
        <div className="container">
          <div className="upper-box ">
            <div className="upper-box1">
              <i className="fa-solid fa-phone text-light "> +62 811-1122</i>
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
            <img src="img/sunrise.png" alt="" className="me-2" />
            Cozy Tour
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item  me-2">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item  me-2">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              {/* <li className="nav-item ">
                <a className="nav-link" href="#">
                  Login
                </a>
              </li> */}
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
