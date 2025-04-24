import React from "react";
import { Link } from "react-router-dom";
import MarkRobertsonPortfolio from "../../images/MarkRobertsonPortfolio.png";
import "./Home.css";

function Home() {
  return (
    <Link to="/projects" className="block">
      <div className="container">
        <img
          src={MarkRobertsonPortfolio}
          alt="Mark Robertson Portfolio"
          className="h-full w-full"
        />
      </div>
    </Link>
  );
}

export default Home;
