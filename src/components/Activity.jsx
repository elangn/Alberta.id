import React, { useEffect, useState } from "react";
import axios from "axios";

const Activity = () => {
  const [activity, setActivity] = useState([]);
  const baseUrl = "https://travel-journal-api-bootcamp.do.dibimbing.id";

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/activities`, {
        headers: {
          apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
        },
      })
      .then(function (response) {
        // console.log(response);
        setActivity(response.data.data);
      });
  }, []);

  return (
    <div className="activity">
      <div className="container">
        <h2> Trip </h2>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          eveniet, temporibus odit saepe quidem error natus ratione nam vel
          provident autem! Laudantium ut soluta eligendi unde numquam deleniti
          rerum tenetur!
        </p>

        <div className="activity-box">
          <div className="row">
            {activity.map((item, i) => {
              return (
                <div className="col-sm-3 mb-4" key={i}>
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

export default Activity;
