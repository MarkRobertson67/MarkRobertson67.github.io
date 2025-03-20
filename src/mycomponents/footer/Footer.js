import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import icons

function Footer() {
  return (
    <footer className="bg-gray-600 text-white text-center py-4 mt-auto">
      <p className="text-sm">&copy; {new Date().getFullYear()} Mark Robertson. All rights reserved.</p>

      {/* Social Media & Email Icons */}
      <div className="flex justify-center space-x-6 mt-2">
        {/* GitHub (Black) */}
        <a 
          href="https://github.com/MarkRobertson67" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaGithub size={30} color="#181717" className="hover:opacity-80 transition duration-200" />
        </a>

        {/* LinkedIn (Blue) */}
        <a 
          href="https://www.linkedin.com/in/mark-robertson-654712326" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} color="#0077b5" className="hover:opacity-80 transition duration-200" />
        </a>

        {/* Email (Red) */}
        <a 
          href="mailto:markrobertson67@gmail.com" 
        >
          <FaEnvelope size={30} color="#D44638" className="hover:opacity-80 transition duration-200" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
