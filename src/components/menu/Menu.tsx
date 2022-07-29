import React, { useContext } from "react";

import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { mainContext } from "../../App";

export default function Menu() {
  const { menu } = useContext(mainContext);

  return (
    <Navbar expand="lg">
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          {menu.map((link: any) => (
            <NavLink key={link.text} to={link.route} className={link.className}>
              {link.text}
            </NavLink>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
