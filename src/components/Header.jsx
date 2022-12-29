import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { ContainerHeader, ContainerImg } from "../assets/styled/Header";
import { ShoppingOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import Badge from "react-bootstrap/Badge";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <ContainerImg>
          <Link to="/">
            <Logo />
          </Link>
        </ContainerImg>

        <ContainerHeader>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto ">
              <Nav.Link>
                <Link to="/">Hello</Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/chek">Sign in</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </ContainerHeader>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
      <Button className="m-auto " variant="outline-light" size="lg">
        <Link to="/chek">
          <ShoppingCartOutlined
            style={{
              fontSize: "50px",
              color: "#2face7",
              position: "absolute",
            }}
          />
          <Badge bg="danger">1</Badge>
        </Link>
      </Button>
    </Navbar>
  );
}

export { Header };
