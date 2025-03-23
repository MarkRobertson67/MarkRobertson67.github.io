// import React from "react";

// function Projects() {
//   const projectList = [
//     { title: "Project A", description: "Description for Project A" },
//     { title: "Project B", description: "Description for Project B" },
//     { title: "Project C", description: "Description for Project C" },
//   ];

//   return (
//     <div className="min-h-[calc(100vh-8rem)] bg-white p-6 md:p-10">
//       <h2 className="text-3xl font-bold mb-6">My Projects</h2>
//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {projectList.map((project, index) => (
//           <div
//             key={index}
//             className="border border-gray-200 rounded-lg shadow p-4 hover:shadow-lg transition"
//           >
//             <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//             <p className="text-gray-700">{project.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Projects;




// import React, { useState, useRef } from "react";
// import citywhispererPic from "../../images/citywhispererpic.png";
// import citywhispererVideo from "../../images/citywhispererclip.mp4";
// import timecardappPic from "../../images/timecardapp.png";

// const projects = [
//   {
//     title: "CityWhisperer",
//     description:
//       "An immersive experience blending real-time data with urban life. Explore interactive maps, live data feeds, and a unique take on city dynamics.",
//     screenshot: citywhispererPic,
//     video: citywhispererVideo,
//     website: "https://citywhisperer-mark.netlify.app/",
//   },
//   {
//     title: "TimeCardApp",
//     description:
//       "A time tracking application designed to streamline attendance records and boost efficiency in the workplace. (Video coming soon!)",
//     screenshot: timecardappPic,
//     // For now, using the same image as a placeholder for the video
//     video: timecardappPic,
//     website: "https://example.com/timecardapp", // Replace with your actual URL when ready
//   },
//   // Add more projects if needed...
// ];

// function Projects() {
//   return (
//     <div className="min-h-[calc(100vh-8rem)] bg-white p-6 md:p-10">
//       <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
//       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//         {projects.map((project, index) => (
//           <ProjectCard key={index} project={project} />
//         ))}
//       </div>
//     </div>
//   );
// }

// function ProjectCard({ project }) {
//   const [isHovered, setIsHovered] = useState(false);
//   const videoRef = useRef(null);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//     if (videoRef.current) {
//       videoRef.current.currentTime = 0;
//       videoRef.current.play();
//     }
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//     if (videoRef.current) {
//       videoRef.current.pause();
//     }
//   };

//   return (
//     <a
//       href={project.website}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="block border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div className="relative h-48">
//         {isHovered ? (
//           // Check if project.video ends with .mp4 to decide whether to render a video element
//           project.video.endsWith(".mp4") ? (
//             <video
//               ref={videoRef}
//               autoPlay
//               muted
//               playsInline
//               onEnded={() => videoRef.current.pause()}
//               className="w-full h-full object-cover transition-all duration-300"
//             >
//               <source src={project.video} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           ) : (
//             // If no video available, just show the screenshot
//             <img
//               src={project.screenshot}
//               alt={project.title}
//               className="w-full h-full object-cover transition-all duration-300"
//             />
//           )
//         ) : (
//           <img
//             src={project.screenshot}
//             alt={project.title}
//             className="w-full h-full object-contain transition-all duration-300"
//           />
//         )}
//       </div>
//       <div className="p-4">
//         <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//         <p className="text-gray-700 text-sm mb-2">{project.description}</p>
//         <a
//           href={project.website}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-600 hover:underline text-sm font-semibold"
//         >
//           Click here to go to the site
//         </a>
//       </div>
//     </a>
//   );
// }

// export default Projects;


import React from "react";
import ProjectCard from "../../components/projectcard/ProjectCard";
import citywhispererPic from "../../images/citywhispererpic.png";
import citywhispererVideo from "../../images/citywhispererclip.mp4";
import timecardappPic from "../../images/timecardapp.png";

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
    // For now, we use the static image as a placeholder for the video.
    video: timecardappPic,
    website: "https://example.com/timecardapp", // Replace with your actual URL when ready
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
