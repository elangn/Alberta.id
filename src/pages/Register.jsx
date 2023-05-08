import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Register = () => {
  const baseUrl = "https://travel-journal-api-bootcamp.do.dibimbing.id";
  return (
    <>
      <Navbar />
      <div className="register">
        <div className="container">
          <div className="register-box"></div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Register;
