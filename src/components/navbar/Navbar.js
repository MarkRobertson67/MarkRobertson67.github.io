import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar (fully transparent) */}
      <nav
        className="
          hidden md:flex
          fixed top-0 left-0
          h-full w-60
          bg-transparent
          border-r-2 border-dotted border-white
          text-orange-500
          px-6 py-8
          flex-col space-y-6
          shadow-lg
          font-fredoka
        "
      >
        <h2 className="text-2xl font-bold mb-4">Mark Robertson</h2>
        <ul className="space-y-4 text-lg">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/recommendations">Recommendations</Link></li>
          <li><Link to="/contact">Contact Me</Link></li>
        </ul>
      </nav>

      {/* Mobile Navbar (top bar, fully transparent) */}
      <div
        className="
          md:hidden
          fixed top-0 left-0
          w-full
          bg-transparent
          border-b-2 border-dotted border-white
          text-orange-500
          px-6 py-4
          flex justify-between items-center
          shadow-lg
          font-fredoka
        "
      >
        <h2 className="text-xl font-bold">Mark Robertson</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-orange-500 text-2xl"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu (slide-down, fully transparent) */}
      {isOpen && (
        <div
          className="
            md:hidden
            fixed top-14 left-0
            w-full
            bg-transparent
            border-b-2 border-dotted border-white
            text-orange-500
            p-6
            flex flex-col space-y-4
            shadow-lg
            z-50
            font-fredoka
          "
        >
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About Me</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/resume" onClick={() => setIsOpen(false)}>Resume</Link>
          <Link to="/recommendations" onClick={() => setIsOpen(false)}>Recommendations</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Me</Link>
        </div>
      )}
    </>
  );
}

export default Navbar;
