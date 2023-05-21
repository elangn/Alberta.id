import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavbarAdmin = () => {
  const isLogin = JSON.parse(localStorage.getItem("token"));
  const account = JSON.parse(localStorage.getItem("account"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    // window.location.reload();
  };

  return (
    <div className="navbar-admin ">
      <nav className="navbar  navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand mb-4" href="#">
            <span> Sys</span> Admin
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
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <Link to={"/dashboard"}> Dashboard</Link>
              </li>

              <li className="nav-item">
                <Link to={"/banner-admin"}> Banner</Link>
              </li>
              <li className="nav-item ">
                <Link to={"/promo-admin"}> Promo</Link>
              </li>
              <li className="nav-item">
                <Link to={"/category-admin"}> Category</Link>
              </li>
              <li className="nav-item">
                <Link to={"/activity-admin"}> Activity </Link>
              </li>

              <li className="nav-item">
                <Link to={"/all-user-admin"}>All Users</Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={account.profilePictureUrl}
                    alt=""
                    className="me-2 "
                  />
                  {account.name}
                </a>
                <ul className="dropdown-menu">
                  <li className="my-2">
                    <Link to={"/update-profile-admin"} className="aka">
                      {" "}
                      Update Profile
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link to={"/"} className="aka">
                      {" "}
                      Go to User Page
                    </Link>
                  </li>
                  <li className="my-0">
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="my-0">
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
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarAdmin;
