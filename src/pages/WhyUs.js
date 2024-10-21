// Import necessary libraries and components
import "./WhyUs.css"; // Import CSS for styling the Why Us section
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap"; // Import Bootstrap components

// Define the WhyUs functional component
function WhyUs() {
  return (
    // Create a Bootstrap container for the Why Us section
    <Container className="whyus-section my-5">
      <h2 className="myh2">Decades of Experience</h2> {/* Section title */}
      <Row>
        {/* Card for Flooring experience */}
        <Col xs={12} md={3} className="mb-4">
          <Card className="why-us-card">
            <Card.Body>
              <Card.Title className="titleServices">Flooring</Card.Title>
              <Card.Text>
                With over 40 years in the steel construction industry, our
                deep-rooted experience and extensive knowledge enable us to
                tackle projects of any scale with confidence and proficiency.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Card for Customer Service */}
        <Col xs={12} md={3} className="mb-4">
          <Card className="why-us-card">
            <Card.Body>
              <Card.Title className="titleServices">
                Customer Service
              </Card.Title>
              <Card.Text>
                From initial consultation to project completion, our
                client-focused approach guarantees clear communication, prompt
                responses, and personalized attention throughout every phase.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Card for Commitment to Quality */}
        <Col xs={12} md={3} className="mb-4">
          <Card className="why-us-card">
            <Card.Body>
              <Card.Title className="titleServices">
                Commitment to Quality
              </Card.Title>
              <Card.Text>
                We adhere to the highest standards of craftsmanship to ensure
                every component and structure meets its rigorous quality
                benchmarks.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Card for Service Offering */}
        <Col xs={12} md={3} className="mb-4">
          <Card className="why-us-card">
            <Card.Body>
              <Card.Title className="titleServices">
                Service Offering
              </Card.Title>
              <Card.Text>
                Our extensive range of services, including planning, design,
                manufacturing, and finishing, ensures a seamless and integrated
                approach to every project: From conception to completion.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

// Export the WhyUs component for use in other parts of the application
export default WhyUs;
