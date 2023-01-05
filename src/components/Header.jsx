import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import {
  ContainerThader,
  ContainerHeader,
  ContainerImg,
} from "../assets/styled/Header";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Badge from "react-bootstrap/Badge";
import { Logo } from "./Logo";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <>
      <ContainerThader>
        <Navbar bg="light" expand="lg">
          <Container>
            <ContainerImg>
              <Link to="/prod">
                <Logo />
              </Link>
            </ContainerImg>

            <ContainerHeader>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto  link">
                  {navbars.map((navbar) => (
                    <li>
                      <NavLink
                        style={({ isActive }) => ({
                          color: isActive ? " #2face7" : "#333",
                          borderBottom: isActive ? "solid" : "",
                        })}
                        to={navbar.to}
                      >
                        {navbar.text}
                      </NavLink>
                    </li>
                  ))}
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
              <Badge bg="danger">{basket?.length}</Badge>
            </Link>
          </Button>
        </Navbar>
      </ContainerThader>
      <br></br>
      <Outlet />
    </>
  );
}

export { Header };
const navbars = [];
// navbars.push({
//   to: "/produc",
//   text: "Home",
// });
navbars.push({
  to: "/prod",
  text: "Product",
});
navbars.push({
  to: "siup",
  text: "Login",
});

navbars.push({
  to: "sign",
  text: "Logn up",
});
