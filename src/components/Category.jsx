import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

const Category = () => {
  const [category, setCategory] = useState([]);
  const baseUrl = "https://travel-journal-api-bootcamp.do.dibimbing.id";

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/categories`, {
        headers: {
          apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
        },
      })
      .then(function (response) {
        // console.log(response.data.data);
        setCategory(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <div className="category ">
      <div className="container">
        <div className="box-category">
          <p className="my-1">
            {" "}
            ---------
            <img src="img/passport.png" alt="" className="mx-2" />
            ---------
          </p>
          <p className="my-0"> Look Popular destination category</p>
          <p> CHOOSE CATEGORY</p>
        </div>

        <Swiper
          breakpoints={{
            480: {
              slidesPerView: 2,
              // spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              // spaceBetween: 10,
            },
            968: {
              slidesPerView: 4,
              // spaceBetween: 10,
            },
          }}
          className="slider"
        >
          <SliderButtons />
          {category.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="c-wrapper">
                  <img src={item.imageUrl} alt="" />
                  <p>{item.name}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Category;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="r-button">
      <button
        onClick={() => swiper.slidePrev()}
        className="btn btn-primary me-2 btn-sm"
      >
        {" "}
        &lt;
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="btn btn-primary btn-sm"
      >
        &gt;
      </button>
    </div>
  );
};
