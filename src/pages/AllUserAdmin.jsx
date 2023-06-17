import React, { useEffect, useState } from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import axios from "axios";

const AllUserAdmin = () => {
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
        // console.log(response.data.data);
        setUser(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleChange = (userId, newRole) => {
    // console.log(e.target.value);

    axios
      .post(
        `${baseUrl}/api/v1/update-user-role/${userId}`,
        {
          role: newRole,
        },
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer ${isLogin}`,
          },
        }
      )
      .then(function (response) {
        console.log(response);
        alert("role berhasil diubah");
        axios
          .get(`${baseUrl}/api/v1/all-user`, {
            headers: {
              apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
              Authorization: `Bearer ${isLogin}`,
            },
          })
          .then(function (response) {
            // console.log(response.data.data);
            setUser(response.data.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <NavbarAdmin />
      <div className="all-user-admin">
        <div className="container">
          <h4>
            {" "}
            <img src="./img/users.png" alt="" className="me-2" /> Manage User
          </h4>
          <hr />

          <div className="all-user-box">
            <table className="table table-striped">
              <thead className="table-dark ">
                <tr>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col">Edit Role</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {user.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <p className="my-0"> {item.name}</p>
                      </td>
                      <td>
                        <p className="my-0"> {item.email}</p>
                      </td>
                      <td>{item.role}</td>

                      <td>
                        <select
                          value={item.role}
                          onChange={(e) =>
                            handleChange(item.id, e.target.value)
                          }
                        >
                          {/* <option value=""> -- pilih role -- </option> */}
                          <option value="">-- select role -- </option>
                          <option value="user">user</option>
                          <option value="admin">admin</option>
                        </select>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllUserAdmin;
