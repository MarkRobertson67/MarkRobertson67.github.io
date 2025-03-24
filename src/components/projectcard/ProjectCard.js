import React, { useState, useRef } from "react";

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setVideoEnded(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setVideoEnded(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleEnded = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setVideoEnded(true);
  };

  return (
    <a
      href={project.website}
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Use an aspect ratio container to maintain a consistent display */}
      <div className="relative aspect-video">
        {isHovered && project.video.endsWith(".mp4") && !videoEnded ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            onEnded={handleEnded}
            className="w-full h-full object-contain transition-all duration-300"
          >
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={project.screenshot}
            alt={project.title}
            className="w-full h-full object-contain transition-all duration-300"
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-700 text-sm mb-2">{project.description}</p>
        <span className="text-blue-600 hover:underline text-sm font-semibold">
          Click here to go to the site
        </span>
      </div>
    </a>
  );
}

export default ProjectCard;
