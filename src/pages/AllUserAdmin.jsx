import React, { useEffect, useState } from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import axios from "axios";

const AllUserAdmin = () => {
  const baseUrl = "https://travel-journal-api-bootcamp.do.dibimbing.id";
  const isLogin = JSON.parse(localStorage.getItem("token"));
  const account = JSON.parse(localStorage.getItem("account"));

  const [user, setUser] = useState([]);
  const [roleCreate, setRoleCreate] = useState("");

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

  const handleChange = (e) => {
    console.log(e.target.value);
    setRoleCreate(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   console.log(roleCreate);
  //   // bikin di handle change

  //   axios
  //     .post(
  //       `${baseUrl}/api/v1/update-user-role/${userID}`,
  //       {
  //         role: roleCreate,
  //       },
  //       {
  //         headers: {
  //           apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
  //           Authorization: `Bearer ${isLogin}`,
  //         },
  //       }
  //     )
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  return (
    <>
      <NavbarAdmin />
      <div className="all-user-admin">
        <div className="container">
          <h4> Manage User</h4>
          <hr />

          <div className="all-user-box">
            <table className="table">
              <thead>
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
                          onChange={handleChange}
                          type="text"
                          id="role"
                          name="role"
                        >
                          <option value=""> -- pilih role -- </option>
                          <option value="user">user</option>
                          <option value="admin">admin</option>
                        </select>

                        {/* <button
                          onClick={handleSubmit}
                          className="btn btn-success btn-sm ms-2"
                          type="submit"
                          value="submit"
                        >
                          Submit
                        </button> */}
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
