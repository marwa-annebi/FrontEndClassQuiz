import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {Alert,Spinner } from "react-bootstrap";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const AddAnnonce = () => {
  const [userList, setannonceList] = useState([]);
  const [loading , setLoading] = useState(false)
  let history = useHistory();
  const [newAnnonce, setAnnonce] = useState({
  
    titre: "",
    description: "",
    Date: "",

  });

  const {titre, description, date } = newAnnonce;
  const onInputChange = (e) => {
    setAnnonce({ ...newAnnonce, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await axios.get("http://localhost:3000/UserDB/annonces/Read");
    console.log(result.data.reverse());
    setannonceList(result.data.reverse());

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
        await axios.post("http://localhost:3000/UserDB/annonces/Create", newAnnonce)
          .then((res)=> {
            setLoading(true);
            console.log("Annonce added sucessfuly")
            history.push("/CrudAnnonce");

          })
      } catch (error) {
        console.log({error});
        setLoading(false)
      }
    
  };

  return (
    <div className="container" >
  
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text1">Add Annonce</h2>
        <Form onSubmit={(e) => onSubmit(e)}>
        <FormGroup >
          <Label for="name" >Titre</Label>
          <Input type="text" name="titre" id="name" onChange={(e) => onInputChange(e)} value={titre}  />
        </FormGroup>
        <FormGroup>
          <Label for="desc">Description</Label>
          <textarea rows="4" cols="50" name="description" form="usrform" value={description} onChange={(e) => onInputChange(e)}></textarea>
        </FormGroup>
        <FormGroup>
          <Label for="date">Date</Label>
          <Input type="date" name="Date" id="password" onChange={(e) => onInputChange(e)} value={date}  />
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
        <Button className="btn4">Submit</Button>)}
      </Form>
      </div>
    </div>
  );
};

export default AddAnnonce;