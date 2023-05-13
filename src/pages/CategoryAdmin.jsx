import React, { useEffect, useState } from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import axios from "axios";

const CategoryAdmin = () => {
  const baseUrl = "https://travel-journal-api-bootcamp.do.dibimbing.id";
  const account = JSON.parse(localStorage.getItem("account"));
  const isLogin = JSON.parse(localStorage.getItem("token"));

  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/categories`, {
        headers: {
          apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
        },
      })
      .then(function (response) {
        console.log(response);
        setCategory(response.data.data);
      })
      .catch(function (error) {
        console.log("error");
      });
  }, []);

  const handleDelete = (categoryId) => {
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
  };

  return (
    <>
      <NavbarAdmin />

      <div className="category-admin">
        <div className="container">
          <h4>
            {" "}
            <img src="./img/categories.png" alt="" className="me-2" /> Manage
            Category
          </h4>
          <hr />
          <div className="category-admin-box">
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
