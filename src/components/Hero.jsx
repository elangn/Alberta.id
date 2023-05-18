import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Hero = () => {
  const baseUrl = "https://travel-journal-api-bootcamp.do.dibimbing.id";
  const [hero, setHero] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/banner/04c2064a-56ec-4543-8eac-7e0fe4e345a4`, {
        headers: {
          apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
        },
      })
      .then(function (response) {
        // console.log(response.data.data);
        setHero(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

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
