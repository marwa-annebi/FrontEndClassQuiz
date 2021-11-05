import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col ,Alert} from "react-bootstrap";
import { FormContainer } from "../../components";
import axios from "axios";
import { useHistory } from "react-router";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import "./Inscription.css";

function FormPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const history = useHistory();

  const login = async () => {
    const data = { email, password };
    try {
      localStorage.clear();
      setIsLoading(true);
      await axios
        .post("http://localhost:3000/Auth/login", data)
        .then((response) => {
          console.log(response);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("isAdmin", response.data.isAdmin);
          localStorage.setItem("id", response.data.id);
          localStorage.setItem("name", response.data.name);
          if (response.data.isAdmin) history.push("/");
          else history.push("/");

          window.location.reload();
        });
      setIsLoading(false);
    } catch (error) {
      console.log(error.response.data.msg);
      setMessageError(error.response.data.msg);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const clearStorage = () => {
      return localStorage.clear();
    };
    clearStorage();
  }, []);

  return (
    <Row>
      <Col style={{ float: "left" }}>
        <img
          src="icon.png"
          className="App-logo"
          alt="logo"
          style={{
            animation: "App-logo-spin infinite 20s linear",
            height: "40vmin",
            pointerEvents: "none",
            width: "300px",
            height: "300px",
            padding: "60px",
          }}
        />
      </Col>

      <MDBContainer className="body" style={{ marginTop: "-250px" }}>
        <MDBRow>
          <MDBCol md="6">
            {messageError != false && <Alert variant ="danger">{messageError}</Alert>}
            <form style={{ fontFamily: "Harmattan", textAlign: "right" }}>
              <h2
                className="h2 text-center mb-2"
                style={{ color: "#8AE3FB", fontSize: "70px" }}
              >
                تسجيل الدخول
              </h2>
              <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                البريد الإلكتروني
              </label>
              <input
                required
                type="email"
                id="defaultFormRegisterEmailEx"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
              />
              <br />
              <label
                htmlFor="defaultFormRegisterConfirmEx"
                className="grey-text"
              >
                كلمه السر
              </label>
              <input
                required
                type="password"
                id="defaultFormRegisterConfirmEx"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your Password"
              />

              <div className="text-center mt-4">
                <Button className="btn3" onClick={() => login()}>
                  تسجيل الدخول
                </Button>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Row>
  );
}
export default FormPage;
