import React, { useEffect, useState } from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import axios from "axios";
import { useFormik } from "formik";

const AllUserAdmin = () => {
  const baseUrl = "https://travel-journal-api-bootcamp.do.dibimbing.id";
  const isLogin = JSON.parse(localStorage.getItem("token"));
  const account = JSON.parse(localStorage.getItem("account"));

  const [user, setUser] = useState([]);

  const formik = useFormik({
    initialValues: {
      role: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      axios
        .post(`${baseUrl}//api/v1/update-user-role/{{USER_ID}}`, {
          role: values.role,
        })
        .then(function (response) {
          console.log(response);
          alert("sukses merubah role");
          window.location.reload();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  });

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
                        <form onSubmit={formik.handleSubmit}>
                          {/* <label htmlFor="role">Edit Role</label> */}

                          <select
                            id="role"
                            name="role"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.role}
                          >
                            <option value="user">user</option>
                            <option value="admin">admin</option>
                          </select>

                          <button
                            type="submit"
                            className="btn btn-success ms-2"
                          >
                            {item.name}
                          </button>
                        </form>
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
