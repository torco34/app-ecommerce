import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { navbars } from "../../archivosGlobal/navbars";
import Badge from "react-bootstrap/Badge";
import { BsTrash } from "react-icons/bs";
import { useStateValue } from "../../StateProvider";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Logo } from "../Logo";
export const HeaderCa = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div>
      <>
        <Navbar bg="light" expand="lg">
          <Container>
            <>
              <Link to="/home">
                <Logo />
              </Link>
            </>

            <>
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
            </>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Container>
        </Navbar>
      </>

      <>
        <Button className=" " variant="outline-light" size="lg">
          <Link to="/chek">
            <BsTrash />
            <Badge bg="danger">{basket?.length}</Badge>
          </Link>
        </Button>
      </>
      <Outlet />
    </div>
  );
};
