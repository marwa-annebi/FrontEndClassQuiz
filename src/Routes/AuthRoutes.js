import React from "react";
import { Container } from "react-bootstrap";
import { FormPage, Inscription } from "../screens";
import { Route } from "react-router-dom";

function AuthRoutes() {
  return (
    <Container>
      <Route path="/login" component={FormPage} exact />
      <Route path="/Inscription" component={Inscription} exact />
    </Container>
  );
}

export default AuthRoutes;