// Import necessary libraries and components
import React from "react";
import { Link } from "react-router-dom";
// Import CSS file for home page styling
import "./Home.css";

// Define the Home functional component
const Home = () => (
  <div className="home">
    {/* Header section with animation */}
    <header className="animated-header">
      <h1>Established 1984</h1>
      <p className="tagLine">
        THE PROFESSIONAL CHOICE FOR STEEL CONSTRUCTION IN BOLAND AND OVERBERG
        FOR OVER 40 YEARS
      </p>
      {/* Link to the projects page with a button */}
      <Link to="/projects">
        <button className="projectsButton">See Our Portfolio</button>
      </Link>
    </header>
  </div>
);

// Export the Home component for use in other parts of the application
export default Home;
