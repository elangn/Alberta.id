import React, { useEffect, useState } from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import axios from "axios";

const BannerAdmin = () => {
  const baseUrl = "https://travel-journal-api-bootcamp.do.dibimbing.id";
  const isLogin = JSON.parse(localStorage.getItem("token"));
  const account = JSON.parse(localStorage.getItem("account"));

  const [banner, setBanner] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const [editName, setEditName] = useState("");
  const [editImage, setEditImage] = useState("");
  const [editImagePrev, setEditImagePrev] = useState("");

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/banners`, {
        headers: {
          apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
        },
      })
      .then(function (response) {
        // console.log(response.data.data);
        setBanner(response.data.data);
      });
  }, []);

  const handleChangeName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleChangeImage = (e) => {
    console.log(e.target.value);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    let defaultImageUrl = "";

    const formData = new FormData();
    formData.append("image", image);

    // upload image
    await axios
      .post(`${baseUrl}/api/v1/upload-image`, formData, {
        headers: {
          apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          Authorization: `Bearer ${isLogin}`,
        },
      })
      .then(function (response) {
        defaultImageUrl = response.data.url;
        console.log(response.data.url);
      })
      .catch(function (error) {
        console.log(error);
      });

    // create banner
    await axios
      .post(
        `${baseUrl}/api/v1/create-banner`,
        {
          name: name,
          imageUrl: defaultImageUrl,
        },
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer ${isLogin}`,
          },
        }
      )
      .then(function (response) {
        alert("banner berhasil ditambah");
        axios
          .get(`${baseUrl}/api/v1/banners`, {
            headers: {
              apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            },
          })
          .then(function (response) {
            // console.log(response.data.data);
            setBanner(response.data.data);
          })
          .catch(function (error) {
            console.log(error);
          });
        window.location.reload();
      });
  };

  const handleEditName = (e) => {
    console.log(e.target.value);
    setEditName(e.target.value);
  };

  const handleEditImage = (e) => {
    console.log(e.target.files[0]);
    setEditImagePrev(URL.createObjectURL(e.target.files[0]));
    setEditImage(e.target.files[0]);
  };

  const handleEditSubmit = async (bannerId) => {
    let defaultImage = "";

    const formData = new FormData();
    formData.append("image", editImage);

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

    // edit banner by ID
    await axios
      .post(
        `${baseUrl}/api/v1/update-banner/${bannerId}`,
        {
          name: editName,
          imageUrl: defaultImage,
        },
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Authorization ${isLogin}`,
          },
        }
      )
      .then(function (response) {
        alert("Update Banner berhasil");
        axios
          .get(`${baseUrl}/api/v1/banners`, {
            headers: {
              apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            },
          })
          .then(function (response) {
            // console.log(response.data.data);
            setBanner(response.data.data);
            window.location.reload();
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleDelete = (bannerId) => {
    const teks = "apakah anda yakin hapus banner ? ";
    if (confirm(teks) == true) {
      axios
        .delete(`${baseUrl}/api/v1/delete-banner/${bannerId}`, {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer ${isLogin}`,
          },
        })
        .then(function (response) {
          // console.log(response);
          // alert("promo berhasil dihapus");
          axios
            .get(`${baseUrl}/api/v1/banners`, {
              headers: {
                apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
              },
            })
            .then(function (response) {
              // console.log(response);
              setBanner(response.data.data);
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
      <div className="banner-admin">
        <div className="container">
          <h4>
            <img src="./img/advertisement.png" alt="" className="me-2" /> Manage
            Banner
          </h4>
          <hr />
          <div className="banner-admin-box">
            <div className="modal-new">
              {/* Button trigger modal */}
              <button
                type="button"
                className="btn btn-success mb-2"
                data-bs-toggle="modal"
                data-bs-target="#addBanner"
              >
                Add new Banner
              </button>
              {/* Modal */}
              <div
                className="modal fade"
                id="addBanner"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Add new Banner
                      </h1>
                    </div>
                    <div className="modal-body">
                      <form action="">
                        <label htmlFor="bannerUrl" className="me-2 mb-2">
                          Image
                        </label>{" "}
                        <br />
                        <img src={imagePreview} alt="" className="mb-2 w-100" />
                        <input
                          type="file"
                          accept="image/*"
                          id="bannerUrl"
                          className="w-75"
                          onChange={handleChangeImage}
                        />
                        <br /> <br />
                        <label htmlFor="name" className="mb-1">
                          Name
                        </label>{" "}
                        <br />
                        <input
                          type="text"
                          id="name"
                          className="w-50 form-control"
                          onChange={handleChangeName}
                        />
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
              <table className="table ">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {banner.map((item, i) => {
                    return (
                      <tr key={i}>
                        <th scope="row">
                          <img src={item.imageUrl} alt="" />
                        </th>
                        <td>{item.name}</td>
                        <td>
                          {/* Button trigger modal */}
                          <button
                            type="button"
                            className="btn btn-primary btn-sm me-2 mb-2"
                            data-bs-toggle="modal"
                            data-bs-target={`#banner${item.id}`}
                          >
                            Update
                          </button>
                          {/* Modal */}
                          <div
                            className="modal fade"
                            id={`banner${item.id}`}
                            tabIndex={-1}
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog">
                              <div className="modal-content ">
                                <div className="modal-header">
                                  <h1
                                    className="modal-title fs-5"
                                    id="exampleModalLabel"
                                  >
                                    Update Banner
                                  </h1>
                                </div>
                                <div className="modal-body">
                                  <form action="">
                                    <label htmlFor="" className="mb-2">
                                      {" "}
                                      Image{" "}
                                    </label>{" "}
                                    <br />
                                    <img
                                      src={editImagePrev}
                                      alt=""
                                      className="w-100 my-3"
                                    />
                                    <input
                                      type="file"
                                      accept="image/*"
                                      className="w-75"
                                      onChange={handleEditImage}
                                    />{" "}
                                    <br />
                                    <br />
                                    <label htmlFor="" className="mb-1">
                                      {" "}
                                      Name{" "}
                                    </label>{" "}
                                    <br />
                                    <input
                                      type="text"
                                      className="form-control w-50"
                                      onChange={handleEditName}
                                      value={editName}
                                    />{" "}
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

export default BannerAdmin;
