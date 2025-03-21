import React from "react";

function Projects() {
  const projectList = [
    { title: "Project A", description: "Description for Project A" },
    { title: "Project B", description: "Description for Project B" },
    { title: "Project C", description: "Description for Project C" },
  ];

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-white p-6 md:p-10">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow p-4 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
