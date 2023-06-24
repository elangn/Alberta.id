import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DetailPromoPage = () => {
  const { promoId } = useParams();
  const [promo, setPromo] = useState({});

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/v1/promo/${promoId}`, {
        headers: {
          apiKey: import.meta.env.VITE_API_KEY,
        },
      })
      .then(function (response) {
        setPromo(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />

      <div className="detailpromo mt-5">
        <div className="container">
          <h4>Promo Detail</h4>
          <p className="py-0 text-secondary">
            Get discount price with promo code
          </p>

          <div className="detailpromo-box mt-4">
            <div className="card ">
              <img src={promo.imageUrl} alt="" />
            </div>

            <div className=" mt-5">
              <h5 className="fw-bold border-bottom border-1 border-dark pb-2">
                {promo.title}
              </h5>

              <div className="row">
                <div className="col-sm-9">
                  {" "}
                  <div className="kiri ">
                    <p> {promo.description}</p>

                    <p>Term and condition : {promo.terms_condition}</p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="kanan">
                    <div className="atas">
                      {" "}
                      <p className="fw-bold my-0">Promo code :</p>
                      <p className="text-danger my-0 fw-bold">
                        {" "}
                        {promo.promo_code}
                      </p>
                    </div>

                    <div className="bawah">
                      <p className="my-0 "> Discount price :</p>
                      <p className="harga fw-bold my-0">
                        {" "}
                        IDR {promo.promo_discount_price}
                      </p>

                      <p className="my-0 "> Minimum claim price :</p>
                      <p className="harga fw-bold my-0">
                        IDR {promo.minimum_claim_price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DetailPromoPage;
