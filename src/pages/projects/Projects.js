import React from "react";
import ProjectCard from "../../components/projectcard/ProjectCard";

// Images & Videos
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

const projectCategories = [
  {
    category: "Data Analysis Projects",
    projects: [
      {
        title: "Coming Soon",
        description:
          "Planned data analysis project focusing on data cleaning, exploratory analysis, KPI development, and visualization.",
        techStack: "Python | Pandas | SQL | Tableau",
        screenshot: "",
        video: "",
        website: "#",
      },
    ],
  },
  {
    category: "Professional Web Apps",
    projects: [
      {
        title: "Time Card App — Production Web App",
        description:
          "Modeled and aggregated payroll time-series data to generate biweekly KPIs and export clean CSV reports.",
        techStack:
          "SQL | PostgreSQL (Neon) | Data Modeling | Aggregations | Reporting | CSV Exports | KPI Calculation",
        screenshot: timecardappPic,
        video: timecardVideo,
        website: "https://wcac-timecards-demo.netlify.app",
      },
      {
        title: "City Whisperer",
        description:
          "Ingested and transformed multi-source API data to generate personalized, insight-driven walking tours.",
        techStack:
          "SQL | PostgreSQL | API Data Ingestion | Feature Engineering | Data Visualization | OpenAI API | Google Maps API",
        screenshot: citywhispererPic,
        video: citywhispererVideo,
        website: "https://citywhisperer-mark.netlify.app",
      },
    ],
  },
  {
    category: "Learning Projects",
    projects: [
      {
        title: "My Luxury Rides",
        description:
          "Learning-focused full-stack project demonstrating CRUD operations, dataset filtering, and structured data handling.",
        techStack:
          "React | Express | SQL | CRUD | Filtering | Dataset Handling",
        screenshot: luxuryridesPic,
        video: luxuryridesVideo,
        website: "https://myluxuryrides.netlify.app",
      },
      {
        title: "Student Dashboard",
        description:
          "Aggregated student performance data and displayed KPIs, certifications, and real-time alerts.",
        techStack:
          "React | Data Aggregation | Performance Metrics | KPI Visualization | Real-time Alerts",
        screenshot: studentdashboardPic,
        video: studentdashboardVideo,
        website: "https://mystudent-dashboard.netlify.app",
      },
      {
        title: "Weather App",
        description:
          "Processed external API weather data and displayed historical trends and forecasts.",
        techStack:
          "React | API Integration | JSON Parsing | Data Transformation",
        screenshot: weatherappPic,
        video: weatherappVideo,
        website: "https://marks-weather-app.netlify.app",
      },
    ],
  },
];

function Projects() {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-white dark:bg-gray-600 pb-20 p-6 md:p-10">
      <h2 className="text-3xl font-bold mb-12 text-center dark:text-gray-100">
        Projects
      </h2>

          {/* Scroll hint for first category */}
      <div className="scroll-hint text-center mb-12">
        <p className="text-gray-500 dark:text-gray-300 text-lg flex flex-col items-center">
          Data analysis projects coming soon.
          <span className="animate-bounce mt-2 text-2xl">↓</span>
          Scroll to explore professional web apps
        </p>
      </div>

      {projectCategories.map((category, idx) => (
        <div key={idx} className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 dark:text-gray-100">
            {category.category}
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            {category.projects.map((project, i) => (
              <div
                key={i}
                className="border dark:border-gray-500 rounded-md p-4"
              >
                <ProjectCard project={project} />
                {project.techStack && (
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {project.techStack}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;

