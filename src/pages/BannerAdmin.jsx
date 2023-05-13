import React, { useEffect, useState } from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import axios from "axios";

const BannerAdmin = () => {
  const baseUrl = "https://travel-journal-api-bootcamp.do.dibimbing.id";
  const isLogin = JSON.parse(localStorage.getItem("token"));
  const account = JSON.parse(localStorage.getItem("account"));

  const [banner, setBanner] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/banners`, {
        headers: {
          apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
        },
      })
      .then(function (response) {
        console.log(response.data.data);
        setBanner(response.data.data);
      });
  }, []);

  const handleDelete = (bannerId) => {
    axios
      .delete(`${baseUrl}/api/v1/delete-banner/${bannerId}`, {
        headers: {
          apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          Authorization: `Bearer ${isLogin}`,
        },
      })
      .then(function (response) {
        console.log(response);
        alert("promo berhasil dihapus");
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
  };

  return (
    <>
      <NavbarAdmin />
      <div className="banner-admin">
        <div className="container">
          <h4>
            <img src="./img/advertisement.png" alt="" /> Manage Banner
          </h4>
          <hr />
          <div className="banner-admin-box">
            <table className="table">
              <thead>
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

export default BannerAdmin;
