import React, { useEffect, useState } from "react";
import axios from "axios";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  const baseUrl = "https://travel-journal-api-bootcamp.do.dibimbing.id";

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/activities`, {
        headers: {
          apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
        },
      })
      .then(function (response) {
        // console.log(response.data.data);
        setPopular(response.data.data.slice(0, 2));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="popular">
      <div className="container">
        <h2>Popular Destination</h2>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe
          dolorum omnis similique fuga, quod, reiciendis temporibus quae
          quisquam in at, illo ex animi obcaecati? Et excepturi reprehenderit
          molestiae aspernatur.
        </p>

        <div className="popular-box">
          <div className="row">
            {popular.map((item, i) => {
              return (
                <div className="col-sm-3" key={i}>
                  <div className="card">
                    <img
                      src={item.category.imageUrl}
                      className="card-img-top"
                      alt="..."
                    />
                    <div
                      className="card-box d-flex px-2 mt-2 justify-content-between
                    "
                    >
                      <p> {item.title} </p>
                      <p>
                        <i className="fa-solid fa-star text-warning pe-1"></i>
                        {item.rating} <span className="text-secondary">/5</span>{" "}
                        . {item.total_reviews}
                      </p>
                    </div>

                    <div className="card-body py-0">
                      <p className="card-text mb-1">
                        <img src="img/pin.png" alt="" />
                        {item.city}, {item.province}
                      </p>
                      {/* <p className="card-text mt-1 mb-3 ">Rp. {item.price}</p> */}

                      <p className="text-secondary">
                        More <i className="fa-solid fa-circle-arrow-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
