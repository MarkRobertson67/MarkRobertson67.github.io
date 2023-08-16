
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to My Personal Website</h1>
      <p>Check out my projects and resume:</p>
      <ul>
        <li>
          <Link to="/projects">I added this in main branch Projects</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;