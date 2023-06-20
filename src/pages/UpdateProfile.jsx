import { React, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const UpdateProfile = () => {
  const isLogin = JSON.parse(localStorage.getItem("token"));
  const account = JSON.parse(localStorage.getItem("account"));
  const baseUrl = "https://travel-journal-api-bootcamp.do.dibimbing.id";

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
      <Navbar />
      <div className="update-profile">
        <div className="container">
          <div className="update-profile-box">
            <h5 className="mt-4"> Update Profile </h5>

            <div className="row">
              <div className="kiri col-sm-2 my-2">
                <ul>
                  <li>
                    <i className="fa-solid fa-pen-to-square"></i>
                    <a href="" className="text-dark">
                      {" "}
                      Edit{" "}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="kanan col-sm-10">
                <div className="card">
                  <div className="card-body">
                    <p className="card-text fw-bold">Profile Picture</p>
                    <div className="row">
                      <div className="col-sm-3">
                        <img
                          src={account.profilePictureUrl}
                          alt=""
                          className="border me-4"
                        />
                      </div>

                      <div className="col-sm-9 ps-4">
                        <p className=" fw-bold mb-2 nama"> {account.name}</p>
                        <p className="my-0 detil">
                          <i className="fa-solid fa-envelope me-2"></i>
                          {account.email}
                        </p>
                        <p className="my-0 detil">
                          <i className="fa-solid fa-phone me-2"></i>{" "}
                          {account.phoneNumber}
                        </p>
                        <p className="my-0 detil">
                          <i className="fa-solid fa-user me-2"></i>
                          {account.role} account
                        </p>
                      </div>
                    </div>

                    <h4 className="mt-5 mb-4"> Edit Profile</h4>

                    <div className="row mb-3">
                      <div className="col-sm-4">
                        <label htmlFor="name" className="mb-1">
                          {" "}
                          Name
                        </label>
                      </div>

                      <div className="col-sm-8">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          onChange={handleEditName}
                          className="w-75 form-control "
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-sm-4">
                        <label htmlFor="email" className="mb-1">
                          Email{" "}
                        </label>
                      </div>

                      <div className="col-sm-8">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          onChange={handleEditEmail}
                          className="w-100 form-control"
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-sm-4">
                        <label htmlFor="phoneNumber" className="mb-1">
                          Phone Number
                        </label>
                      </div>

                      <div className="col-sm-8">
                        <input
                          id="phoneNumber"
                          name="phoneNumber"
                          type="text"
                          onChange={handleEditPhone}
                          className="w-100 form-control"
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-sm-4">
                        <label htmlFor="profilePictureUrl">
                          Profile Picture
                        </label>
                      </div>

                      <div className="col-sm-8">
                        {imagePreview ? (
                          <img src={imagePreview} className="mb-2"></img>
                        ) : (
                          <p> choose your image</p>
                        )}
                        <input
                          id="profilePictureUrl"
                          name="profilePictureUrl"
                          type="file"
                          accept="image/*"
                          onChange={handleEditImage}
                          className="w-100"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-success mt-4 button-54"
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
      </div>

      <Footer />
    </>
  );
};

export default UpdateProfile;
