import React from "react";
import { Container } from "react-bootstrap";
import { FormPage, Inscription } from "../screens";
import { Route } from "react-router-dom";
import Content from "./../components/Content";
function AuthRoutes() {
  return (
    <>
      <Route path="/" component={Content} exact />
      <Route path="/login" component={FormPage} exact />
      <Route path="/Inscription" component={Inscription} exact />
    </>
  );
}

export default AuthRoutes;
