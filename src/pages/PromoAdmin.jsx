import React, { useEffect, useState } from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import axios from "axios";

const PromoAdmin = () => {
  const [promo, setPromo] = useState([]);
  const baseUrl = "https://travel-journal-api-bootcamp.do.dibimbing.id";

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/promos`, {
        headers: {
          apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
        },
      })
      .then(function (response) {
        // console.log(response);
        setPromo(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <>
      <NavbarAdmin />
      <div className="promo-admin p-2">
        <div className="container">
          <h3> Manage Promo</h3>
          <hr />

          <div className="promo-admin-box mt-4 pt-4">
            <div className="row">
              {promo.map((item, i) => {
                return (
                  <div className="col-sm-4" key={i}>
                    <div className="card mb-4">
                      <img
                        src={item.imageUrl}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p>{item.id}</p>

                        <a href="#" className="btn btn-primary btn-sm me-3">
                          Update
                        </a>

                        <a href="#" className="btn btn-danger btn-sm">
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromoAdmin;
