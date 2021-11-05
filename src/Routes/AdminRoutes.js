import React from "react";
import { Container } from "react-bootstrap";
import {
  AddUser,
  EditUser,
  FormPage,
  Inscription,
  Annonces,
  EditAnnonce,
  AddAnnonce,
   Users
} from "../screens"
import { Route } from "react-router-dom";
import Content from './../components/Content';


function AdminRoutes() {
    return (
        <>
        <Route exact path="/" component={Content} />
        <Route exact path="/CrudUser" component={Users} />
        <Route exact path="/CrudAnnonce" component={Annonces} />
        <Route path="/CrudUser/add" component={AddUser} />
        <Route exact path="/CrudUser/edit/:id" component={EditUser} />
        <Route path="/login" component={FormPage} exact />
        <Route path="/Inscription" component={Inscription} exact />
        <Route path="/CrudAnnonce/AddAnnonce" component={AddAnnonce} />
        <Route exact path="/CrudAnnonce/edit/:id" component={EditAnnonce} />
       </>   
    )
}

export default AdminRoutes