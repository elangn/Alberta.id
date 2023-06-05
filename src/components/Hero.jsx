import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="hero">
          <h2>
            {" "}
            Explore New Places , <span>Enjoy every good moment </span>{" "}
          </h2>

          <p> Guides for your next vacation </p>
          <div className="hero-box">
            <Link to={"/explore"} className="btn btn-outline-light me-3">
              Discover More
            </Link>
            <Link to={"/register2"} className="btn btn-success">
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
