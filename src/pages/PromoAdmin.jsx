import React, { useEffect, useState } from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import axios from "axios";

const PromoAdmin = () => {
  const baseUrl = "https://travel-journal-api-bootcamp.do.dibimbing.id";
  const isLogin = JSON.parse(localStorage.getItem("token"));
  const account = JSON.parse(localStorage.getItem("account"));

  const [promo, setPromo] = useState([]);

  // State add new Promo
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [terms, setTerms] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [discPrice, setDiscPrice] = useState(0);
  const [claimPrice, setClaimPrice] = useState(0);

  // State Edit Promo
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editImageUrl, setEditImageUrl] = useState("");
  const [editImagePrev, setEditImagePrev] = useState("");
  const [editTerms, setEditTerms] = useState("");
  const [editPromoCode, setEditPromoCode] = useState("");
  const [editDiscPrice, setEditDiscPrice] = useState(0);
  const [editClaimPrice, setEditClaimPrice] = useState(0);

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
    setImagePreview(URL.createObjectURL(e.target.files[0]));
    setImageUrl(e.target.files[0]);
  };

  const handleTerms = (e) => {
    console.log(e.target.value);
    setTerms(e.target.value);
  };

  const handleCode = (e) => {
    console.log(e.target.value);
    setPromoCode(e.target.value);
  };

  const handleDiscPrice = (e) => {
    console.log(e.target.value);
    setDiscPrice(e.target.value);
  };

  const handleClaimPrice = (e) => {
    console.log(e.target.value);
    setClaimPrice(e.target.value);
  };

  const handleSubmit = async (e) => {
    let defaultImage = "";

    const formData = new FormData();
    formData.append("image", imageUrl);

    // upload image
    await axios
      .post(`${baseUrl}/api/v1/upload-image`, formData, {
        headers: {
          apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          Authorization: `Bearer ${isLogin}`,
        },
      })
      .then(function (response) {
        defaultImage = response.data.url;
        console.log(response.data.url);
      })
      .catch(function (error) {
        console.log(error);
      });

    // create promo
    await axios
      .post(
        `${baseUrl}/api/v1/create-promo`,
        {
          title: title,
          description: description,
          imageUrl: defaultImage,
          terms_condition: terms,
          promo_code: promoCode,
          promo_discount_price: parseInt(discPrice),
          minimum_claim_price: parseInt(claimPrice),
        },
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer ${isLogin}`,
          },
        }
      )
      .then(function (response) {
        alert("Promo berhasil ditambah");
        axios
          .get(`${baseUrl}/api/v1/promos`, {
            headers: {
              apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            },
          })
          .then(function (response) {
            // console.log(response.data.data);
            setPromo(response.data.data);
            window.location.reload();
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // handle Update
  const handleEditTItle = (e) => {
    console.log(e.target.value);
    setEditTitle(e.target.value);
  };

  const handleEditDescription = (e) => {
    console.log(e.target.value);
    setEditDescription(e.target.value);
  };

  const handleEditImage = (e) => {
    console.log(e.target.files[0]);
    setEditImagePrev(URL.createObjectURL(e.target.files[0]));
    setEditImageUrl(e.target.files[0]);
  };

  const handleEditTerm = (e) => {
    console.log(e.target.value);
    setEditTerms(e.target.value);
  };

  const handleEditPromoCode = (e) => {
    console.log(e.target.value);
    setEditPromoCode(e.target.value);
  };

  const handleEditDiscPrice = (e) => {
    console.log(e.target.value);
    setEditDiscPrice(e.target.value);
  };

  const handleEditClaimPrice = (e) => {
    console.log(e.target.value);
    setEditClaimPrice(e.target.value);
  };

  const handleEditSubmit = async (promoId) => {
    let defaultImage2 = "";

    const formData = new FormData();
    formData.append("image", editImageUrl);

    // upload image

    await axios
      .post(`${baseUrl}/api/v1/upload-image`, formData, {
        headers: {
          apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          Authorization: `Bearer ${isLogin}`,
        },
      })
      .then(function (response) {
        defaultImage2 = response.data.url;
        console.log(response.data.url);
      })
      .catch(function (error) {
        console.log(error);
      });

    // update promo
    await axios
      .post(
        `${baseUrl}/api/v1/update-promo/${promoId}`,
        {
          title: editTitle,
          lastName: editDescription,
          imageUrl: defaultImage2,
          terms_condition: editTerms,
          promo_code: editPromoCode,
          promo_discount_price: parseInt(editDiscPrice),
          minimum_claim_price: parseInt(editClaimPrice),
        },
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer ${isLogin}`,
          },
        }
      )
      .then(function (response) {
        // console.log(response);
        alert("Edit Promo berhsail");
        axios
          .get(`${baseUrl}/api/v1/promos`, {
            headers: {
              apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            },
          })
          .then(function (response) {
            // console.log(response);
            setPromo(response.data.data);
            window.location.reload();
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleDelete = (promoId) => {
    const teks = "apa anda yakin ? ";

    if (confirm(teks) == true) {
      axios
        .delete(`${baseUrl}/api/v1/delete-promo/${promoId}`, {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer ${isLogin}`,
          },
        })
        .then(function (response) {
          console.log(response);
          alert("promo berhasil dihapus");
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
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <>
      <NavbarAdmin />
      <div className="promo-admin p-2">
        <div className="container">
          <h4>
            <img src="./img/discount2.png" alt="" /> Manage Promo
          </h4>
          <hr />

          <div className="promo-admin-box">
            <div>
              {/* Button trigger modal */}
              <button
                type="button"
                className="btn btn-success mb-2"
                data-bs-toggle="modal"
                data-bs-target="#addPromo"
              >
                Add new Promo
              </button>
              {/* Modal */}
              <div
                className="modal fade"
                id="addPromo"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content p-2">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Add new Promo
                      </h1>
                    </div>
                    <div className="modal-body">
                      <form action="">
                        <label htmlFor="imageUrl" className="mb-2">
                          {" "}
                          Image{" "}
                        </label>{" "}
                        <br />
                        <img src={imagePreview} alt="" className="my-3 w-100" />
                        <input
                          type="file"
                          accept="image/*"
                          id="imageUrl"
                          className="mb-2 w-75"
                          onChange={handleImageUrl}
                        />{" "}
                        <br />
                        <label htmlFor="title" className="mb-1">
                          {" "}
                          Title
                        </label>{" "}
                        <br />
                        <input
                          type="text"
                          id="title"
                          className=" my-0 form-control w-50"
                          onChange={handleTitle}
                        />{" "}
                        <br />
                        <label htmlFor="description" className="mb-1">
                          {" "}
                          Description
                        </label>{" "}
                        <br />
                        <textarea
                          name=""
                          id="description"
                          cols="50"
                          rows="3"
                          className=" w-75 form-control"
                          onChange={handleDescription}
                        ></textarea>
                        <br />
                        <label htmlFor="term" className="mb-1">
                          {" "}
                          Term and condition
                        </label>{" "}
                        <br />
                        <textarea
                          name=""
                          id="term"
                          cols="50"
                          rows="2"
                          className=" w-75 form-control"
                          onChange={handleTerms}
                        ></textarea>
                        <br />
                        <label htmlFor="code" className="mb-1">
                          {" "}
                          Promo Code
                        </label>{" "}
                        <br />
                        <input
                          type="text"
                          id="code"
                          className=" form-control w-25"
                          onChange={handleCode}
                        />{" "}
                        <br />
                        <label htmlFor="discPrice" className="mb-1">
                          Promo Discount Price
                        </label>
                        <br />
                        <input
                          type="number"
                          id="discPrice"
                          className="form-control w-50"
                          onChange={handleDiscPrice}
                        />{" "}
                        <br />
                        <label htmlFor="claimPrice" className="mb-1">
                          {" "}
                          Minimum Claim Price
                        </label>{" "}
                        <br />
                        <input
                          type="number"
                          id="claimPrice"
                          className="form-control w-50"
                          onChange={handleClaimPrice}
                        />{" "}
                        <br />
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
                        Submit
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
                    <th scope="col">Promo Code</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {promo.map((item, i) => {
                    return (
                      <tr key={i}>
                        <th scope="row">
                          <img src={item.imageUrl} alt="" />
                        </th>
                        <td>{item.title}</td>
                        <td>{item.promo_code}</td>
                        <td>
                          {/* Button trigger modal */}
                          <button
                            type="button"
                            className="btn btn-primary btn-sm me-2 mb-2"
                            data-bs-toggle="modal"
                            data-bs-target={`#category${item.id}`}
                          >
                            Update
                          </button>
                          {/* Modal */}
                          <div
                            className="modal fade"
                            id={`category${item.id}`}
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
                                    Update Promo
                                  </h1>
                                </div>
                                <div className="modal-body">
                                  <form action="">
                                    <label htmlFor="" className="mb-2">
                                      {" "}
                                      Image Url
                                    </label>{" "}
                                    <br />
                                    <img
                                      src={editImagePrev}
                                      alt=""
                                      className="w-100 my-3 "
                                    />
                                    <input
                                      type="file"
                                      accept="image/*"
                                      className="w-75 mb-2"
                                      onChange={handleEditImage}
                                    />{" "}
                                    <br />
                                    <label htmlFor="" className="mb-1">
                                      {" "}
                                      Description
                                    </label>{" "}
                                    <br />
                                    <textarea
                                      name=""
                                      id=""
                                      cols="50"
                                      rows="3"
                                      className="form-control w-75"
                                      onChange={handleEditDescription}
                                    ></textarea>{" "}
                                    <br />
                                    <label htmlFor="" className="mb-1">
                                      {" "}
                                      Title
                                    </label>{" "}
                                    <br />
                                    <input
                                      type="text"
                                      className="form-control w-50"
                                      onChange={handleEditTItle}
                                    />{" "}
                                    <br />
                                    <label htmlFor="">
                                      {" "}
                                      Term and Condition
                                    </label>{" "}
                                    <br />
                                    <input
                                      type="text"
                                      className="form-control w-50"
                                      onChange={handleEditTerm}
                                    />{" "}
                                    <br />
                                    <label htmlFor="" className="mb-1">
                                      {" "}
                                      Promo Code
                                    </label>{" "}
                                    <br />
                                    <input
                                      type="text"
                                      className="form-control w-50"
                                      onChange={handleEditPromoCode}
                                    />{" "}
                                    <br />
                                    <label htmlFor="" className="mb-1">
                                      {" "}
                                      Promo Discount Price
                                    </label>{" "}
                                    <br />
                                    <input
                                      type="number"
                                      className="form-control w-50"
                                      onChange={handleEditDiscPrice}
                                    />{" "}
                                    <br />
                                    <label htmlFor="" className="mb-1">
                                      {" "}
                                      Minimum Claim Price
                                    </label>{" "}
                                    <br />
                                    <input
                                      type="number"
                                      className="mb-2 form-control w-50"
                                      onChange={handleEditClaimPrice}
                                    />{" "}
                                    <br />
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

export default PromoAdmin;
