import "./Features.css";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import BritsHome from "./images/BritsHome4.jpg";
import Bowling from "./images/ClubHouse7.jpg";

function Features2() {
  return (
    <Container className="feature-projects my-5">
      <Row>
        <Col md={6}>
          <Card className="project-card">
            <Card.Img
              variant="top"
              src={BritsHome}
              alt="Project 3"
              className="cardCover"
            />
            <Card.Body>
              <Card.Title className="featTitle">Brits Home</Card.Title>
              <Card.Text>
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
        <Col md={6}>
          <Card className="project-card">
            <Card.Img
              variant="top"
              src={Bowling}
              alt="Project 4"
              className="cardCover"
            />
            <Card.Body>
              <Card.Title className="featTitle">
                Bonnievale Bowling Club
              </Card.Title>
              <Card.Text>
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

export default Features2;
