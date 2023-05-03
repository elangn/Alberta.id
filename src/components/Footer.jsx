import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-box d-flex justify-content-between">
          <p>Copyright &#169; 2023 "Alberta.id" . All rights reserved </p>

          <div className="footer-box2 d-flex">
            <p className="me-4">Privacy Policy</p>
            <p> Term of use </p>
          </div>

          <div className="footer-box3 d-flex">
            <i className="fa-brands fa-twitter text-light me-3 "></i>
            <i className="fa-brands fa-facebook text-light me-3"></i>
            <i className="fa-brands fa-youtube text-light me-3"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
