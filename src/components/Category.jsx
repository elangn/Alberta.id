import React, { useEffect, useState } from "react";
import axios from "axios";
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
      <div className="container ">
        <div className="box-category ">
          <p className="my-1">
            {" "}
            ---------
            <img src="img/passport.png" alt="" className="mx-2" />
            ---------
          </p>
          <p className="my-0"> Look Popular destination category</p>
          <p> CHOOSE CATEGORY</p>
        </div>

        <div className="box-category2 ">
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              468: {
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
            className="slider "
          >
            {category.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="card c-wrapper">
                    <img
                      src={item.imageUrl}
                      className="card-img-top"
                      alt="..."
                    />

                    <p className="card-text"> {item.name} </p>
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

export default Category;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="category-button">
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
