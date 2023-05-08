import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Category from "../components/Category";
import Popular from "../components/Popular";
import Activity from "../components/Activity";

const Explore = () => {
  return (
    <>
      <Navbar />

      <Popular />
      <Category />

      <Activity />

      <Footer />
    </>
  );
};

export default Explore;
