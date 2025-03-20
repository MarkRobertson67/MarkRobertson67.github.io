import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./mycomponents/layout/Layout";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Resume from "./pages/resume/Resume";
import AboutMe from "./pages/aboutme/AboutMe";
import Recommendations from "./pages/recommendations/Recommendations";
import ContactMe from "./pages/contactmemodal/ContactMeModal";
import NotFound from "./pages/notfound/NotFound";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/contact" element={<ContactMe />} />
          {/* Catch-all for 404 pages */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

// To update gh-pages for auto redeploy, "npm run deploy"