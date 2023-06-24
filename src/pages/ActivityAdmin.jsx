import React, { useEffect, useState } from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import axios from "axios";

const ActivityAdmin = () => {
  const baseUrl = "https://travel-journal-api-bootcamp.do.dibimbing.id";
  const isLogin = JSON.parse(localStorage.getItem("token"));
  const account = JSON.parse(localStorage.getItem("account"));

  const [activity, setActivity] = useState([]);

  // state create
  const [categoryId, setCategoryId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrls, setImageUrl] = useState("");
  const [imagePreview1, setImagePreview1] = useState("");
  const [imageUrls2, setImageUrl2] = useState("");
  const [imagePreview2, setImagePreview2] = useState("");
  const [price, setPrice] = useState(0);
  const [price_discount, setPrice_Discount] = useState(0);
  const [rating, setRating] = useState(0);
  const [total_reviews, setTotal_Reviews] = useState(0);
  const [facilities, setFacilities] = useState("");
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [location_maps, setLocation_Maps] = useState("");

  // state update
  const [EditCategoryId, setEditCategoryId] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editImageUrls, setEditImageUrl] = useState("");
  const [imagePreview3, setImagePreview3] = useState("");
  const [editImageUrls2, setEditImageUrl2] = useState("");
  const [imagePreview4, setImagePreview4] = useState("");
  const [editPrice, setEditPrice] = useState(0);
  const [editPrice_discount, setEditPrice_Discount] = useState(0);
  const [editRating, setEditRating] = useState(0);
  const [editTotal_reviews, setEditTotal_Reviews] = useState(0);
  const [editFacilities, setEditFacilities] = useState("");
  const [editAddress, setEditAddress] = useState("");
  const [editProvince, setEditProvince] = useState("");
  const [editCity, setEditCity] = useState("");
  const [editLocation_maps, setEditLocation_Maps] = useState("");

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

  // handle create

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
    console.log(e.target.files[0]);
    setImagePreview1(URL.createObjectURL(e.target.files[0]));
    setImageUrl(e.target.files[0]);
  };

  const handleImageUrl2 = (e) => {
    console.log(e.target.files[0]);
    setImagePreview2(URL.createObjectURL(e.target.files[0]));
    setImageUrl2(e.target.files[0]);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    let defaultImage1 = "";
    // let defaultImage2 = "";

    const formData = new FormData();
    formData.append("image", imageUrls);

    // upload image 1

    await axios
      .post(`${baseUrl}/api/v1/upload-image`, formData, {
        headers: {
          apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          Authorization: `Bearer ${isLogin}`,
        },
      })
      .then(function (response) {
        defaultImage1 = response.data.url;
        console.log(response.data.url);
      })
      .catch(function (error) {
        console.log(error);
      });

    // const formData2 = new FormData();
    // formData2.append("image", imageUrls2);

    // upload image 2

    // await axios
    //   .post(`${baseUrl}/api/v1/upload-image`, formData2, {
    //     headers: {
    //       apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
    //       Authorization: `Bearer ${isLogin}`,
    //     },
    //   })
    //   .then(function (response) {
    //     defaultImage2 = response.data.url;
    //     console.log(response.data.url);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    // console.log(defaultImage1);
    // console.log(defaultImage2);

    // create activity
    await axios
      .post(
        `${baseUrl}/api/v1/create-activity`,
        {
          categoryId: categoryId,
          title: title,
          description: description,
          imageUrls: [defaultImage1],
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

  // handle edit
  const handleEditCategoryId = (e) => {
    console.log(e.target.value);
    setEditCategoryId(e.target.value);
  };

  const handleEditTitle = (e) => {
    console.log(e.target.value);
    setEditTitle(e.target.value);
  };

  const handleEditDescription = (e) => {
    console.log(e.target.value);
    setEditDescription(e.target.value);
  };

  const handleEditImageUrl = (e) => {
    console.log(e.target.files[0]);
    setImagePreview3(URL.createObjectURL(e.target.files[0]));
    setEditImageUrl(e.target.files[0]);
  };

  const handleEditImageUrl2 = (e) => {
    console.log(e.target.files[0]);
    setImagePreview4(URL.createObjectURL(e.target.files[0]));
    setEditImageUrl2(e.target.files[0]);
  };

  const handleEditPrice = (e) => {
    console.log(e.target.value);
    setEditPrice(e.target.value);
  };

  const handleEditDiscountPrice = (e) => {
    console.log(e.target.value);
    setEditPrice_Discount(e.target.value);
  };

  const handleEditRating = (e) => {
    console.log(e.target.value);
    setEditRating(e.target.value);
  };

  const handleEditReview = (e) => {
    console.log(e.target.value);
    setEditTotal_Reviews(e.target.value);
  };

  const handleEditFacilities = (e) => {
    console.log(e.target.value);
    setEditFacilities(e.target.value);
  };

  const handleEditAddress = (e) => {
    console.log(e.target.value);
    setEditAddress(e.target.value);
  };

  const handleEditProvince = (e) => {
    console.log(e.target.value);
    setEditProvince(e.target.value);
  };

  const handleEditCity = (e) => {
    console.log(e.target.value);
    setEditCity(e.target.value);
  };

  const handleEditMap = (e) => {
    console.log(e.target.value);
    setEditLocation_Maps(e.target.value);
  };

  const handleEditSubmit = async (activityId) => {
    let defaultImage3 = "";
    let defaultImage4 = "";

    const formData3 = new FormData();
    formData.append("image", editImageUrls);

    // upload image 3

    await axios
      .post(`${baseUrl}/api/v1/upload-image`, formData3, {
        headers: {
          apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          Authorization: `Bearer ${isLogin}`,
        },
      })
      .then(function (response) {
        defaultImage3 = response.data.url;
        console.log(response.data.url);
      })
      .catch(function (error) {
        console.log(error);
      });

    const formData4 = new FormData();
    formData2.append("image", editImageUrls2);

    // upload image 2

    await axios
      .post(`${baseUrl}/api/v1/upload-image`, formData4, {
        headers: {
          apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          Authorization: `Bearer ${isLogin}`,
        },
      })
      .then(function (response) {
        defaultImage4 = response.data.url;
        console.log(response.data.url);
      })
      .catch(function (error) {
        console.log(error);
      });

    // update activity
    await axios
      .post(
        `${baseUrl}/api/v1/update-activity/${activityId}`,
        {
          categoryId: EditCategoryId,
          title: editTitle,
          description: editDescription,
          imageUrls: [defaultImage3, defaultImage4],
          price: parseInt(editPrice),
          price_discount: parseInt(editPrice_discount),
          rating: parseInt(editRating),
          total_reviews: parseInt(editTotal_reviews),
          facilities: editFacilities,
          address: editAddress,
          province: editProvince,
          city: editCity,
          location_maps: editLocation_maps,
        },
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer ${isLogin}`,
          },
        }
      )
      .then(function (response) {
        alert("berhasil update Activity");
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

  // handle delete
  const handleDelete = (activityId) => {
    const teks = "apa anda yakin ? ";
    if (confirm(teks) == true) {
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
    }
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
                    </div>
                    <div className="modal-body">
                      <form action="">
                        <label htmlFor="" className="mb-1">
                          {" "}
                          Image 1
                        </label>
                        <br />
                        <img
                          src={imagePreview1}
                          alt=""
                          className="w-100 my-2"
                        />
                        <input
                          type="file"
                          accept="image/*"
                          className="mb-2 w-75"
                          onChange={handleImageUrl}
                        />{" "}
                        <br />
                        {/* <label htmlFor="" className="mb-1">
                          {" "}
                          Image 2
                        </label>
                        <br />
                        <img
                          src={imagePreview2}
                          alt=""
                          className="w-100 my-2"
                        />
                        <input
                          type="file"
                          accept="image/*"
                          className="mb-2 w-75"
                          onChange={handleImageUrl2}
                        />{" "} */}
                        <br />
                        <label htmlFor="" className="mb-1">
                          {" "}
                          CategoryId
                        </label>
                        <br />
                        <input
                          type="text"
                          className="form-control w-50"
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
                          className="form-control w-50"
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
                          className="form-control w-75"
                          onChange={handleDescription}
                        ></textarea>
                        <br />
                        <label htmlFor="" className="mb-1">
                          {" "}
                          Price
                        </label>
                        <br />
                        <input
                          type="number"
                          className="form-control w-50"
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
                          className="form-control w-50"
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
                          className="form-control w-50"
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
                          className="form-control w-50"
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
                          className="form-control w-50"
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
                          className="form-control w-75"
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
                          className="form-control w-50"
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
                          className="form-control w-50"
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
                          className="form-control w-50"
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

            <div className="table-responsive">
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
                        <td> {item.title}</td>
                        <td>{item.category.name}</td>
                        <td>
                          {/* Button trigger modal */}
                          <button
                            type="button"
                            className="btn btn-primary btn-sm me-2 mb-2"
                            data-bs-toggle="modal"
                            data-bs-target={`#activity${item.id}`}
                          >
                            Update
                          </button>
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
                                  <h1
                                    className="modal-title fs-5"
                                    id="exampleModalLabel"
                                  >
                                    Update Activity
                                  </h1>
                                </div>
                                <div className="modal-body">
                                  <form action="">
                                    <label htmlFor="" className="mb-1">
                                      {" "}
                                      Image
                                    </label>
                                    <br />
                                    <img
                                      src={imagePreview3}
                                      alt=""
                                      className="my-3 w-100"
                                    />
                                    <input
                                      type="file"
                                      accept="image/*"
                                      className="mb-2 w-75"
                                      onChange={handleEditImageUrl}
                                    />{" "}
                                    <br />
                                    <label htmlFor="" className="mb-1">
                                      {" "}
                                      Image 2
                                    </label>
                                    <br />
                                    <img
                                      src={imagePreview4}
                                      alt=""
                                      className="my-3 w-100"
                                    />
                                    <input
                                      type="file"
                                      accept="image/*"
                                      className="mb-2 w-75"
                                      onChange={handleEditImageUrl2}
                                    />{" "}
                                    <br />
                                    <label htmlFor="" className="mb-1">
                                      {" "}
                                      Category Id
                                    </label>
                                    <br />
                                    <input
                                      type="text"
                                      className="form-control w-50"
                                      onChange={handleEditCategoryId}
                                    />{" "}
                                    <br />
                                    <label htmlFor="" className="mb-1">
                                      {" "}
                                      Title
                                    </label>
                                    <br />
                                    <input
                                      type="text"
                                      className="form-control w-50"
                                      onChange={handleEditTitle}
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
                                      className="form-control w-75"
                                      onChange={handleEditDescription}
                                    ></textarea>
                                    <br />
                                    <label htmlFor="" className="mb-1">
                                      {" "}
                                      Price
                                    </label>
                                    <br />
                                    <input
                                      type="number"
                                      className="form-control w-50"
                                      onChange={handleEditPrice}
                                    />{" "}
                                    <br />
                                    <label htmlFor="" className="mb-1">
                                      {" "}
                                      Discount Price
                                    </label>
                                    <br />
                                    <input
                                      type="number"
                                      className="form-control w-50"
                                      onChange={handleEditDiscountPrice}
                                    />{" "}
                                    <br />
                                    <label htmlFor="" className="mb-1">
                                      {" "}
                                      Rating
                                    </label>
                                    <br />
                                    <input
                                      type="number"
                                      className="form-control w-50"
                                      onChange={handleEditRating}
                                    />{" "}
                                    <br />
                                    <label htmlFor="" className="mb-1">
                                      {" "}
                                      Total Reviews
                                    </label>
                                    <br />
                                    <input
                                      type="number"
                                      className="form-control w-50"
                                      onChange={handleEditReview}
                                    />{" "}
                                    <br />
                                    <label htmlFor="" className="mb-1">
                                      {" "}
                                      Facilities
                                    </label>
                                    <br />
                                    <input
                                      type="text"
                                      className="form-control w-50"
                                      onChange={handleEditFacilities}
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
                                      className="form-control w-75"
                                      onChange={handleEditAddress}
                                    ></textarea>{" "}
                                    <br />
                                    <label htmlFor="" className="mb-1">
                                      {" "}
                                      Province
                                    </label>{" "}
                                    <br />
                                    <input
                                      type="text"
                                      className="form-control w-50"
                                      onChange={handleEditProvince}
                                    />{" "}
                                    <br />
                                    <label htmlFor="" className="mb-1">
                                      {" "}
                                      City
                                    </label>{" "}
                                    <br />
                                    <input
                                      type="text"
                                      className="form-control w-50"
                                      onChange={handleEditCity}
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
                                      className="form-control w-75 mb-2"
                                      onChange={handleEditMap}
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
                                    onClick={() => handleEditSubmit(item.id)}
                                  >
                                    Submit
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <button
                            className="btn btn-danger btn-sm mb-2"
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
      </div>
    </>
  );
};

export default ActivityAdmin;
