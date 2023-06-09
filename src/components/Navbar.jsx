import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const isLogin = JSON.parse(localStorage.getItem("token"));
  const account = JSON.parse(localStorage.getItem("account"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login2");
    window.location.reload();
  };

  return (
    <>
      <div className="upper pt-0 mt-0 ">
        <div className="container">
          <div className="upper-box ">
            <div className="upper-box1">
              <i className="fa-solid fa-phone text-light me-1"> </i>
              <span className=" me-4">+62 811-1122</span>
              <i className="fa-solid fa-envelope text-light me-1"></i>
              <span className=" me-4">alberta@business.com</span>
            </div>

            <div className="upper-box2">
              <i className="fa-brands fa-twitter text-light me-3 "></i>
              <i className="fa-brands fa-facebook text-light me-3"></i>
              <i className="fa-brands fa-youtube text-light me-3"></i>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg  bg-transparent">
        <div className="container">
          <Link to={"/"} className="nav-brand0">
            Alberta
            <span className="nav-brand1">.id</span>
          </Link>

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
                <Link to={`/promo`} className="nav-link">
                  Promo
                </Link>
              </li>
              <li className="nav-item  me-2">
                <Link to={`/destinations`} className="nav-link">
                  Destination
                </Link>
              </li>

              {/* tes */}

              {account && account.role == "admin" ? (
                <li className="nav-item  me-2">
                  <Link to={`/dashboard`} className="nav-link">
                    Admin Page
                  </Link>
                </li>
              ) : (
                <></>
              )}

              {isLogin ? (
                <>
                  <div className="dropdown">
                    <button
                      className="btn  dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={account.profilePictureUrl}
                        alt=""
                        className=" avatar me-2"
                      />
                      {account.name}
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to={"/update-profile"} className="dropdown-item">
                          <i className="fa-solid fa-user me-1"> </i> Update
                          Profile
                        </Link>
                      </li>

                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={handleLogout}
                        >
                          <i className="fa-solid fa-right-from-bracket me-1"></i>
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <li className="nav-item  me-2">
                    <Link
                      to={`/login2`}
                      className="nav-link btn btn-sm btn-success text-white "
                    >
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
