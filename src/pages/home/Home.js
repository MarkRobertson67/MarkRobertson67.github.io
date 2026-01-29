import React from "react";
import { Link } from "react-router-dom";
//import MarkRobertsonPortfolio from "../../images/MarkRobertsonPortfolio.png";
import MarkRobertsonPortfolio from "../../images/dashboard_funnel_overview.png";
import "./Home.css";

function Home() {
  return (
    <Link to="/projects" className="block">
      <div className="container">
        <img
  src={MarkRobertsonPortfolio}
  alt="Sales Lead Funnel Dashboard"
  className="img"
/>
      </div>
    </Link>
  );
}

export default Home;
