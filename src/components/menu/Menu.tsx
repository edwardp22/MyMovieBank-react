import React from "react";

import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { menu } from "../../App";

export default function Menu() {
  return (
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {menu.map((link) => (
            <NavLink key={link.text} to={link.route}>
              {link.text}
            </NavLink>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
