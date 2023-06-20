import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="hero">
          <h2>
            {" "}
            Explore new places , Enjoy every <span>GOOD MOMENT </span>{" "}
          </h2>

          <p> Guides for your next vacation </p>
          <div className="hero-box">
            <Link
              to={"/destinations"}
              className="btn btn-outline-dark  me-1 me-lg-2 button-93"
            >
              Destination
            </Link>

            <Link to={"/register2"} className=" btn btn-light button-92">
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
