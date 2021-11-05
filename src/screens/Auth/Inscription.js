import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./Inscription.css";
import { LinkContainer } from "react-router-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import React, { useState } from "react";
import { Form, Button, Card, Spinner } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Message from "./../../components/Message";
const Inscription = () => {


  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [verifPassword, setVerifPassword] = useState();
  const [invalidLogin, setInvalidLogin] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  let history = useHistory();

  const onRegister = async () => 
  {
    try {
      setIsLoading(true);
      let isAdmin = false;
      const data = {
        name,
        email,
        password,
        verifPassword,
        age,
      };
      if (data.password.length < 7)
        <Message variant="danger">Invalid password</Message>;
      console.log(data);
      await axios
      .post("http://localhost:3000/Auth/Register", data)
      .then((res) => {
        setIsLoading(false);
        console.log(res.data);  
      });
      await axios.post("http://localhost:3000/api/sendmail",{email}).then((res)=>console.log(res))
    } catch (error) {
      setInvalidLogin(error.response.data.msg);
      console.log(error.response.data.msg);
      setIsLoading(true);
    }
  };

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
      <MDBContainer
        className="body"
        className="body"
        style={{ marginTop: "-300px" }}
      >
        <MDBRow>
          <MDBCol md="6">
            {invalidLogin && <Message variant="danger">{invalidLogin}</Message>}
            <form
              style={{ fontFamily: "Harmattan", textAlign: "right" }}
              onSubmit={() => onRegister()}
            >
              <h2
                className="h2 text-center mb-2"
                style={{ color: "#8AE3FB", fontSize: "70px" }}
              >
                اشتراك
              </h2>
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                اسم
              </label>
              <input
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="Enter Your Name"
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                البريد الإلكتروني
              </label>
              <input
                required
                type="email"
                id="defaultFormRegisterEmailEx"
                className="form-control"
                placeholder="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
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
                placeholder="Enter Your Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <label
                htmlFor="defaultFormRegisterPasswordEx"
                className="grey-text"
              >
                تأكيد كلمة المرور
              </label>
              <input
                required
                type="password"
                id="defaultFormRegisterPasswordEx"
                className="form-control"
                placeholder="Verify Your Password"
                onChange={(e) => setVerifPassword(e.target.value)}
              />
              <br />
              <label
                htmlFor="defaultFormRegisterPasswordEx"
                className="grey-text"
              >
                سن
              </label>
              <input
                required
                type="text"
                id="defaultFormRegisterPasswordEx"
                className="form-control"
                placeholder="Your age"
                onChange={(e) => setAge(e.target.value)}
              />

              <div className="footer">
                <div className="text-center">
                  {isLoading ? (
                    <Button variant="primary" disabled>
                      <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      Loading...
                    </Button>
                  ) : (
                    <Button onClick={() => onRegister()} className="btn3">
                      تسجيل
                    </Button>
                  )}
                </div>
              </div>
              <LinkContainer to="/" className="link">
                <Nav.Link href="/">go to home</Nav.Link>
              </LinkContainer>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Row>
  );
};

export default Inscription;
