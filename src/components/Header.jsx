import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import logo from "../assets/img/tienda.png";
import Button from "react-bootstrap/Button";
import { ContainerHeader, ContainerImg } from "../assets/styled/Header";
import { ShoppingOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import Badge from "react-bootstrap/Badge";
import { Logo } from "./Logo";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <ContainerImg>
          <Navbar.Brand href="#home">
            <Logo />
          </Navbar.Brand>
        </ContainerImg>

        <ContainerHeader>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto ">
              <Nav.Link href="#home">Hello</Nav.Link>
              <Nav.Link href="#link">Sign in</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </ContainerHeader>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
      <Button className="m-auto " variant="outline-light" size="lg">
        <ShoppingCartOutlined
          style={{
            fontSize: "50px",
            color: "#2face7",
            position: "absolute",
          }}
        />
        <Badge bg="danger">1</Badge>
      </Button>
    </Navbar>
  );
}

export { Header };
