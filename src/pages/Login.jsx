import React from "react";
import { useFormik } from "formik";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";

const Login = () => {
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
      <div className="login">
        <div className="container ">
          <div className="login-box">
            <div className="card " style={{ width: "300px" }}>
              <div className="card-body ">
                <h3 className="text-center mb-4"> Login</h3>

                <form onSubmit={formik.handleSubmit}>
                  <label htmlFor="email" className="mb-1 form-label">
                    Email
                  </label>

                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>

                  {formik.touched.email && formik.errors.email ? (
                    <div className="error-msg my-0 ">{formik.errors.email}</div>
                  ) : null}

                  <label htmlFor="password" className="mb-1 text-bold">
                    Password{" "}
                  </label>

                  <div className="input-group mb-4">
                    <span className="input-group-text " id="basic-addon1">
                      <i className="fa-solid fa-lock"></i>
                    </span>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>

                  {formik.touched.password && formik.errors.password ? (
                    <div className="error-msg my-0">
                      {formik.errors.password}
                    </div>
                  ) : null}

                  <div className=" form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Remember Me
                    </label>
                  </div>

                  <button type="submit" className="btn btn-success mt-4">
                    Login
                  </button>

                  <p>
                    Don't have an account ?{" "}
                    <Link to={"/register"}> Register</Link> here
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
