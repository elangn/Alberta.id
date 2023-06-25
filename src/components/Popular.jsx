import React, { useEffect, useState } from "react";
import axios from "axios";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  const baseUrl = "https://travel-journal-api-bootcamp.do.dibimbing.id";

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/activities`, {
        headers: {
          apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
        },
      })
      .then(function (response) {
        // console.log(response.data.data);
        setPopular(response.data.data.slice(0, 2));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="popular">
      <div className="container">
        <h2>Popular Destination</h2>
        <p className="text-secondary">
          Top destination in Alberta.id, don't worry about your dream
          destination with us
        </p>

        <div className="popular-box">
          <div className="row">
            {popular.map((item, i) => {
              return (
                <div className="col-sm-6 col-md-3" key={i}>
                  <div
                    className="card my-2"
                    data-bs-toggle="modal"
                    data-bs-target={`#popularh${item.id}`}
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
                      <p className="fw-bold mb-2"> {item.title} </p>
                      <p className="my-0">
                        <i className="fa-solid fa-star text-warning pe-1"></i>
                        {item.rating}
                      </p>
                    </div>

                    <div className="card-body py-0">
                      <p className="card-text mb-1">
                        <img src="img/pin.png" alt="" className="me-1 p-0" />
                        {item.city}, {item.province}
                      </p>

                      <p className="text-secondary">
                        More <i className="fa-solid fa-circle-arrow-right"></i>
                      </p>
                    </div>
                  </div>

                  <div>
                    {/* Modal */}
                    <div
                      className="modal fade"
                      id={`popularh${item.id}`}
                      tabIndex={-1}
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h3
                              className="modal-title fs-5"
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

export default Popular;
