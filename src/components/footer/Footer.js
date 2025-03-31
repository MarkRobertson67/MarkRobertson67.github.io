import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaBriefcase } from "react-icons/fa";
import DarkModeToggle from "../DarkModeToggle"; // adjust path as needed

function Footer() {
  return (
    <footer className="bg-gray-600 text-white py-4">
      <div className="max-w-7xl mx-auto relative px-6">
        <div>
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Mark Robertson. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-2">
            {/* Social Media & Email Icons */}
            <a
              href="https://github.com/MarkRobertson67"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={30}
                color="#181717"
                className="hover:opacity-80 transition duration-200"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/mark-robertson-654712326"
              target="_blank"
              rel="noopener noreferrer"
            >
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
        </div>
        {/* Dark Mode Toggle on the Right */}
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
          <DarkModeToggle />
        </div>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
