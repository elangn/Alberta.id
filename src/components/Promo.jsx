import React, { useEffect, useState } from "react";
import axios from "axios";

const Promo = () => {
  const baseUrl = "https://travel-journal-api-bootcamp.do.dibimbing.id";
  const [promo, setPromo] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/promos`, {
        headers: {
          apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
        },
      })
      .then(function (response) {
        // console.log(response.data.data);
        setPromo(response.data.data.slice(0, 4));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div className="promo">
      <div className="container">
        <h2>Promo Trips</h2>
        <p className="py-0 text-secondary">
          Get discount price with promo code
        </p>

        <div className="promo-box">
          <div className="row">
            {promo.map((item, i) => {
              return (
                <div className="col-sm-3 " key={i}>
                  <div className="card">
                    <img
                      src={item.imageUrl}
                      className="card-img-top"
                      alt="..."
                    />
                    <p className="diskon bg-warning  ">{item.promo_code}</p>
                    <div className="card-body">
                      <p className="card-text">{item.title}</p>
                      <p className="my-0">
                        {" "}
                        <img
                          src="img/discount.png"
                          alt=""
                          className="logodisc"
                        />{" "}
                        discount up to
                      </p>
                      <p className="mb-0">
                        {" "}
                        Rp. {item.promo_discount_price} ,-
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

export default Promo;
