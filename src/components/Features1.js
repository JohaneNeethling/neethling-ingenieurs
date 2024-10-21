// Import the required CSS file for styling the features component
import "./Features.css";
// Import necessary libraries and components from React and React Bootstrap
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
// Import images to be used in the project cards
import MorLodge from "./images/MorLodge1.jpeg";
import Malgas from "./images/MalHome1.jpg";

// Define the Features1 functional component
function Features1() {
  return (
    // Create a Bootstrap container for the feature projects with margin
    <Container className="feature-projects my-5">
      <Row>
        {/* First column for the Morokuru Lodge project */}
        <Col xs={12} md={6}>
          <Card className="project-card">
            {/* Image for the project card */}
            <Card.Img
              variant="top"
              src={MorLodge}
              alt="Project 1" // Alternate text for accessibility
              className="cardCover"
            />
            <Card.Body>
              {/* Title of the project */}
              <Card.Title className="featTitle">Morokuru Lodge</Card.Title>
              <Card.Text>
                {/* Description with a link to the project */}
                Take a look at the project we completed for{" "}
                <a href="https://morukuru.com/" rel="noopener" target="_blank">
                  Morokulu Lodge!
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Second column for the Home in Malgas project */}
        <Col xs={12} md={6}>
          <Card className="project-card">
            {/* Image for the project card */}
            <Card.Img
              variant="top"
              src={Malgas}
              alt="Project 2" // Alternate text for accessibility
              className="cardCover"
            />
            <Card.Body>
              {/* Title of the project */}
              <Card.Title className="featTitle">Home in Malgas</Card.Title>
              <Card.Text>
                {/* Description with a link to the project */}
                Check out the work we completed on a home in{" "}
                <a
                  href="https://www.garden-route-info.co.za/routes/town/1770/malgas"
                  rel="noopener"
                  target="_blank"
                >
                  Malgas!
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

// Export the Features1 component for use in other parts of the application
export default Features1;
