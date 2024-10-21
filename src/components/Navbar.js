// Import necessary libraries and components
import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// Import CSS file for navbar styling
import "./Navbar.css";

// Define the Navigation functional component
const Navigation = () => {
  // State to track if the page has been scrolled
  const [scrolled, setScrolled] = useState(false);

  // Function to handle scroll event and update state
  const handleScroll = () => {
    const isScrolled = window.scrollY > 50; // Check if scrolled down more than 50px
    setScrolled(isScrolled); // Update scrolled state
  };

  // useEffect to add and clean up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Add event listener
    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up on unmount
    };
  }, []);

  return (
    // Render the Navbar component with dynamic class based on scroll state
    <Navbar
      className={scrolled ? "scrolled" : ""} // Apply 'scrolled' class if scrolled
      bg="dark" // Set background color
      variant="dark" // Set text color variant
      expand="lg" // Make navbar expandable on large screens
    >
      <Container>
        {/* Navbar brand linking to the home page */}
        <Navbar.Brand as={Link} to="/">
          Neethling Ingenieurs
        </Navbar.Brand>
        {/* Toggle button for mobile view */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Navbar links that collapse in mobile view */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* Navigation links */}
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/information">
              Information
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// Export the Navigation component for use in other parts of the application
export default Navigation;
