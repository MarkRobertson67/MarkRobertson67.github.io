
import React from 'react';
//import { Link } from 'react-router-dom';

function Home() {
  return (
    // <div>
    //   <h1>Welcome to My Personal Website</h1>
    //   <p>Check out my projects and resume:</p>
    //   <ul>
    //     <li>
    //       <Link to="/projects">Projects</Link>
    //     </li>
    //     <li>
    //       <Link to="/resume">Resume</Link>
    //     </li>
    //   </ul>
    // </div>

    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Site Under Construction</h1>
      <img 
        src="https://www.fg-a.com/under-construction/under-construction-night.gif" 
        alt="Under Construction" 
        style={{ maxWidth: '100%', height: 'auto' }} 
      />
      <p>We're working hard to launch our new site. Please check back soon!</p>
    </div>
  );
}

export default Home;
