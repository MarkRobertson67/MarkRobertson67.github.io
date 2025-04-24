import React from "react";
import { Link } from "react-router-dom";
import MarkRobertsonPortfolio from "../../images/MarkRobertsonPortfolio.png";
import "./Home.css";


function Home() {
  return (
    <Link to="/projects" className="block">
      <div w-full h-full object-cover style={{ height: 'calc(100vh - 70px)' }}>
        <img 
          src={MarkRobertsonPortfolio} 
          alt="Mark Robertson Portfolio"
          className="img w-full h-full object-cover"
        />
      </div>
    </Link>
  );
}

export default Home;
