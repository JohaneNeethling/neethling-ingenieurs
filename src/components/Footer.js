import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={6}>
            <p>© 2024 Neethling Ingenieurs. All rights reserved.</p>
          </Col>
          <Col md={6} className="footer-links">
            <a href="/">Home</a> | <a href="/information">Information</a> |{" "}
            <a href="/projects">Projects</a> | <a href="/contact">Contact</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
