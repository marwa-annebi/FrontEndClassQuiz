import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AdminRoutes, ClientRoutes, AuthRoutes } from "./Routes/index";
import HeaderUser from "./components/Header/HeaderUser";
import HeaderAdmin from "./components/Header/HeaderAdmin";
import Header from "./components/Header/Header";
function App() {
  const [isAdmin, setIsAdmin] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState();

  const getUser = () => {
    let admin = JSON.parse(localStorage.getItem("isAdmin"));
    setIsAdmin(admin);
    setIsLoggedIn(localStorage.getItem("token"));
  };

  useEffect(() => {
    getUser();
    console.log(isAdmin);
  }, []);
  return (
    <Router>
      {isLoggedIn ? (
        isAdmin == true ? (
          <HeaderAdmin />
        ) : (
          <HeaderUser />
        )
      ) : (
        <Header />
      )}

      {isLoggedIn ? (
        isAdmin == true ? (
          <Switch>
            <AdminRoutes />
          </Switch>
        ) : (
          <Switch>
            <ClientRoutes />
          </Switch>
        )
      ) : (
        <AuthRoutes />
      )}
    </Router>
  );
}

export default App;
