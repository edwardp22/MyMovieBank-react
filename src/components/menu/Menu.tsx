import React from "react";

import { Nav } from "react-bootstrap";
import { menu } from "../../App";

export default function Menu() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      {menu.map((link) => (
        <Nav.Item>
          <Nav.Link href={link.route}>{link.text}</Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}
