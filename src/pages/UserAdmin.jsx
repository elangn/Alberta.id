import React, { useEffect, useState } from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import axios from "axios";

const UserAdmin = () => {
  const baseUrl = "https://travel-journal-api-bootcamp.do.dibimbing.id";
  const isLogin = JSON.parse(localStorage.getItem("token"));
  const account = JSON.parse(localStorage.getItem("account"));

  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/all-user`, {
        headers: {
          apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          Authorization: `Bearer ${isLogin}`,
        },
      })
      .then(function (response) {
        console.log(response.data.data);
        setUser(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <>
      <NavbarAdmin />
      <div className="user-admin">
        <div className="container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nisi
            repudiandae cumque. Molestias voluptas quaerat et hic sequi vero
            quisquam expedita, illum quos consequuntur tenetur amet autem
            officia dolor ullam.
          </p>

          {user.map((item, i) => {
            return (
              <div key={i}>
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UserAdmin;
