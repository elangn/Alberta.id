import React, { useEffect, useState } from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import axios from "axios";

const CategoryAdmin = () => {
  const baseUrl = "https://travel-journal-api-bootcamp.do.dibimbing.id";
  const account = JSON.parse(localStorage.getItem("account"));
  const isLogin = JSON.parse(localStorage.getItem("token"));

  const [category, setCategory] = useState([]);

  // state update
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // state update
  const [editName, setEditName] = useState("");
  const [editImageUrl, setEditImageUrl] = useState("");

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/categories`, {
        headers: {
          apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
        },
      })
      .then(function (response) {
        // console.log(response);
        setCategory(response.data.data);
      })
      .catch(function (error) {
        console.log("error");
      });
  }, []);

  // handle create

  const handleName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleImage = (e) => {
    console.log(e.target.value);
    setImageUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    axios
      .post(
        `${baseUrl}/api/v1/create-category`,
        {
          name: name,
          imageUrl: imageUrl,
        },
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer ${isLogin}`,
          },
        }
      )
      .then(function (response) {
        alert("berhasil menambahkan category baru");
        axios
          .get(`${baseUrl}/api/v1/categories`, {
            headers: {
              apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            },
          })
          .then(function (response) {
            // console.log(response);
            setCategory(response.data.data);
          })
          .catch(function (error) {
            console.log("error");
          });
      })
      .catch(function (error) {
        console.log("error");
      });
  };

  // handle Edit
  const handleEditName = (e) => {
    console.log(e.target.value);
    setEditName(e.target.value);
  };

  const handleEditImage = (e) => {
    console.log(e.target.value);
    setEditImageUrl(e.target.value);
  };

  const handleEditSubmit = (categoryId) => {
    axios
      .post(
        `${baseUrl}/api/v1/update-category/${categoryId}`,
        {
          name: editName,
          imageUrl: editImageUrl,
        },
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer ${isLogin}`,
          },
        }
      )
      .then(function (response) {
        alert("berhasil update category ");
        axios
          .get(`${baseUrl}/api/v1/categories`, {
            headers: {
              apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            },
          })
          .then(function (response) {
            // console.log(response);
            setCategory(response.data.data);
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
  const handleDelete = (categoryId) => {
    const text = confirm("apa anda yakin ? ");
    if (text == true) {
      axios
        .delete(`${baseUrl}/api/v1/delete-category/${categoryId}`, {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer ${isLogin}`,
          },
        })
        .then(function (response) {
          console.log(response);
          alert("category berhasil dihapus");
          axios
            .get(`${baseUrl}/api/v1/categories`, {
              headers: {
                apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
              },
            })
            .then(function (response) {
              // console.log(response);
              setCategory(response.data.data);
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

      <div className="category-admin">
        <div className="container">
          <h4>
            {" "}
            <img src="./img/categories.png" alt="" className="me-2 " /> Manage
            Category
          </h4>
          <hr />
          <div className="category-admin-box">
            <div>
              {/* Button trigger modal */}
              <button
                type="button"
                className="btn btn-success mb-2"
                data-bs-toggle="modal"
                data-bs-target="#addCategory"
              >
                Add new Category
              </button>
              {/* Modal */}
              <div
                className="modal fade"
                id="addCategory"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Add new Category
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
                        <label htmlFor="name"> Name</label> <br />
                        <input
                          type="text"
                          onChange={handleName}
                          className="mb-2"
                        />{" "}
                        <br />
                        <label htmlFor="imageUrl"> Image Url</label> <br />
                        <input
                          type="text"
                          onChange={handleImage}
                          className="w-75"
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

            <table className="table">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {category.map((item, i) => {
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
                          className="btn btn-primary btn-sm me-2"
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
                                  id={"exampleModalLabel"}
                                >
                                  Update Category
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
                                  <label htmlFor=""> Name </label> <br />
                                  <input
                                    type="text"
                                    className="mb-2"
                                    onChange={handleEditName}
                                  />{" "}
                                  <br />
                                  <label htmlFor=""> Image Url </label> <br />
                                  <input
                                    type="text"
                                    className="mb-2 w-75"
                                    onChange={handleEditImage}
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
                          onClick={() => handleDelete(item.id)}
                          className="btn btn-danger btn-sm"
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
          <hr />
        </div>
      </div>
    </>
  );
};

export default CategoryAdmin;
