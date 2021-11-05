import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { Checkbox } from "react-bootstrap";
import moment from "moment";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
import './Style.css'
const EditUser = () => {

  let history = useHistory();
  const { id } = useParams();
  const [newAnnonce, setAnnonce] = useState({
    titre: "",
    description: "",
    Date: "",
   
  });
  const { titre, description, Date} = newAnnonce;
  const onInputChange = (e) => {
    setAnnonce({ ...newAnnonce, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/UserDB/annonces/update/${id}`, newAnnonce);
    history.push("/CrudAnnonce");
  };
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3000/UserDB/annonces/get/${id}`);
    console.log(newAnnonce.data);
    setAnnonce(result.data);
  };



  return (
    <div className="container" >
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text1" >Edit Annonce</h2>
  
        <div className="form-wrapper">
        <form onSubmit={(e) => onSubmit(e)}>
                    <Form.Group controlId="titre">
                        <Form.Label> Titre :</Form.Label>
                        <Form.Control type="text" onChange={(e) => onInputChange(e)}  value={titre}  />
                    </Form.Group>

                    <Form.Group controlId="Email">
                        <Form.Label>Description :</Form.Label>
                      <textarea rows="4" cols="50" name="description" form="usrform" value={description} onChange={(e) => onInputChange(e)}></textarea>
        
                    </Form.Group>

    

                    <Form.Group controlId="Date">
                        <Form.Label>Date :</Form.Label>
                        <Form.Control type="date" onChange={(e) => onInputChange(e)} value={Date} />
                    </Form.Group>
             
<br/>
                    <Button className="btn4"  block="block" type="submit">Save</Button>
                    <Link to={"/"} className="btn-cancel ">Cancel</Link>
         
           </form>
      </div>
    </div>
    </div>
  );
};

export default EditUser;