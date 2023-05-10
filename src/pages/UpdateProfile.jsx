import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const UpdateProfile = () => {
  const isLogin = JSON.parse(localStorage.getItem("token"));
  const account = JSON.parse(localStorage.getItem("account"));
  const baseUrl = "https://travel-journal-api-bootcamp.do.dibimbing.id";

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      profilePictureUrl: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().max(15, "Must be 15 characters or less"),
      profilePictureUrl: Yup.string().min(5, "Must be 5 characters or more"),
      email: Yup.string().email("Invalid email address"),
      phoneNumber: Yup.string().max(15, "Must be 15 characters or less"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));

      axios
        .post(
          `${baseUrl}/api/v1/update-profile`,
          {
            name: values.name,
            email: values.email,
            profilePictureUrl: values.profilePictureUrl,
            phoneNumber: values.phoneNumber,
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
          // localStorage.removeItem("account");
          // localStorage.setItem("account", JSON.stringify(response));
          // localStorage.getItem("account");
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  });

  return (
    <>
      <Navbar />
      <div className="update-profile">
        <div className="container">
          <div className="update-profile-box">
            <h5 className="mt-4"> Update Profile </h5>
            <div className="row">
              <div className="kiri col-sm-2">
                <ul>
                  <li>
                    <a href=""> Edit </a>
                  </li>
                </ul>
              </div>

              <div className="kanan col-sm-10">
                <div className="card">
                  <div className="card-body">
                    <p className="card-text fw-bold">Profile Picture</p>
                    <div className="row">
                      <div className="col-sm-3">
                        <img src={account.profilePictureUrl} alt="" />
                      </div>

                      <div className="col-sm-9">
                        <p className=" fw-bold my-0 nama"> {account.name}</p>
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

                    <h4 className="mt-4"> Edit Profile</h4>

                    <form onSubmit={formik.handleSubmit}>
                      <div className="row mb-3">
                        <div className="col-sm-4">
                          <label htmlFor="name"> Name</label>
                        </div>

                        <div className="col-sm-8">
                          <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            className="w-100"
                          />

                          {formik.touched.name && formik.errors.name ? (
                            <div>{formik.errors.name}</div>
                          ) : null}
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-sm-4">
                          <label htmlFor="email">Email </label>
                        </div>

                        <div className="col-sm-8">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            className="w-100"
                          />

                          {formik.touched.email && formik.errors.email ? (
                            <div>{formik.errors.email}</div>
                          ) : null}
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-sm-4">
                          <label htmlFor="profilePictureUrl">
                            Profile Picture
                          </label>
                        </div>

                        <div className="col-sm-8">
                          <input
                            id="profilePictureUrl"
                            name="profilePictureUrl"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.profilePictureUrl}
                            className="w-100"
                          />
                          {formik.touched.profilePictureUrl &&
                          formik.errors.profilePictureUrl ? (
                            <div>{formik.errors.profilePictureUrl}</div>
                          ) : null}
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-sm-4">
                          <label htmlFor="phoneNumber">Phone Number</label>
                        </div>

                        <div className="col-sm-8">
                          <input
                            id="phoneNumber"
                            name="phoneNumber"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.phoneNumber}
                            className="w-100"
                          />
                          {formik.touched.phoneNumber &&
                          formik.errors.phoneNumber ? (
                            <div>{formik.errors.phoneNumber}</div>
                          ) : null}
                        </div>
                      </div>

                      <button type="submit" className="btn btn-success mt-4">
                        Submit
                      </button>
                    </form>
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
