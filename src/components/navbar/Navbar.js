import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import MatrixRain from "./MatrixRain";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close the menu whenever the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="MatrixRain">
      {/* MatrixRain background */}
      <MatrixRain />

      {/* Desktop Sidebar */}
      <div className="hidden md:flex fixed top-0 left-0 h-full w-60 text-white px-6 py-8 flex-col space-y-6 font-fredoka">
        <h2 className="text-2xl font-bold mb-4">
          <Link to="/">Mark Robertson</Link>
        </h2>
        <ul className="space-y-4 text-lg">
          <li>
            <Link to="/" className="hover:text-blue-500">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500">About Me</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-blue-500">Projects</Link>
          </li>
          <li>
            <Link to="/resume" className="hover:text-blue-500">Resume</Link>
          </li>
          <li>
            <Link to="/recommendations" className="hover:text-blue-500">Recommendations</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500">Contact Me</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div
        className="md:hidden fixed top-0 left-0 w-full bg-white dark:bg-[#011625] z-[1000] px-6 py-5 flex justify-between items-center font-fredoka shadow-lg"
        style={{ 
          paddingTop: "calc(1rem + env(safe-area-inset-top))",
        }}
      >
        <h2 className="text-xl font-bold">
          <Link 
            to="/" 
            className="block text-[#0000ff] dark:text-white"
          >
            Mark Robertson
          </Link>
        </h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`text-2xl ${isOpen ? "text-black dark:text-white" : "text-black dark:text-white"}`}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-14 left-0 w-full bg-white dark:bg-[#011625] text-black dark:text-white p-6 flex flex-col space-y-4 shadow-lg z-50 font-fredoka">
          <Link to="/" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>About Me</Link>
          <Link to="/projects" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/resume" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Resume</Link>
          <Link to="/recommendations" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Recommendations</Link>
          <Link to="/contact" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Contact Me</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
