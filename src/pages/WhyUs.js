import "./WhyUs.css";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function WhyUs() {
  return (
    <Container className="whyus-section my-5">
      <h2 className="myh2">Decades of Experience</h2>
      <Row>
        <Col md={3}>
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
        <Col md={3}>
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
        <Col md={3}>
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
        <Col md={3}>
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

export default WhyUs;
