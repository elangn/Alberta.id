import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Category from "../components/Category";
import Popular from "../components/Popular";

const Explore = () => {
  return (
    <>
      <Navbar />

      <Popular />
      <Category />

      <Footer />
    </>
  );
};

export default Explore;
