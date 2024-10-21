// Import necessary libraries and components
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
// Import CSS file for projects page styling
import "./Projects.css";
// Import images for the projects
import MorLodge from "./images/MorLodge1.jpeg";
import Malgas from "./images/MalHome1.jpg";
import BritsHome from "./images/BritsHome4.jpg";
import Bowling from "./images/ClubHouse7.jpg";
import TweeEike from "./images/TweeEike.jpg";
import Finishing from "./images/Finishing.jpg";
import Assembly from "./images/Assembly.jpg";
import Herman from "./images/Herman.jpg";

// Define the Projects functional component
const Projects = () => {
  // Array to hold project data
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
    // Create a Bootstrap container for the projects page
    <Container className="projects-page">
      <h2 className="projectsTitle">Our Projects</h2>
      <Row>
        {/* Map through the project data to create a card for each project */}
        {projectData.map((project) => (
          <Col md={4} key={project.id}>
            {" "}
            {/* Use md=4 for three columns on medium and larger screens */}
            <Card
              className="project-card"
              style={{ animation: "slideInUp 1s ease-out" }} // Animation style for card
            >
              {/* Display project image */}
              <Card.Img
                variant="top"
                src={project.image}
                className="projectImg"
              />
              <Card.Body>
                {/* Display project title */}
                <Card.Title>{project.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

// Export the Projects component for use in other parts of the application
export default Projects;
