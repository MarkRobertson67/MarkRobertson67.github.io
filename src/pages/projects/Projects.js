import React from "react";
import ProjectCard from "../../components/projectcard/ProjectCard";
import citywhispererPic from "../../images/citywhispererpic.png";
import citywhispererVideo from "../../images/citywhispererclip.mp4";
import timecardappPic from "../../images/timecardapp.png";
import timecardVideo from "../../images/timecardclip.mp4";
import luxuryridesPic from "../../images/luxuryrides.png";
import luxuryridesVideo from "../../images/luxuryridesclip.mp4";
import weatherappPic from "../../images/weatherapp.png";
import weatherappVideo from "../../images/weatherappclip.mp4";
import studentdashboardPic from "../../images/studentdashboard.png";
import studentdashboardVideo from "../../images/studentdashboardclip.mp4";


const projects = [
  {
    title: "Time Card App",
    description:
      "A time tracking application designed to streamline attendance records and boost efficiency in the workplace. (App Link coming soon!)",
    screenshot: timecardappPic,
    video: timecardVideo,
    website: "https://example.com/timecardapp", // Replace with my actual URL when ready
  },
  {
    title: "City Whisperer",
    description:
      "City Whisperer redefines urban exploration with curated walking routes, AI-powered tours, and interactive maps driven by real-time data. Discover hidden city gems and customize your adventure as you dive into the vibrant pulse of urban life.",
    screenshot: citywhispererPic,
    video: citywhispererVideo,
    website: "https://citywhisperer-mark.netlify.app/",
  },
  {
    title: "My Luxury Rides",
    description:
      "A full-stack app with a React front-end and robust RESTful back-end, showcasing a curated vehicle collection with CRUD and filtering features.",
    screenshot: luxuryridesPic,
    video: luxuryridesVideo,
    website: "https://myluxuryrides.netlify.app/",
  },
  {
    title: "Student Dashboard",
    description:
      "A React student dashboard app that uses a local data file to sort students by semester and display cards with name, photo, CodeWars stats, scores, certifications, expandable notes with 1-on-1 feedback, and real-time graduation tracking alerts.",
    screenshot: studentdashboardPic,
    video: studentdashboardVideo,
    website: "https://mystudent-dashboard.netlify.app/",
  },
  {
    title: "Weather App",
    description:
      "A React-based weather app that uses API calls to fetch current weather and forecast data based on a searched city, displays a search history list, and features a temperature converter.",
    screenshot: weatherappPic,
    video: weatherappVideo,
    website: "https://marks-weather-app.netlify.app/",
  },

  // Add more projects here if needed...
];

function Projects() {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-white dark:bg-gray-600 pb-20 p-6 md:p-10">
      <h2 className="text-3xl font-bold mb-8 text-center dark:text-gray-100">
        Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
