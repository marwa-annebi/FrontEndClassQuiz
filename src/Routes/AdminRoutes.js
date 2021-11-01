import React from "react";
import { Container } from "react-bootstrap";
import {
  AddUser,
  EditUser,
  FormPage,
  Inscription,
   users
} from "../screens";
import { Route } from "react-router-dom";
function AdminRoutes() {
    return (
        <Container>
        <Route exact path="/users" component={users} />
        <Route path="/users/add" component={AddUser} />
        <Route exact path="/users/edit/:id" component={EditUser} />
        <Route path="/login" component={FormPage} exact />
        <Route path="/Inscription" component={Inscription} exact />
       </Container>   
    )
}

export default AdminRoutes