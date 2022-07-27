import React, { ReactElement } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { Header, Menu } from "../";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <Container fluid id="mainContainer">
      <Row>
        <Col xs={12} md={{ span: 10, offset: 1 }}>
          <Header />
          <Menu />
          {children}
        </Col>
      </Row>
    </Container>
  );
}
