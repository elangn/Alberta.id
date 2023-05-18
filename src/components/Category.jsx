import React, { useEffect, useState } from "react";
import axios from "axios";

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
        setCategory(response.data.data.slice(0, 6));
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

        {/* carousel */}
        <div className="box-category2 mt-4">
          <div
            id="popular-movies"
            className="carousel slide popular-movies"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  {category.map((item, i) => {
                    return (
                      <div key={i} className="col-6 col-md-4 col-lg-2">
                        <img
                          src={item.imageUrl}
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* <div className="carousel-item">
                <div className="row">
                  <div className="col-6 col-md-4 col-lg-2">
                    <img src="img/popular5.jpg" />
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <img src="img/popular6.jpg" />
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <img src="img/popular7.jpg" />
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <img src="img/popular8.jpg" />
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <img src="img/popular9.jpg" />
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <img src="img/popular10.jpg" />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-6 col-md-4 col-lg-2">
                    <img src="img/popular11.jpg" />
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <img src="img/popular12.jpg" />
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <img src="img/popular13.jpg" />
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <img src="img/popular14.jpg" />
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <img src="img/popular15.jpg" />
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <img src="img/popular16.jpg" />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-6 col-md-4 col-lg-2">
                    <img src="img/popular17.jpg" />
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <img src="img/popular18.jpg" />
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <img src="img/popular19.jpg" />
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <img src="img/popular20.jpg" />
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <img src="img/popular21.jpg" />
                  </div>
                  <div className="col-6 col-md-4 col-lg-2">
                    <img src="img/popular22.jpg" />
                  </div>
                </div>
              </div> */}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#popular-movies"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#popular-movies"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
