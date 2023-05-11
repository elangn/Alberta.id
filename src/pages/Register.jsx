import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
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
      <div className="register">
        <div className="container">
          <div className="register-box ">
            <div className="card" style={{ width: "500px" }}>
              <div className="card-body">
                <h4 className="fw-bold text-center mb-4"> REGISTER</h4>
                <form onSubmit={formik.handleSubmit}>
                  <div className="card-body-flex">
                    <div className="card-body1">
                      <label htmlFor="email">Email </label>
                      <br />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className="mb-2"
                      />

                      {formik.touched.email && formik.errors.email ? (
                        <div className="err-msg">{formik.errors.email}</div>
                      ) : null}
                      <br />

                      <label htmlFor="name">Name</label>
                      <br />
                      <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        className="mb-2"
                      />

                      {formik.touched.name && formik.errors.name ? (
                        <div className="err-msg">{formik.errors.name}</div>
                      ) : null}
                      <br />

                      <label htmlFor="phoneNumber">Phone Number</label>
                      <br />
                      <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.phoneNumber}
                        className="mb-2"
                      />

                      {formik.touched.phoneNumber &&
                      formik.errors.phoneNumber ? (
                        <div className="err-msg">
                          {formik.errors.phoneNumber}
                        </div>
                      ) : null}

                      <br />
                    </div>

                    <div className="card-body2">
                      <label htmlFor="password">Password</label>
                      <br />
                      <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        className="mb-2"
                      />

                      {formik.touched.password && formik.errors.password ? (
                        <div className="err-msg">{formik.errors.password}</div>
                      ) : null}

                      <br />
                      <label htmlFor="repeatPassword">Repeat Password</label>
                      <br />
                      <input
                        id="repeatPassword"
                        name="repeatPassword"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.repeatPassword}
                        className="mb-2"
                      />

                      {formik.touched.repeatPassword &&
                      formik.errors.repeatPassword ? (
                        <div className="err-msg">
                          {formik.errors.repeatPassword}
                        </div>
                      ) : null}

                      <br />

                      <label htmlFor="role">Role</label>
                      <br />
                      {/* <input
                        id="role"
                        name="role"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.role}
                        className="mb-2"
                      /> */}

                      {/* coba */}
                      <select
                        id="role"
                        name="role"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.role}
                        className="mb-2"
                      >
                        <option value="user">user</option>
                        <option value="admin">admin</option>
                      </select>

                      {formik.touched.role && formik.errors.role ? (
                        <div className="err-msg">{formik.errors.role}</div>
                      ) : null}

                      <br />
                    </div>
                  </div>

                  <label htmlFor="profilePicture">Profile Picture</label>
                  <br />
                  <input
                    as="select"
                    id="profilePicture"
                    name="profilePicture"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.profilePicture}
                    className="mb-4 w-100"
                  />

                  {formik.touched.profilePicture &&
                  formik.errors.profilePicture ? (
                    <div className="err-msg">
                      {formik.errors.profilePicture}
                    </div>
                  ) : null}

                  <br />

                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
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

export default Register;
