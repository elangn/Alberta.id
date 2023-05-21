import React from "react";
import Navbar from "../components/Navbar";

const Register2 = () => {
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

              <form action="">
                <label htmlFor=""> Name </label> <br />
                <input
                  type="text"
                  // placeholder="Username"
                  className="input w-100 mb-3"
                />{" "}
                <br />
                <label htmlFor=""> Email </label> <br />
                <input
                  type="email"
                  // placeholder="Email Address"
                  className="input w-100 mb-3"
                />{" "}
                <br />
                <label htmlFor=""> Phone </label> <br />
                <input
                  type="text"
                  // placeholder="Phone Number"
                  className="input w-100 mb-3"
                />{" "}
                <label htmlFor=""> Password</label> <br />
                <input
                  type="text"
                  // placeholder="Password"
                  className="input w-100 mb-3"
                />{" "}
                <label htmlFor=""> Repeat Password </label> <br />
                <input
                  type="text"
                  // placeholder="Repeat Password"
                  className="input w-100 mb-3"
                />{" "}
                <br />
                <label htmlFor=""> Role </label> <br />
                <select name="" id="" className="form-select mb-3 ">
                  <option value="">-- select role -- </option>
                  <option value=""> User</option>
                  <option value=""> Admin</option>
                </select>
                <label htmlFor=""> Image Url </label> <br />
                <input
                  type="text"
                  // placeholder="Username"
                  className="input w-100 mb-4"
                />{" "}
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
                <button className="btn fw-bold mb-3"> Register </button>
                <p>
                  {" "}
                  Already have an account ? <span className="oek">
                    {" "}
                    Log in
                  </span>{" "}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register2;
