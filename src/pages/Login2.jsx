import React from "react";
import Navbar from "../components/Navbar";

import { useFormik } from "formik";

import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";

const Login2 = () => {
  const baseUrl = "https://travel-journal-api-bootcamp.do.dibimbing.id";
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 character or more ")
        .max(15, " max 15 character password")
        .required("Required"),
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      axios
        .post(
          `${baseUrl}/api/v1/login`,
          {
            email: values.email,
            password: values.password,
          },
          {
            headers: {
              apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            },
          }
        )
        .then(function (response) {
          // console.log(response);
          localStorage.setItem("token", JSON.stringify(response.data.token));
          localStorage.setItem("account", JSON.stringify(response.data.data));
          const account = JSON.parse(localStorage.getItem("account"));
          // const account = JSON.parse(localStorage.getItem("account"));
          // navigate("/");

          if (account.role == "admin") {
            navigate("/dashboard");
          } else {
            navigate("/");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  });
  return (
    <>
      <Navbar />
      <div className="login2 ">
        <div className="row">
          <div className="kiri col-md">
            <img src="img/1.jpg" alt="" />{" "}
          </div>
          <div className="kanan  ">
            <div className="wrapper text-center">
              <h3>
                {" "}
                Alberta.<span>id</span>
              </h3>

              <h4 className="mb-4"> Create an account</h4>

              <form onSubmit={formik.handleSubmit} className="">
                <label htmlFor="email" className="mb-1 form-label">
                  Email
                </label>

                <div className="input-group mb-3">
                  <span className="" id="basic-addon1 ">
                    <i className="fa-solid fa-envelope text-secondary "></i>
                  </span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className="ms-2 w-75"
                    placeholder="Email Address"
                  />
                </div>

                {formik.touched.email && formik.errors.email ? (
                  <div className="error-msg my-0  py-0 text-danger">
                    {formik.errors.email}
                  </div>
                ) : null}

                <label htmlFor="password" className="mb-1 text-bold">
                  Password{" "}
                </label>

                <div className="input-group mb-4">
                  <span className=" " id="basic-addon1 ">
                    <i className="fa-solid fa-lock text-secondary"></i>
                  </span>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    className=" ms-2  w-75"
                    placeholder="Password"
                  />
                </div>

                {formik.touched.password && formik.errors.password ? (
                  <div className="error-msg my-0 py-0 text-danger">
                    {formik.errors.password}
                  </div>
                ) : null}

                <div className=" form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label
                    className="form-check-label text-secondary"
                    htmlFor="exampleCheck1"
                  >
                    Remember Me
                  </label>
                </div>

                <button type="submit" className="btn fw-bold mt-4 mb-4">
                  Login
                </button>
              </form>

              <p>
                {" "}
                Dont have an account ?{" "}
                <Link to={"/register2"} className="link">
                  {" "}
                  <span className="oek">Register</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login2;
