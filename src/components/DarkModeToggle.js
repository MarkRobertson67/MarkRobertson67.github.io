import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

function DarkModeToggle() {
  // Initialize dark mode based on localStorage
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <span 
      onClick={() => setDarkMode(prev => !prev)} 
      style={{ cursor: 'pointer' }} 
      className="flex items-center"
    >
      {darkMode ? (
        // In dark mode, show the sun icon (bright yellow) so users can switch to light mode
        <FiSun size={24} className="text-yellow-300" />
      ) : (
        // In light mode, show the moon icon (a light gray that stands out on gray-600)
        <FiMoon size={24} className="text-gray-300" />
      )}
    </span>
  );
}

export default DarkModeToggle;



