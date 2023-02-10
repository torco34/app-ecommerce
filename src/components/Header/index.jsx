import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { BsCart } from "react-icons/bs";
import {
  ContainerFather,
  ConatinerNav,
  CardOnLina,
  BadgeCont,
  Bs,
} from "./styles";
import Badge from "react-bootstrap/Badge";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useStateValue } from "../../StateProvider/index";
import { Logo } from "../Logo";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <>
      <ContainerFather>
        <Navbar bg="light" expand="lg">
          <Container>
            <Link to="/home">
              <Logo />
            </Link>

            <ConatinerNav>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto  link">
                  {navbars.map((navbar) => (
                    <li key={navbar.to}>
                      <NavLink
                        style={({ isActive }) => ({
                          color: isActive ? "#CE7777" : "#2b3a55",
                          borderBottom: isActive ? "solid" : null,
                        })}
                        to={navbar.to}
                      >
                        {navbar.text}
                      </NavLink>
                    </li>
                  ))}
                </Nav>
              </Navbar.Collapse>
            </ConatinerNav>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Container>
        </Navbar>
      </ContainerFather>
      <CardOnLina>
        <Link to="/chek">
          <Bs>
            <BsCart size="40px" />
          </Bs>
          <BadgeCont>
            <Badge bg="danger">{basket?.length}</Badge>
          </BadgeCont>
        </Link>
      </CardOnLina>

      <br></br>
      <Outlet />
    </>
  );
}
export { Header };

//
const navbars = [];
navbars.push({
  to: "/home",
  text: "Home",
});
navbars.push({
  to: "/product",
  text: "Product",
});

navbars.push({
  to: "/sig",
  text: "Sin Up",
});
navbars.push({
  to: "/login",
  text: "Sign In",
});
