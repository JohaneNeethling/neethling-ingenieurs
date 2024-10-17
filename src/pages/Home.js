import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => (
  <div className="home">
    <header className="animated-header">
      <h1>Established 1984</h1>
      <p className="tagLine">
        THE PROFESSIONAL CHOICE FOR STEEL CONSTRUCTION IN BOLAND AND OVERBERG
        FOR OVER 40 YEARS
      </p>
      <Link to="/projects">
        <button className="projectsButton">See Our Portfolio</button>
      </Link>
    </header>
  </div>
);

export default Home;
