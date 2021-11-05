import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Style.css";
import * as FaUserEdi from "react-icons";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import HeaderAdmin from "./../../components/Header/HeaderAdmin";

const Users = () => {
  const [userList, setuserList] = useState([]);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3000/UserDB/users/read");
    setuserList(result.data.reverse());
  };
  useEffect(
    () => {
      loadUsers();
    },
    [],
    [userList]
  );

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3000/UserDB/users/delete/${id}`);
    loadUsers();
  };

  return (
    <>
      <div class="container-xl">
        <div class="table-responsive">
          <div class="table-wrapper">
            <div class="table-title">
              <div class="row">
                <div class="col-sm-5">
                  <h2>
                    Crud <b>Users</b>
                  </h2>
                </div>
                <div class="col-sm-7">
                  <a href="/CrudUser/add" class="btn btn-secondary">
                    {" "}
                    <i class="material-icons">&#xE147;</i>{" "}
                    <span>Add New User</span>
                  </a>
                </div>
              </div>
            </div>
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th> Name</th>
                  <th> Email</th>
                  <th>Password</th>
                  <th>Age</th>

                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {userList.map((user, id) => (
                  <tr key={id}>
                    {/* <td>
                    <span class="custom-checkbox">
                        <input type="checkbox" id="checkbox3" name="options[]" value="1">
                        <label for="checkbox3"></label></span>
                          </td> */}
                    <td>{id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.age}</td>

                    <td>
                      <Link
                        class="edit"
                        data-toggle="modal"
                        to={`/CrudUser/edit/${user._id}`}
                      >
                        <i
                          class="material-icons"
                          data-toggle="tooltip"
                          title="Edit"
                        >
                          &#xE254;
                        </i>
                      </Link>
                      <Link
                    onClick={() => deleteUser(user._id)}
                        class="delete"
                        data-toggle="modal"
                      >
                        <i
                          class="material-icons"
                          data-toggle="tooltip"
                          title="Delete"
                        >
                          &#xE872;
                        </i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default Users;
