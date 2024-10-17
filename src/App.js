import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import WhyUs from "./pages/WhyUs";
import Features1 from "./components/Features1";
import Features2 from "./components/Features2";

const App = () => (
  <Router>
    <div
      style={{
        height: "100%",
        background: "linear-gradient(135deg, #054578, #ffffff)",
      }}
    >
      <Navigation />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Features1 />
                <Services />
                <Features2 />
                <WhyUs />
              </>
            }
          />
          <Route
            path="/information"
            element={
              <>
                <Services />
                <WhyUs />
              </>
            }
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
