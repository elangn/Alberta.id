import React, { useEffect, useState } from "react";
import axios from "axios";

const Carousel = () => {
  const baseUrl = "https://travel-journal-api-bootcamp.do.dibimbing.id";
  const [hero, setHero] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/banner/cd23cb58-9258-4297-bc5d-fc82b78afbdf`, {
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
    </div>
  );
};

export default Carousel;
