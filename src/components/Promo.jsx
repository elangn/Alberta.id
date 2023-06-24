import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
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
        setPromo(response.data.data);
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
          <Swiper
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 2,
                // spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                // spaceBetween: 20,
              },
              968: {
                slidesPerView: 4,
                // spaceBetween: 20,
              },
            }}
            className="swiper-promo"
          >
            {promo.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="card">
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
                </SwiperSlide>
              );
            })}

            <SliderButtons />
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Promo;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="promo-button ">
      <button
        onClick={() => swiper.slidePrev()}
        className="btn  border border-1  me-2 btn-sm"
      >
        <i className="fa-solid fa-arrow-left  "></i>
      </button>

      <button
        onClick={() => swiper.slideNext()}
        className="btn  btn-sm border border-1"
      >
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};
