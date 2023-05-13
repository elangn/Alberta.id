import React, { useEffect, useState } from "react";
import axios from "axios";

const Carousel = () => {
  const baseUrl = "https://travel-journal-api-bootcamp.do.dibimbing.id";
  const [hero, setHero] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/banner/e30b52ee-5a47-4b9c-beba-46547b63cba9`, {
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
    <div className="carousel">
      <img src={hero.imageUrl} alt="" />
      {/* <p> Alberta.id</p>
      <p> Unforgotable Journey</p> */}
    </div>
  );
};

export default Carousel;
