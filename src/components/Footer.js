// Import React and necessary components from React Bootstrap
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// Import CSS file for footer styling
import "./Footer.css";

// Define the Footer functional component
const Footer = () => {
  return (
    // Create a footer element with a specific class for styling
    <footer className="footer">
      <Container>
        <Row>
          {/* First column for copyright information */}
          <Col md={6}>
            <p>© 2024 Neethling Ingenieurs. All rights reserved.</p>
          </Col>
          {/* Second column for navigation links */}
          <Col md={6} className="footer-links">
            {/* Links to different sections of the website */}
            <a href="/">Home</a> | <a href="/information">Information</a> |{" "}
            <a href="/projects">Projects</a> | <a href="/contact">Contact</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

// Export the Footer component for use in other parts of the application
export default Footer;
