import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import InputGroup from "react-bootstrap/InputGroup";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { BsSearch } from "react-icons/bs";

function Header() {
  return (
    <Navbar bg="white" expand={false}>
      <Container fluid style={{ justifyContent: "space-between" }}>
        <span>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            style={{ color: "#8AE3FB" }}
          />

          <Navbar.Brand href="#">
            <img src="logo.png" style={{ height: "25%", width: "25%" }}></img>
          </Navbar.Brand>

          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
            style={{
              width: "200px",
              align: "center",
              backgroundColor: "#8AE3FB",
            }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <img
                src="icon.png"
                className="App-logo"
                alt="logo"
                style={{
                  animation: "App-logo-spin infinite 20s linear",
                  height: "40vmin",
                  pointerEvents: "none",
                  width: "100px",
                  height: "100px",
                  marginLeft: "20px",
                  marginBottom: "30px",
                }}
              />

              <Nav
                className="justify-content-end flex-grow-1 pe-3"
                style={{
                  textAlign: "center",
                  fontFamily: "Harmattan",
                  fontSize: "16px",
                  textDecoration: "none solid rgb(0,0,0)",
                }}
              >
                <Nav.Link href="/">الصفحة الرئيسية</Nav.Link>
                <Nav.Link href="/#app-features">مميزات التطبيق</Nav.Link>
                <Nav.Link href="/#app-content">محتوى التطبيق</Nav.Link>
                <Nav.Link href="/#app-op">أراء المستخدمين</Nav.Link>
                <Nav.Link href="/#app-statistics">إحصائيات</Nav.Link>

                <NavDropdown title="Connexion" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="/login">
                    <span>
                      <i class="fas fa-sign-in-alt" /> Sign In
                    </span>{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Inscription">
                    <span>
                      <i class="fas fa-user-plus" /> SignUp
                    </span>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </span>
        <Form className="d-flex">
          <InputGroup>
            <Button
              className="form-rounded-left"
              variant="outline"
              id="button-addon2"
            >
              <BsSearch />
            </Button>
            <FormControl
              type="search"
              placeholder="Searching"
              className="me-2 border-0 form-rounded-right"
              aria-label="Search"
            ></FormControl>
          </InputGroup>
          <img src="2.png" style={{ height: "25%", width: "25%" }}></img>{" "}
        </Form>
      </Container>
      <i className="bi bi-search" style={{ color: "black" }}></i>
    </Navbar>
  );
}
export default Header;
