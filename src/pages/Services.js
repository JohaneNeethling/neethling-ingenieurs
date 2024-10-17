import "./Services.css";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Services() {
  return (
    <Container className="services-section my-5">
      <h2 className="myh2">Services We Provide</h2>
      <Row>
        <Col md={3}>
          <Card className="service-card">
            <Card.Body>
              <Card.Title className="titleServices">Flooring</Card.Title>
              <Card.Text>
                We specialize in providing flooring options designed for both
                industrial and commercial use. Our flooring solutions are
                engineered for durability and structural integrity, ensuring
                they withstand heavy loads and high traffic. We use high-quality
                materials to ensure longevity and resistance to wear and tear,
                making them suitable for demanding environments.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="service-card">
            <Card.Body>
              <Card.Title className="titleServices">Assembly</Card.Title>
              <Card.Text>
                Our team expertly manages the assembly of steel frameworks,
                ensuring precise alignment and secure installation of each
                component. We focus on accuracy and safety throughout the
                process, making sure the final structure is stable and reliable.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="service-card">
            <Card.Body>
              <Card.Title className="titleServices">Design</Card.Title>
              <Card.Text>
                Our design services translate architectural concepts into
                practical steel structures. We work closely with clients and
                architects to create designs that are both functional and
                aesthetically pleasing. Our focus is on ensuring that the steel
                structures meet all performance requirements while aligning with
                the project's vision.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="service-card">
            <Card.Body>
              <Card.Title className="titleServices">Plans</Card.Title>
              <Card.Text>
                We specialize in drawing up comprehensive plans for your
                project, carefully outlining every aspect from start to finish.
                This includes designing detailed schematics, developing
                construction timelines, and identifying key milestones. Our
                planning process ensures that all project elements are
                well-organized and aligned, facilitating smooth execution and
                successful project completion.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <Card className="service-card">
            <Card.Body>
              <Card.Title className="titleServices">Finishing</Card.Title>
              <Card.Text>
                Our finishing services involve a variety of treatments and
                coatings that enhance the appearance and durability of steel
                structures. These may include powder coating, galvanizing, and
                painting. These processes protect the steel from corrosion,
                improve its visual appeal, and extend its service life, ensuring
                that the final product not only looks good but performs well
                over time.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="service-card">
            <Card.Body>
              <Card.Title className="titleServices">Measurements</Card.Title>
              <Card.Text>
                Precision in measurements is crucial for the success of
                construction projects. We offer accurate measurement services to
                ensure that every steel component fits perfectly and functions
                as intended. Our team uses advanced tools and techniques to take
                precise measurements, ensuring that the final structure meets
                all design specifications.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="service-card">
            <Card.Body>
              <Card.Title className="titleServices">Quotations</Card.Title>
              <Card.Text>
                We provide transparent and detailed quotations that outline
                project costs clearly. This allows clients to understand the
                financial aspects of the project thoroughly, enabling them to
                make informed decisions and manage their budgets effectively.
                Our quotations include a breakdown of costs, ensuring there are
                no hidden surprises.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="service-card">
            <Card.Body>
              <Card.Title className="titleServices">Manufacturing</Card.Title>
              <Card.Text>
                We create high-strength, precisely engineered products tailored
                to meet specific project requirements. We ensure that each
                component meets exacting standards and performs reliably.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
