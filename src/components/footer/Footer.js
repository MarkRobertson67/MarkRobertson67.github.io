import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaBriefcase } from "react-icons/fa";
import DarkModeToggle from "../DarkModeToggle";

function Footer() {
  return (
    <footer style={{ backgroundColor: '#011625' }} className="text-white py-4">
      <div className="max-w-7xl mx-auto relative px-6">
        <div className="text-center">
          {/* 1) Icons first, with original colors */}
          <div className="flex justify-center space-x-6 mb-2">
            <a href="https://github.com/MarkRobertson67" target="_blank" rel="noopener noreferrer">
              <FaGithub
                size={30}
                color="#FFFFFF"
                className="hover:opacity-80 transition duration-200"
              />
            </a>
            <a href="https://www.linkedin.com/in/mark-robertson-ny-uk" target="_blank" rel="noopener noreferrer">
              <FaLinkedin
                size={30}
                color="#0077b5"
                className="hover:opacity-80 transition duration-200"
              />
            </a>
            <a href="mailto:markrobertson67@gmail.com">
              <FaEnvelope
                size={30}
                color="#D44638"
                className="hover:opacity-80 transition duration-200"
              />
            </a>
            <a href="https://markrobertson67.github.io/">
              <FaBriefcase
                size={30}
                color="#F97316"
                className="hover:opacity-80 transition duration-200"
              />
            </a>
          </div>

          {/* 2) Smaller text below */}
          <p className="text-[0.5rem]">
            &copy; {new Date().getFullYear()} Mark Robertson. All rights reserved. Version 1.0.2
          </p>
        </div>

        {/* Dark Mode Toggle on the Right */}
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
          <DarkModeToggle />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
