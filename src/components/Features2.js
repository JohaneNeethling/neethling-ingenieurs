// Import the required CSS file for styling the features component
import "./Features.css";
// Import necessary libraries and components from React and React Bootstrap
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
// Import images to be used in the project cards
import BritsHome from "./images/BritsHome4.jpg";
import Bowling from "./images/ClubHouse7.jpg";

// Define the Features2 functional component
function Features2() {
  return (
    // Create a Bootstrap container for the feature projects with margin
    <Container className="feature-projects my-5">
      <Row>
        {/* First column for the Brits Home project */}
        <Col xs={12} sm={6} className="mb-4">
          <Card className="project-card">
            {/* Image for the project card */}
            <Card.Img
              variant="top"
              src={BritsHome}
              alt="Project 3" // Alternate text for accessibility
              className="cardCover"
            />
            <Card.Body>
              {/* Title of the project */}
              <Card.Title className="featTitle">Brits Home</Card.Title>
              <Card.Text>
                {/* Description with a link to the project location */}
                Take a look at the home we completed in{" "}
                <a
                  href="https://www.route-62-info.co.za/routes/town/222/bonnievale"
                  rel="noopener"
                  target="_blank"
                >
                  Bonnievale!
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Second column for the Bonnievale Bowling Club project */}
        <Col xs={12} sm={6} className="mb-4">
          <Card className="project-card">
            {/* Image for the project card */}
            <Card.Img
              variant="top"
              src={Bowling}
              alt="Project 4" // Alternate text for accessibility
              className="cardCover"
            />
            <Card.Body>
              {/* Title of the project */}
              <Card.Title className="featTitle">
                Bonnievale Bowling Club
              </Card.Title>
              <Card.Text>
                {/* Description with a link to the bowling club */}
                Check out the{" "}
                <a
                  href="https://community-services.blaauwberg.net/sport-clubs/bowls-bowling-clubs-western-cape/Bonnievale-Bowls-Club"
                  rel="noopener"
                  target="_blank"
                >
                  Bonnievale Bowling Club
                </a>{" "}
                job we did!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

// Export the Features2 component for use in other parts of the application
export default Features2;
