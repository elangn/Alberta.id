import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <h2> Alberta.id</h2>
      <h4> Unforgettable Journey. Explore with us and book it out of here </h4>
      <Link to={"/explore"} className="btn btn-outline-light ">
        Discover More
      </Link>
    </div>
  );
};

export default Hero;
