import React from "react";
import { Link } from "react-router-dom";
import MarkRobertsonPortfolio from "../../images/HomeImage.png";
import "./Home.css";

function Home() {
  return (
    <Link to="/projects" className="block">
      <div
        className="relative flex flex-col justify-between min-h-[calc(100vh-5rem)] overflow-hidden text-white 
                   bg-center bg-no-repeat bg-cover md:bg-[length:100%_100%]"
        style={{ backgroundImage: `url(${MarkRobertsonPortfolio})` }}
      >
        {/* Top section with your main heading */}
        <div className="pt-[16.5rem] md:pt-[21rem] text-center">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 animate-bounce">
            <span className="neon-text">PORTFOLIO</span>
          </h1>
        </div>
      </div>
    </Link>
  );
}

export default Home;
