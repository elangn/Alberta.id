import React from "react";
import { Link, useNavigate } from "react-router-dom";
import danaLogo from "../assets/img/dana.png";
import ovoLogo from "../assets/img/ovo.png";
import visaLogo from "../assets/img/visa.png";
import gopayLogo from "../assets/img/gopay.jpg";
import bniLogo from "../assets/img/bni.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-atas mb-4">
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="atas-1 mb-3">
                <h5 className="fw-bold"> Contact us </h5>
                <p className="my-0 py-0">
                  <i className="fa-solid fa-phone text-dark me-1 "> </i>
                  <span className=" me-4">+62 811-1122</span>
                </p>

                <p className="my-0 py-0">
                  <i className="fa-solid fa-envelope text-dark me-1"> </i>
                  <span className=" me-4">alberta@business.com</span>
                </p>

                <div className="icon">
                  <i className="fa-brands fa-twitter text-info icon-footer me-3 "></i>
                  <i className="fa-brands fa-facebook text-primary icon-footer me-3"></i>
                  <i className="fa-brands fa-youtube text-danger ix me-3"></i>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="atas-2 mb-3">
                <h5 className="fw-bold"> Menu </h5>

                <Link to={`/`} className="nav-link">
                  Home
                </Link>

                <Link to={`/promo`} className="nav-link">
                  Promo
                </Link>

                <Link to={`/destinations`} className="nav-link">
                  Destinations
                </Link>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="atas-3 mb-3">
                <h5 className="fw-bold mb-3"> Payment Method</h5>
                <div className="payment d-flex gap-4">
                  <div className="card">
                    <img src={danaLogo} className="card-img-top" alt="..." />
                  </div>
                  <div className="card">
                    <img src={visaLogo} className="card-img-top" alt="..." />
                  </div>
                  <div className="card">
                    <img src={bniLogo} className="card-img-top" alt="..." />
                  </div>
                  <div className="card">
                    <img src={ovoLogo} className="card-img-top" alt="..." />
                  </div>
                  <div className="card">
                    <img src={gopayLogo} className="card-img-top" alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bawah">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="box d-flex justify-content-center">
                <p className="mx-3">Privacy Policy</p>
              </div>
            </div>
            <div className="col-sm-6 text-start">
              <p>Copyright &#169; 2023 "Alberta.id" . All rights reserved </p>
            </div>
            <div className="col-sm-3">
              <div className="box-3">
                <p> Term of use </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
