import React, { useState } from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import axios from "axios";

const UpdateProfileAdmin = () => {
  const baseUrl = "https://travel-journal-api-bootcamp.do.dibimbing.id";
  const isLogin = JSON.parse(localStorage.getItem("token"));
  const account = JSON.parse(localStorage.getItem("account"));

  const [name, setName] = useState(account.name);
  const [email, setEmail] = useState(account.email);
  const [phone, setPhone] = useState(account.phoneNumber);
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState();

  const handleEditName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleEditEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleEditPhone = (e) => {
    console.log(e.target.value);
    setPhone(e.target.value);
  };

  const handleEditImage = (e) => {
    console.log(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    let defaultImageUrl = account.profilePictureUrl;

    if (image) {
      const formData = new FormData();
      formData.append("image", image);

      // api upload image
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
    }
    // api edit profile
    await axios
      .post(
        `${baseUrl}/api/v1/update-profile`,
        {
          name: name,
          email: email,
          profilePictureUrl: defaultImageUrl,
          phoneNumber: phone,
        },
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer ${isLogin}`,
          },
        }
      )
      .then(function (response) {
        console.log(response);
        alert("update profile sukses");
        axios
          .get(`${baseUrl}/api/v1/user`, {
            headers: {
              apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
              Authorization: `Bearer ${isLogin}`,
            },
          })
          .then(function (response) {
            console.log(response);
            localStorage.setItem("account", JSON.stringify(response.data.data));
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

  return (
    <>
      <NavbarAdmin />
      <div className="update-profile-admin">
        <div className="container">
          <h4>
            {" "}
            <img
              src="./img/update.png"
              alt=""
              className="me-2 img-preview"
            />{" "}
            Update Profile{" "}
          </h4>
          <hr />
          <div className="update-box">
            <div className="update-box1 text-center">
              <div className="card    ">
                <img
                  src={account.profilePictureUrl}
                  className="card-img-top mx-auto"
                  alt="..."
                />
                <h4 className="mt-4"> {account.name} </h4>
                <p className="my-0">
                  {" "}
                  <i className="fa-solid fa-envelope me-2"></i> {account.email}{" "}
                </p>
                <p className="my-0">
                  {" "}
                  <i className="fa-solid fa-phone me-2"></i>{" "}
                  {account.phoneNumber}{" "}
                </p>
                <p className="mt-0 mb-4">
                  {" "}
                  <i className="fa-solid fa-user me-2"></i> {account.role}{" "}
                  account
                </p>

                <div className="card-body text-start">
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      {" "}
                      <label htmlFor="" className="mb-1">
                        {" "}
                        Name{" "}
                      </label>
                    </div>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="w-75 form-control"
                        onChange={handleEditName}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-sm-3">
                      {" "}
                      <label htmlFor="" className="mb-1">
                        {" "}
                        Email{" "}
                      </label>
                    </div>
                    <div className="col-sm-9">
                      <input
                        type="email "
                        className="w-100 form-control"
                        onChange={handleEditEmail}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-sm-3">
                      {" "}
                      <label htmlFor="" className="mb-1">
                        {" "}
                        Phone{" "}
                      </label>
                    </div>
                    <div className="col-sm-9">
                      <input
                        type="number"
                        className="w-100 form-control"
                        onChange={handleEditPhone}
                      />
                    </div>
                  </div>

                  <div className="row mb-0">
                    <div className="col-sm-3">
                      {" "}
                      <label htmlFor=""> Image </label>
                    </div>
                    <div className="col-sm-9">
                      {/* image preview */}
                      {imagePreview ? (
                        <img src={imagePreview} className="mb-2"></img>
                      ) : (
                        <p> choose your image</p>
                      )}

                      <input
                        type="file"
                        accept="image/*"
                        className="w-100 "
                        onChange={handleEditImage}
                      />
                    </div>
                  </div>

                  <br />

                  <button
                    className="btn btn-success my-0 button-54"
                    onClick={handleSubmit}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfileAdmin;
