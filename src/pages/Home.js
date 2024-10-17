import React from "react";
import { Button } from "react-bootstrap";
import "./Home.css";

const Home = () => (
  <div className="home">
    <header className="animated-header">
      <h1>Established 1984</h1>
      <p>
        THE PROFESSIONAL CHOICE FOR STEEL CONSTRUCTION IN BOLAND AND OVERBERG
        FOR OVER 40 YEARS
      </p>
      <Button href="/projects" className="projectsButton">
        Our Projects
      </Button>
    </header>
  </div>
);

export default Home;
