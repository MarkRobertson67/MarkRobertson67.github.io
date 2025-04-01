import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Resume from "./pages/resume/Resume";
import AboutMe from "./pages/aboutme/AboutMe";
import Recommendations from "./pages/recommendations/Recommendations";
import ContactMe from "./pages/contactme/ContactMe";
import NotFound from "./pages/notfound/NotFound";
// import TestPage from "./pages/TestPage"

function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.hash) {
      // Remove the leading '#' and navigate
      const path = window.location.hash.substring(1);
      navigate(path, { replace: true });
    }
  }, [navigate]);

  return null;
}


function App() {

  return (
    <>
      <RedirectHandler />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/contact" element={<ContactMe />} />
          {/* <Route path="/testpage" element={<TestPage />} /> */}
          {/* Catch-all for 404 pages */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

// To update gh-pages for auto redeploy, "npm run deploy"