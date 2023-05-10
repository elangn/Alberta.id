import React from "react";
import { Link } from "react-router-dom";

const NavbarAdmin = () => {
  const isLogin = JSON.parse(localStorage.getItem("token"));
  const account = JSON.parse(localStorage.getItem("account"));

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
              <li className="nav-item ">
                <Link> Promo</Link>
              </li>
              <li className="nav-item">
                <Link> Activity </Link>
              </li>
              <li className="nav-item">
                <Link to={"/user-admin"}>User</Link>
              </li>

              <li className="nav-item">
                <Link> Banner</Link>
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
                    className="me-2"
                  />
                  {account.name}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
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
