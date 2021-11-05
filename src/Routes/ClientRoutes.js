import React from "react";
import { Route } from "react-router-dom";
import { FormPage } from "../screens";
import Inscription from "./../screens/Auth/Inscription";
import Content from "./../components/Content";
import Annonce from "../screens/Client/Annonce";

function ClientRoutes() {
  return (
    <>
      <Route path="/" component={Content} exact />
      <Route path="/Annonce" component={Annonce} exact />
      <Route path="/Inscription" component={Inscription} exact />
      <Route path="/login" component={FormPage} exact />
    </>
  );
}

export default ClientRoutes;
