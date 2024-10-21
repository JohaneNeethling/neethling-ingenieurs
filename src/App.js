// Import necessary libraries and components
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import routing components
import Navigation from "./components/Navbar"; // Import the navigation bar
import Home from "./pages/Home"; // Import the Home page
import Projects from "./pages/Projects"; // Import the Projects page
import Contact from "./pages/Contact"; // Import the Contact page
import Footer from "./components/Footer"; // Import the footer component
import Services from "./pages/Services"; // Import the Services page
import WhyUs from "./pages/WhyUs"; // Import the Why Us page
import Features1 from "./components/Features1"; // Import Features1 component
import Features2 from "./components/Features2"; // Import Features2 component

// Define the main App component
const App = () => (
  <Router>
    <div
      style={{
        height: "100%",
        background: "linear-gradient(135deg, #054578, #ffffff)", // Set a gradient background
      }}
    >
      <Navigation /> {/* Render the navigation bar */}
      <main>
        <Routes>
          {/* Define routes for different pages */}
          <Route
            path="/"
            element={
              <>
                <Home /> {/* Render the Home page */}
                <Features1 /> {/* Render Features1 component */}
                <Services /> {/* Render Services component */}
                <Features2 /> {/* Render Features2 component */}
                <WhyUs /> {/* Render Why Us component */}
                <Contact /> {/* Render Contact component */}
                <Footer /> {/* Render footer */}
              </>
            }
          />
          <Route
            path="/information"
            element={
              <>
                <Services /> {/* Render Services component */}
                <WhyUs /> {/* Render Why Us component */}
                <Contact /> {/* Render Contact component */}
                <Footer /> {/* Render footer */}
              </>
            }
          />
          <Route
            path="/projects"
            element={
              <>
                <Projects /> {/* Render Projects page */}
                <Contact /> {/* Render Contact component */}
                <Footer /> {/* Render footer */}
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Contact /> {/* Render Contact component */}
                <Footer /> {/* Render footer */}
              </>
            }
          />
        </Routes>
      </main>
    </div>
  </Router>
);

// Export the App component for use in other parts of the application
export default App;
