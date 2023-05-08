import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useFormik } from "formik";
import * as Yup from "yup";

const Register = () => {
  const baseUrl = "https://travel-journal-api-bootcamp.do.dibimbing.id";
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
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
                <form onSubmit={formik.handleSubmit}>
                  <label htmlFor="email">Email </label>
                  <br />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  <br />

                  <label htmlFor="name">Name</label>
                  <br />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                  <br />

                  <label htmlFor="password">Password</label>
                  <br />
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  <br />

                  <label htmlFor="repeatPassword">Repeat Password</label>
                  <br />
                  <input
                    id="repeatPassword"
                    name="repeatPassword"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.repeatPassword}
                  />
                  <br />

                  <label htmlFor="phoneNumber">Phone Number</label>
                  <br />
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.phoneNumber}
                  />
                  <br />

                  <label htmlFor="profilePicture">Profile Picture</label>
                  <br />
                  <input
                    id="profilePicture"
                    name="profilePicture"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.profilePicture}
                  />
                  <br />

                  <button type="submit">Submit</button>
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
