import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <h2>
        {" "}
        Alberta.<span>id</span>
      </h2>
      <p> Unforgettable Journey. Explore with us and book it out of here </p>
      <div className="hero-box">
        <Link to={"/explore"} className="btn btn-outline-light me-3">
          Discover More
        </Link>
        <Link to={"/register2"} className="btn btn-success">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Hero;
