import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useFormik } from "formik";

const UpdateProfile = () => {
  const isLogin = JSON.parse(localStorage.getItem("token"));
  const account = JSON.parse(localStorage.getItem("account"));
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
                        <p className=" fw-bold my-0"> {account.name}</p>
                        <p className="my-0">
                          <i className="fa-solid fa-envelope me-2"></i>
                          {account.email}
                        </p>
                        <p>
                          <i className="fa-solid fa-phone me-2"></i>{" "}
                          {account.phoneNumber}
                        </p>
                      </div>
                    </div>

                    <h4 className="mt-4"> Edit Profile</h4>

                    <div className="row mb-3">
                      <div className="col-sm-4">Name</div>
                      <div className="col-sm-8">
                        <input type="text" />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-sm-4">Email</div>
                      <div className="col-sm-8">
                        <input type="text" />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-sm-4">Phone Number</div>
                      <div className="col-sm-8">
                        <input type="text" />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-sm-4">Photo Profile</div>
                      <div className="col-sm-8">
                        <input type="text" />
                      </div>
                    </div>
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
