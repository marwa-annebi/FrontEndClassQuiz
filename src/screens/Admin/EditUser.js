import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { Checkbox } from "react-bootstrap";
import moment from "moment";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Style.css";
const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [isAdmin, setIsAdmin] = useState();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();

  /*const [user, setUser] = useState({
    name: "",
    lastname: "",
    dateDemarrage: "",
    isAdmin: admin,
  });
 // const { name, lastname, dateDemarrage, admin } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }*/

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/UserDB/users/update/${id}`, {
      name,
      email,
      age,
      isAdmin,
    });
    history.push("/CrudUser");
  };
  const loadUser = async () => {
    await axios
      .get(`http://localhost:3000/UserDB/users/get/${id}`)
      .then((result) => {
        console.log(result);
        setName(result.data.name);
        setEmail(result.data.email);
        setAge(result.data.age);
        setIsAdmin(result.data.isAdmin);
      });
  };
  /*   let history = useHistory();
  const { id } = useParams();
  const [role,setAdmin] = useState(false);
  const [newUser, setUser] = useState({
    name: "",
    email: "",
    age :"",
    isAdmin: "",
  });
  const { name, email, password,age, isAdmin } = newUser;
  const onInputChange = (e) => {
    setUser({ ...newUser, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/UserDB/users/update/${id}`, newUser);
    history.push("/CrudUser");
  };
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3000/UserDB/users/get/${id}`);
    console.log(newUser.data);
    setUser(result.data);
    setAdmin(result.data.isAdmin)
  };

  const handleChange = e => {
    setAdmin(!role);
    setUser({ ...newUser, [e.target.name]: e.target.value });
 }; 

 */
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text1">Edit A User</h2>

        <div className="form-wrapper">
          <form onSubmit={(e) => onSubmit(e)}>
            <Form.Group controlId="Fullname">
              <Form.Label> Name :</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="Email">
              <Form.Label>Email :</Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Form.Group>

            <Form.Group controlId="age">
              <Form.Label>Age :</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setAge(e.target.value)}
                value={age}
              />
            </Form.Group>

            <Form.Group>
            <input type="checkbox" id="isAdmin" checked={isAdmin} onClick={()=> setIsAdmin(!isAdmin)} />


              <label for="isAdmin">Is Admin </label>
            </Form.Group>
            <br />
            <button className="btn4" block="block" type="submit">
              Save
            </button>
            <Link to={"/"} className="btn-cancel ">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
