import React from "react";
import Navbar from "../components/Navbar";
import Categoty from "../components/Categoty";
import Carousel from "../components/Carousel";
import Promo from "../components/Promo";

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Categoty />
      <Promo />

      <div className="benefit">
        <div className="container">
          <h2>Why you should choose us</h2>
          <p>
            You should choose us because we provide the best accomodation and we
            have sorted all the hotels here based on their quality
          </p>

          <div className="row">
            <div className="benefit-box mt-4">
              <div className="col-sm-5">
                <div className="box-nomer d-flex">
                  <p className="nomer me-2">1</p>
                  <p className="fw-bold text-dark">
                    We provide the best choice for you
                  </p>
                </div>
                <p className="ms-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit, sunt dolores perferendis fugit ut corporis.
                </p>

                <br />
                <div className="box-nomer d-flex">
                  <p className="nomer me-2">2</p>
                  <p className="fw-bold text-dark">
                    Low Price with best Quality
                  </p>
                </div>
                <p className="ms-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Cupiditate totam nihil doloribus mollitia libero unde!
                </p>

                <br />
                <div className="box-nomer d-flex">
                  <p className="nomer me-2">3</p>
                  <p className="fw-bold text-dark">Can refund up to 100%</p>
                </div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsa, itaque excepturi vel ratione possimus deleniti!
                </p>
              </div>
              <div className="col-sm-5">
                <img src="img/gambar2.jpg" className="w-75 border " alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
