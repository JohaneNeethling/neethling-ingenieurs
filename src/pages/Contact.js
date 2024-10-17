import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <Container className="contact-page">
      <Row>
        <Col>
          <h1 className="page-title">Contact Us</h1>
          <p className="page-paragraph">
            Have any questions? Feel free to reach out to us! We generally
            prefer a phone call, but do check our e-mail frequently. We look
            forward to hearing from you.
          </p>
        </Col>
        <Col md={6} className="contact-info">
          <p>
            <strong>Address:</strong> 9 Landbou Road, Bonnievale
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:jni@lando.co.za">jni@lando.co.za</a>
          </p>
          <p>
            <strong>Phone:</strong>
            <a href="tel:+27828995768"> +27 82 899 5768</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
