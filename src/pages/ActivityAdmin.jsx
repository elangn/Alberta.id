import React, { useEffect, useState } from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import axios from "axios";

const ActivityAdmin = () => {
  const baseUrl = "https://travel-journal-api-bootcamp.do.dibimbing.id";
  const isLogin = JSON.parse(localStorage.getItem("token"));
  const account = JSON.parse(localStorage.getItem("account"));

  const [activity, setActivity] = useState([]);

  const [categoryId, setCategoryId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrls, setImageUrl] = useState("");
  const [imageUrls2, setImageUrl2] = useState("");
  const [price, setPrice] = useState(0);
  const [price_discount, setPrice_Discount] = useState(0);
  const [rating, setRating] = useState(0);
  const [total_reviews, setTotal_Reviews] = useState(0);
  const [facilities, setFacilities] = useState("");
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [location_maps, setLocation_Maps] = useState("");

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/activities`, {
        headers: {
          apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
        },
      })
      .then(function (response) {
        // console.log(response.data.data);
        setActivity(response.data.data);
      })
      .catch(function (error) {
        console.log("error");
      });
  }, []);

  const handleCategoryId = (e) => {
    console.log(e.target.value);
    setCategoryId(e.target.value);
  };

  const handleTitle = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    console.log(e.target.value);
    setDescription(e.target.value);
  };

  const handleImageUrl = (e) => {
    console.log(e.target.value);
    setImageUrl(e.target.value);
  };

  const handleImageUrl2 = (e) => {
    console.log(e.target.value);
    setImageUrl2(e.target.value);
  };

  const handlePrice = (e) => {
    console.log(e.target.value);
    setPrice(e.target.value);
  };

  const handleDiscountPrice = (e) => {
    console.log(e.target.value);
    setPrice_Discount(e.target.value);
  };

  const handleRating = (e) => {
    console.log(e.target.value);
    setRating(e.target.value);
  };

  // const handleRating = (e) => {
  //   console.log(e.target.value);
  //   setRating(e.target.value);
  // };

  const handleReview = (e) => {
    console.log(e.target.value);
    setTotal_Reviews(e.target.value);
  };

  const handleFacilities = (e) => {
    console.log(e.target.value);
    setFacilities(e.target.value);
  };

  const handleAddress = (e) => {
    console.log(e.target.value);
    setAddress(e.target.value);
  };

  const handleProvince = (e) => {
    console.log(e.target.value);
    setProvince(e.target.value);
  };

  const handleCity = (e) => {
    console.log(e.target.value);
    setCity(e.target.value);
  };

  const handleMap = (e) => {
    console.log(e.target.value);
    setLocation_Maps(e.target.value);
  };

  const handleSubmit = (e) => {
    axios
      .post(
        `${baseUrl}/api/v1/create-activity`,
        {
          categoryId: categoryId,
          title: title,
          description: description,
          imageUrls: [imageUrls, imageUrls2],
          price: parseInt(price),
          price_discount: parseInt(price_discount),
          rating: parseInt(rating),
          total_reviews: parseInt(total_reviews),
          facilities: facilities,
          address: address,
          province: province,
          city: city,
          location_maps: location_maps,
        },
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer ${isLogin}`,
          },
        }
      )
      .then(function (response) {
        alert("berhasil menambahkan activity baru");
        axios
          .get(`${baseUrl}/api/v1/activities`, {
            headers: {
              apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            },
          })
          .then(function (response) {
            // console.log(response.data.data);
            setActivity(response.data.data);
          })
          .catch(function (error) {
            console.log("error");
          });
      })
      .catch(function (error) {
        console.log("error");
      });
  };

  const handleDelete = (activityId) => {
    axios
      .delete(`${baseUrl}/api/v1/delete-activity/${activityId}`, {
        headers: {
          apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          Authorization: `Bearer ${isLogin}`,
        },
      })
      .then(function (response) {
        console.log(response);
        alert("activity berhasil dihapus");
        axios
          .get(`${baseUrl}/api/v1/activities`, {
            headers: {
              apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            },
          })
          .then(function (response) {
            // console.log(response);
            setActivity(response.data.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <NavbarAdmin />
      <div className="activity-admin">
        <div className="container">
          <h4>
            <img src="./img/ticket.png" alt="" className="me-2" /> Manage
            Activity
          </h4>
          <hr />
          <div className="activity-admin-box">
            <div>
              {/* Button trigger modal */}
              <button
                type="button"
                className="btn btn-success mb-2"
                data-bs-toggle="modal"
                data-bs-target="#addActivity"
              >
                Add new Activity
              </button>
              {/* Modal */}
              <div
                className="modal fade"
                id="addActivity"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Add new Activity
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <form action="">
                        <label htmlFor="" className="mb-1">
                          {" "}
                          CategoryId
                        </label>
                        <br />
                        <input
                          type="text"
                          className="mb-2"
                          onChange={handleCategoryId}
                        />{" "}
                        <br />
                        <label htmlFor="" className="mb-1">
                          {" "}
                          Title
                        </label>
                        <br />
                        <input
                          type="text"
                          className="mb-2"
                          onChange={handleTitle}
                        />{" "}
                        <br />
                        <label htmlFor="" className="mb-1">
                          {" "}
                          Description
                        </label>
                        <br />
                        <textarea
                          name=""
                          id=""
                          cols="50"
                          rows="3"
                          className="mb-2"
                          onChange={handleDescription}
                        ></textarea>
                        <br />
                        <label htmlFor="" className="mb-1">
                          {" "}
                          Image Url
                        </label>
                        <br />
                        <input
                          type="text"
                          className="mb-2 w-75"
                          onChange={handleImageUrl}
                        />{" "}
                        <br />
                        <label htmlFor="" className="mb-1">
                          {" "}
                          Image Url 2
                        </label>
                        <br />
                        <input
                          type="text"
                          className="mb-2 w-75"
                          onChange={handleImageUrl2}
                        />{" "}
                        <br />
                        <label htmlFor="" className="mb-1">
                          {" "}
                          Price
                        </label>
                        <br />
                        <input
                          type="number"
                          className="mb-2"
                          onChange={handlePrice}
                        />{" "}
                        <br />
                        <label htmlFor="" className="mb-1">
                          {" "}
                          Discount Price
                        </label>
                        <br />
                        <input
                          type="number"
                          className="mb-2"
                          onChange={handleDiscountPrice}
                        />{" "}
                        <br />
                        <label htmlFor="" className="mb-1">
                          {" "}
                          Rating
                        </label>
                        <br />
                        <input
                          type="number"
                          className="mb-2"
                          onChange={handleRating}
                        />{" "}
                        <br />
                        <label htmlFor="" className="mb-1">
                          {" "}
                          Total Reviews
                        </label>
                        <br />
                        <input
                          type="number"
                          className="mb-2"
                          onChange={handleReview}
                        />{" "}
                        <br />
                        <label htmlFor="" className="mb-1">
                          {" "}
                          Facilities
                        </label>
                        <br />
                        <input
                          type="text"
                          className="mb-2"
                          onChange={handleFacilities}
                        />{" "}
                        <br />
                        <label htmlFor="" className="mb-1">
                          {" "}
                          Address
                        </label>
                        <br />
                        <textarea
                          name=""
                          id=""
                          cols="50"
                          rows="2"
                          className="mb-2"
                          onChange={handleAddress}
                        ></textarea>{" "}
                        <br />
                        <label htmlFor="" className="mb-1">
                          {" "}
                          Province
                        </label>{" "}
                        <br />
                        <input
                          type="text"
                          className="mb-2"
                          onChange={handleProvince}
                        />{" "}
                        <br />
                        <label htmlFor="" className="mb-1">
                          {" "}
                          City
                        </label>{" "}
                        <br />
                        <input
                          type="text"
                          className="mb-2"
                          onChange={handleCity}
                        />{" "}
                        <br />
                        <label htmlFor="" className="mb-1">
                          {" "}
                          Map Location
                        </label>
                        <br />
                        <textarea
                          name=""
                          id=""
                          cols="50"
                          rows="2"
                          className="mb-2"
                          onChange={handleMap}
                        ></textarea>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleSubmit}
                      >
                        Sumbit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <table className="table">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Title</th>
                  <th scope="col">Kategori</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {activity.map((item, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">
                        <img src={item.imageUrls} alt="" />
                      </th>
                      <td>{item.title}</td>
                      <td>{item.category.name}</td>
                      <td>
                        {/* Button trigger modal */}
                        <button
                          type="button"
                          className="btn btn-primary btn-sm me-2"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          Update
                        </button>
                        {/* Modal */}
                        <div
                          className="modal fade"
                          id="exampleModal"
                          tabIndex={-1}
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1
                                  className="modal-title fs-5"
                                  id="exampleModalLabel"
                                >
                                  Modal title
                                </h1>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                />
                              </div>
                              <div className="modal-body">...</div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  Save changes
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityAdmin;
