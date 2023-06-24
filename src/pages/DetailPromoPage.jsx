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
            <div
              className="card text-center mx-auto"
              style={{ width: "500px" }}
            >
              <img src={promo.imageUrl} alt="" />
            </div>

            <div className="row mt-5">
              <div className="col">
                <h3 className="fw-bold"> {promo.title}</h3>

                <p> {promo.description}</p>

                <p>Term and condition : {promo.terms_condition} </p>
                <p>
                  {" "}
                  Promo code : {promo.promo_code}
                  <p> Discrount price : {promo.promo_discount_price}</p>
                  <p> Minimum claim price : {promo.minimum_claim_price} </p>
                </p>
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
