
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Nav from 'react-bootstrap/Nav'
import InputGroup from 'react-bootstrap/InputGroup'
import  '../style/style.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { BsSearch } from "react-icons/bs";

function Navigation() {
    return (
        <Navbar bg="light" expand={false}>
  <Container fluid style={{justifyContent:'space-between'}}>
    <span>
    <Navbar.Toggle aria-controls="offcanvasNavbar" style={{color:'#8AE3FB'}}  />

  <Navbar.Brand href="#" ><img src="logo.png" style={{height:'25%',width:'25%'}}></img></Navbar.Brand>

    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="start"
    >
      
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Link to="/">Home</Link>
          <Link to="inscription">Sign Up</Link>
          <Link to="Login">Sign In</Link>
          <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Searching"
            className="me-2"
            aria-label="Search"
          />
              <Button variant="outline-secondary" id="button-addon2">
      Button
    </Button>
        </Form>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
    </span>
    <Form className="d-flex">
      <InputGroup>
      <Button className="form-rounded-left" variant="outline" id="button-addon2">
<BsSearch/>
    </Button>
          <FormControl
            type="search"
            placeholder="Searching"
            className="me-2 border-0 form-rounded-right"
            aria-label="Search"
          >
            </FormControl>
            </InputGroup>
<img src="2.png" style={{height:'25%',width:'25%'}}></img>        </Form>
  </Container>
  <i className="bi bi-search" style={{color:"black"}}></i>

</Navbar>

    )
}
export default Navigation;