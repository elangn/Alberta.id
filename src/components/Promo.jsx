import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
                <div className="col-sm-6 col-md-3" key={i}>
                  <div
                    className="card my-2"
                    data-bs-toggle="modal"
                    data-bs-target={`#promo${item.id}`}
                  >
                    <img
                      src={item.imageUrl}
                      className="card-img-top"
                      alt="..."
                    />
                    <p className="diskon bg-warning  ">{item.promo_code}</p>
                    <div className="card-body">
                      <p className="card-text fw-bold mb-1">{item.title}</p>
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
                        IDR {item.promo_discount_price} ,-
                      </p>
                    </div>
                  </div>

                  <div>
                    {/* Modal */}
                    <div
                      className="modal fade"
                      id={`promo${item.id}`}
                      tabIndex={-1}
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h3
                              className="modal-title fs-5"
                              id="exampleModalLabel"
                            >
                              {item.title}
                            </h3>
                          </div>
                          <div className="modal-body cek">
                            <img src={item.imageUrl} alt="" />
                            <hr />
                            <p className="my-0">
                              {" "}
                              Description : {item.description}
                            </p>
                            <p className="my-0">
                              {" "}
                              Promo code : {item.promo_code}
                            </p>
                            <p className="my-0">
                              {" "}
                              Promo discount price : {
                                item.promo_discount_price
                              }{" "}
                            </p>
                            <p className="my-0">
                              {" "}
                              Minimun discount price :{" "}
                              {item.minimum_claim_price}
                            </p>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
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
