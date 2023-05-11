import React, { useEffect, useState } from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import axios from "axios";

const AllUserAdmin = () => {
  const baseUrl = "https://travel-journal-api-bootcamp.do.dibimbing.id";
  const isLogin = JSON.parse(localStorage.getItem("token"));
  const account = JSON.parse(localStorage.getItem("account"));

  const [user, setUser] = useState([]);
  const [role, setRole] = useState([]);

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
                        {/* {item.id} */}

                        <select id="">
                          <option value="user">user</option>
                          <option value="admin">admin</option>
                        </select>
                      </td>
                      <td>
                        <div>
                          {/* Button trigger modal */}
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target={`#user${item.id}`}
                          >
                            Launch demo modal
                          </button>
                          {/* Modal */}
                          <div
                            className="modal fade"
                            id={`user${item.id}`}
                            tabIndex={-1}
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h1
                                    className="modal-title fs-5"
                                    id="exampleModalLabel"
                                  >
                                    Modal title
                                  </h1>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  />
                                </div>
                                <div className="modal-body">
                                  {item.name}
                                  <p>{item.id}</p>
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    Close
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                  >
                                    Save changes
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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
