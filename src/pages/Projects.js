import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Projects.css";
import MorLodge from "./images/MorLodge1.jpeg";
import Malgas from "./images/MalHome1.jpg";
import BritsHome from "./images/BritsHome4.jpg";
import Bowling from "./images/ClubHouse7.jpg";
import TweeEike from "./images/TweeEike.jpg";
import Finishing from "./images/Finishing.jpg";
import Assembly from "./images/Assembly.jpg";
import Herman from "./images/Herman.jpg";

const Projects = () => {
  const projectData = [
    { id: 1, title: "Morokuru Lodge", image: MorLodge },
    { id: 2, title: "Home in Malgas", image: Malgas },
    { id: 3, title: "Home in Bonnievale", image: BritsHome },
    { id: 4, title: "Bonnievale Bowling Club", image: Bowling },
    { id: 5, title: "Herman's Home", image: Herman },
    { id: 6, title: "Twee Eike Sentrum", image: TweeEike },
    { id: 7, title: "Finishing", image: Finishing },
    { id: 8, title: "Assembly", image: Assembly },
  ];

  return (
    <Container className="projects-page">
      <h2 className="projectsTitle">Our Projects</h2>
      <Row>
        {projectData.map((project) => (
          <Col md={4} key={project.id}>
            <Card
              className="project-card"
              style={{ animation: "slideInUp 1s ease-out" }}
            >
              <Card.Img
                variant="top"
                src={project.image}
                className="projectImg"
              />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
