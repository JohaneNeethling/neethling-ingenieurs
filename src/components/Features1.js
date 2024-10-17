import "./Features.css";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import MorLodge from "./images/MorLodge1.jpeg";
import Malgas from "./images/MalHome1.jpg";

function Features1() {
  return (
    <Container className="feature-projects my-5">
      <Row>
        <Col md={6}>
          <Card className="project-card">
            <Card.Img
              variant="top"
              src={MorLodge}
              alt="Project 1"
              className="cardCover"
            />
            <Card.Body>
              <Card.Title className="featTitle">Morokuru Lodge</Card.Title>
              <Card.Text>
                Take a look at the project we completed for{" "}
                <a href="https://morukuru.com/" rel="noopener" target="_blank">
                  Morokulu Lodge!
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="project-card">
            <Card.Img
              variant="top"
              src={Malgas}
              alt="Project 2"
              className="cardCover"
            />
            <Card.Body>
              <Card.Title className="featTitle">Home in Malgas</Card.Title>
              <Card.Text>
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

export default Features1;
