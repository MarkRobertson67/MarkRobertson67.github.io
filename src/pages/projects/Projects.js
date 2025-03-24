import React from "react";
import ProjectCard from "../../components/projectcard/ProjectCard";
import citywhispererPic from "../../images/citywhispererpic.png";
import citywhispererVideo from "../../images/citywhispererclip.mp4";
import timecardappPic from "../../images/timecardapp.png";
import timecardvideo from "../../images/timecardclip.mp4"

const projects = [
  {
    title: "CityWhisperer",
    description:
      "An immersive experience blending real-time data with urban life. Explore interactive maps, live data feeds, and a unique take on city dynamics.",
    screenshot: citywhispererPic,
    video: citywhispererVideo,
    website: "https://citywhisperer-mark.netlify.app/",
  },
  {
    title: "TimeCardApp",
    description:
      "A time tracking application designed to streamline attendance records and boost efficiency in the workplace. (Video coming soon!)",
    screenshot: timecardappPic,
    video: timecardvideo,
    website: "https://example.com/timecardapp", // Replace with actual URL when ready
  },
  // Add more projects here if needed...
];

function Projects() {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-white p-6 md:p-10">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
