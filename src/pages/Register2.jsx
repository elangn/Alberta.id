import React from "react";
import Navbar from "../components/Navbar";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

const Register2 = () => {
  const baseUrl = "https://travel-journal-api-bootcamp.do.dibimbing.id";
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      repeatPassword: "",
      role: "",
      phoneNumber: "",
      profilPicture: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      name: Yup.string()
        .min(5, "must be 5 character or more")
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      password: Yup.string()
        .min(6, "Must be 6 character or more")
        .required("Required"),
      repeatPassword: Yup.string()
        .min(6, "Must be 6 character or more")
        .required("Required"),
      phoneNumber: Yup.string()
        .min(10, "Must be 10 digit or more")
        .required("Required"),
      role: Yup.string()
        .max(10, "Must be 10 digit or more")
        .required("Required"),
      profilePicture: Yup.string(),
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));

      axios
        .post(
          `${baseUrl}/api/v1/register`,
          {
            email: values.email,
            name: values.name,
            password: values.password,
            passwordRepeat: values.repeatPassword,
            role: values.role,
            profilePictureUrl: values.profilPicture,
            phoneNumber: values.phoneNumber,
          },
          {
            headers: {
              apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            },
          }
        )
        .then(function (response) {
          // console.log(response);
          alert("sukes membuat akun");
          // window.location.reload();
          navigate("/login");
        })
        .catch(function (error) {
          alert("masih error cuy");
        });
    },
  });
  return (
    <>
      <Navbar />
      <div className="register2 ">
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

              <form action="" onSubmit={formik.handleSubmit}>
                <label htmlFor="name"> Name </label> <br />
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="input w-100 mb-3"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="err-msg my-0 text-danger">
                    {formik.errors.name}
                  </div>
                ) : null}{" "}
                <br />
                <label htmlFor="email"> Email </label> <br />
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="input w-100 mb-3"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />{" "}
                {formik.touched.email && formik.errors.email ? (
                  <div className="err-msg my-0 text-danger py-0">
                    {formik.errors.email}
                  </div>
                ) : null}
                <br />
                <label htmlFor="phoneNumber"> Phone Number</label> <br />
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  className="input w-100 mb-3"
                  onChange={formik.handleChange}
                  value={formik.values.phoneNumber}
                />{" "}
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                  <div className="err-msg my-0 text-danger">
                    {formik.errors.phoneNumber}
                  </div>
                ) : null}
                <label htmlFor="password"> Password</label> <br />
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  className="input w-100 mb-3"
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="err-msg my-0 text-danger">
                    {formik.errors.password}
                  </div>
                ) : null}{" "}
                <label htmlFor="repeatPassword"> Repeat Password </label> <br />
                <input
                  id="repeatPassword"
                  name="repeatPassword"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.repeatPassword}
                  className="input w-100 mb-3"
                />{" "}
                {formik.touched.repeatPassword &&
                formik.errors.repeatPassword ? (
                  <div className="err-msg my-0 text-danger">
                    {formik.errors.repeatPassword}
                  </div>
                ) : null}
                <br />
                <label htmlFor="role"> Role </label> <br />
                <select
                  id="role"
                  name="role"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.role}
                  className="form-select mb-3 "
                >
                  <option>-- select role -- </option>
                  <option value="user"> User</option>
                  <option value="admin"> Admin</option>
                </select>
                {formik.touched.role && formik.errors.role ? (
                  <div className="err-msg my-0 text-danger">
                    {formik.errors.role}
                  </div>
                ) : null}
                <label htmlFor="profilePicture"> Profile Picture </label> <br />
                <input
                  as="select"
                  id="profilePicture"
                  name="profilePicture"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.profilePicture}
                  className="input w-100 mb-4"
                />{" "}
                {formik.touched.profilePicture &&
                formik.errors.profilePicture ? (
                  <div className="err-msg text-danger">
                    {formik.errors.profilePicture}
                  </div>
                ) : null}
                <br />
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label
                    className="form-check-label text-secondary"
                    htmlFor="exampleCheck1"
                  >
                    By continuing, you agree to Alberta Term of use and Privacy
                    Policy
                  </label>
                </div>
                <button type="submit" className="btn fw-bold mb-3">
                  {" "}
                  Register{" "}
                </button>
              </form>

              <p>
                {" "}
                Already have an account ?{" "}
                <Link to={"/login2"} className="link">
                  {" "}
                  <span className="oek">Log in</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register2;
