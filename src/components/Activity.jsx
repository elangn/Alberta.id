import React, { useEffect, useState } from "react";
import axios from "axios";

const Activity = () => {
  const [activity, setActivity] = useState([]);
  const baseUrl = "https://travel-journal-api-bootcamp.do.dibimbing.id";

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/activities`, {
        headers: {
          apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
        },
      })
      .then(function (response) {
        // console.log(response);
        setActivity(response.data.data);
      });
  }, []);

  return (
    <div className="activity mb-5">
      <div className="container">
        <h2> Destinations </h2>
        <p className="text-secondary">Explore all destinations</p>

        <div className="activity-box">
          <div className="row">
            {activity.map((item, i) => {
              return (
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={i}>
                  <div
                    className="card"
                    data-bs-toggle="modal"
                    data-bs-target={`#activity${item.id}`}
                  >
                    <img
                      src={item.imageUrls}
                      className="card-img-top"
                      alt="..."
                    />

                    <div
                      className="card-box d-flex px-2 mt-2 justify-content-between
                    "
                    >
                      <p className="fw-bold  mb-2"> {item.title} </p>
                      <p className="my-0">
                        <i className="fa-solid fa-star text-warning pe-1"></i>
                        {item.rating}
                      </p>
                    </div>

                    <div className="card-body py-0 px-2 mb-1">
                      <p className="card-text mb-1">
                        <img src="img/pin.png" alt="" className="me-1" />
                        {item.city}, {item.province}
                      </p>
                      <p className="mb-0 text-secondary"> Start form</p>
                      <p className="mb-0 price"> IDR {item.price}</p>
                    </div>
                  </div>
                  <div>
                    {/* Modal */}
                    <div
                      className="modal fade"
                      id={`activity${item.id}`}
                      tabIndex={-1}
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h3
                              className="modal-title fs-5 fw-bold"
                              id="exampleModalLabel"
                            >
                              {item.title}
                            </h3>
                          </div>
                          <div className="modal-body">
                            <img src={item.imageUrls} alt="" />
                            <div className="box-atas d-flex justify-content-between">
                              <div className="kiri">
                                <p className="mt-2">
                                  <img
                                    src="img/pin.png"
                                    alt=""
                                    className="me-1"
                                  />
                                  {item.city} , {item.province}{" "}
                                </p>
                              </div>

                              <div className="kanan">
                                <p className="mt-2 text-end">
                                  <i className="fa-solid fa-star text-warning pe-1"></i>{" "}
                                  {item.rating} / ({item.total_reviews}) Review
                                </p>
                              </div>
                            </div>
                            <p className="my-0">{item.description}</p> <br />
                            <p className="my-0 fw-bold">
                              {" "}
                              <i className="fa-solid fa-circle-info text-info me-2"></i>
                              Facilities :
                            </p>
                            <p>{item.facilities} </p>
                            <p className="my-0 fw-bold">
                              {" "}
                              <i className="fa-solid fa-signs-post text-warning"></i>{" "}
                              Address :
                            </p>
                            <p> {item.address} </p>
                            <p className="my-0 fw-bold ">
                              <i className="fa-solid fa-barcode text-danger me-2"></i>
                              Price :
                            </p>
                            <p> {item.price}</p>
                            <p className="my-0 fw-bold">
                              <i className="fa-solid fa-tag text-bg-success me-2"></i>
                              Discount price :{" "}
                            </p>
                            <p> {item.price_discount}</p>
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

export default Activity;
