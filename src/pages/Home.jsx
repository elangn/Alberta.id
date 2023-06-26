import React from "react";
import Navbar from "../components/Navbar";
import Promo from "../components/Promo";
import Popular from "../components/Popular";
import Footer from "../components/Footer";
import Category from "../components/Category";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <Promo />

      <div className="benefit">
        <div className="container">
          <h2 className="text-center">Why you should choose us</h2>
          <p className="text-center">
            You should choose us because we provide the best accomodation and we
            have sorted all the hotels here based on their quality
          </p>

          <div className="benefit-box mt-4 ">
            <div className="row">
              <div className="col-md-6 kiri ">
                <div className="box-nomer">
                  <p className="nomer me-2  my-1">1 </p>
                  <p className="fw-bold text-dark my-0 sub-judul">
                    We provide the best choice for you
                  </p>
                </div>

                <p className=" my-0">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit, sunt dolores perferendis fugit ut corporis.
                </p>

                <br />
                <div className="box-nomer ">
                  <p className="nomer me-2 my-1">2</p>
                  <p className="fw-bold text-dark my-0 sub-judul">
                    Low Price with best Quality
                  </p>
                </div>
                <p className=" my-0">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Cupiditate totam nihil doloribus mollitia libero unde!
                </p>

                <br />
                <div className="box-nomer">
                  <p className="nomer me-2 my-1">3</p>
                  <p className="fw-bold text-dark my-0 sub-judul">
                    Can refund up to 100%
                  </p>
                </div>
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsa, itaque excepturi vel ratione possimus deleniti!
                </p>
              </div>
              <div className="col-md-6 kanan">
                <div className="box-gambar">
                  <img src="img/annie.jpg" className="w-75 border " alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Popular />
      <Footer />
    </>
  );
};

export default Home;
