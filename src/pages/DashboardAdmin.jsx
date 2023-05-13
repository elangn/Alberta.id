import React from "react";
import NavbarAdmin from "../components/NavbarAdmin";

const DashboardAdmin = () => {
  const account = JSON.parse(localStorage.getItem("account"));
  const isLogin = JSON.parse(localStorage.getItem("token"));

  return (
    <>
      <NavbarAdmin />

      <div className="dashboard-admin">
        <div className="container">
          <h4>
            <img src="./img/dashboard.png" alt="" /> DASHBOARD{" "}
          </h4>
          <hr />
          <div className="dashboard-admin-box ">
            <img src={account.profilePictureUrl} alt="" />
            <p> Hi, admin {account.name}</p>
            <p> Selamat datang kembali di Sys Admin Alberta.id</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardAdmin;
