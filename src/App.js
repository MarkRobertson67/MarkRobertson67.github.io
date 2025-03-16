
// import logo from './logo.svg';
// import './App.css';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello Worldly Laptop
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;





import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // add back Link
import Home from './Components/pages/home/Home';
import Projects from './Components/pages/projects/Projects';
import Resume from './Components/pages/resume/Resume';
import NotFound from './Components/pages/notfound/notFound'

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />

          {/* Catch all route for non-existant paths */}
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  );
}

export default App;

// To update gh-pages for auto redeploy, "npm run deploy"