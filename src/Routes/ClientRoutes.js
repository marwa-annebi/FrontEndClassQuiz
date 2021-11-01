import React from "react";
import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";
import { FormPage } from "../screens";
import Inscription from './../screens/Auth/Inscription';

function ClientRoutes() {
  return (
    <Container>
     
      <Route path="/Inscription" component={Inscription} exact />
      <Route path="/login" component={FormPage} exact />
    </Container>
  );
}

export default ClientRoutes;