import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {Alert,Spinner } from "react-bootstrap";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
const AddUser = () => {
  const [userList, setuserList] = useState([]);
  const [isMailSend,setIsMailSend] = useState(false);
  const [loading , setLoading] = useState(false)
  let history = useHistory();
  const [user, setUser] = useState({
  
    name: "",
    email: "",
    password: "",
    age :"",
  });

  const {name, email, password,age } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await axios.get("http://localhost:3000/UserDB/users/read");
    console.log(result.data.reverse());
    setuserList(result.data.reverse());

   /* var found = false;
    for (var i = 0; i < result.data.length; i++) {/read
      if (result.data[i].matricule == user.matricule) {
        found = true;
        break;
      }
    }
   if (found == true) {
      return alert("matricule already exit");
    } else {*/
      try {
        await axios.post("http://localhost:3000/create", user)
          .then((res)=> {
            setLoading(false);
         
            console.log("user added sucessfuly")
            history.push("/");

          })
      } catch (error) {
        console.log({error});
        setLoading(false)
      }
    
  };

  return (
    <div className="container">
  
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <Form onSubmit={(e) => onSubmit(e)}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" onChange={(e) => onInputChange(e)} value={name} required=" name is required." />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" onChange={(e) => onInputChange(e)} value={email} required="Email is required." />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" onChange={(e) => onInputChange(e)} value={password}   required="Password is required." />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Age</Label>
          <Input type="text" name="age" id="age" onChange={(e) => onInputChange(e)} value={age}  required="Age is required."/>
        </FormGroup>
        {loading ? (
            <button variant="primary" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </button>
          ) : (
        <Button>Submit</Button>)}
      </Form>
      </div>
    </div>
  );
};

export default AddUser;