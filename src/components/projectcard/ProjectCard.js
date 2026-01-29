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
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }, 50);
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
    className="block bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    {/* Media (image -> video on hover) */}
    <div className="relative aspect-video z-0">
      {isHovered && project.video && project.video.endsWith(".mp4") && !videoEnded ? (
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

    {/* Text + links */}
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2 dark:text-gray-200">
        {project.title}
      </h3>

      <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
        {project.description}
      </p>

      <div className="mt-2 flex gap-4 text-sm font-semibold">
        {/* This is just label text because the entire card is already the link */}
        {project.website && (
          <span className="text-blue-600 hover:underline">View Live Site</span>
        )}

        {/* Repo link: must stop navigation + not open the website */}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:underline"
            onClick={(e) => {
              e.preventDefault();   // prevents the parent <a> from hijacking the click
              e.stopPropagation();  // stops bubbling to parent
              window.open(project.repo, "_blank", "noopener,noreferrer");
            }}
          >
            GitHub Repo
          </a>
        )}
      </div>
    </div>
  </a>
);

}

export default ProjectCard;
