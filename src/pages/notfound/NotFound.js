import React from "react";
import NotFoundImage from "../../images/404.jpeg";
import NotFoundClip from "../../images/ErrorNotFound.mp4";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-start min-h-[calc(100vh-15rem)] px-4 pt-0 md:pt-8 bg-white overflow-hidden">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-5 py-0 flex items-center bg-blue-500 text-white rounded shadow-lg hover:bg-blue-600 transition duration-200 focus:outline-none"
      >
        <FiArrowLeft className="mr-2" /> Back
      </button>

      <video autoPlay loop muted>
        <source src={NotFoundClip} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1 className="text-xl font-bold text-center text-gray-700 mb-4">
        Sorry, the page you requested does not exist
      </h1>
    </div>
  );
}

export default NotFound;
