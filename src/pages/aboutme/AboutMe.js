import React from "react";

const AboutMe = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] dark:bg-gray-600 pt-8 pb-16">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-700 p-8 rounded-xl shadow-2xl">
        <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-white mb-6">
          About Me
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          Hi, I’m Mark Robertson, a data analyst with a strong technical and financial background who specializes in transforming raw data into actionable insights that support business decision-making.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          I bring hands-on experience using SQL, Python, and data visualization tools to clean, analyze, and interpret datasets, build dashboards, and deliver clear, data-driven insights. My work focuses on improving data quality, identifying trends, and communicating results in a way that enables stakeholders to make informed decisions.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          With a background in finance and securities trading, I’ve worked extensively with large, fast-moving datasets in high-pressure environments. This experience has shaped a disciplined, analytical approach to problem-solving, performance measurement, and risk assessment, as well as a strong ability to explain complex findings to both technical and non-technical audiences.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          My transition into software development strengthened my ability to design end-to-end data workflows, automate reporting, and build tools that support analytics at scale. I enjoy collaborating with cross-functional teams to ensure data solutions align with business goals and deliver measurable impact.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Beyond analytics, I’m interested in how automation, AI, and modern data tools can enhance efficiency and insight across industries. Outside of work, I enjoy Formula 1 and global travel, which continually influence how I think about systems, performance, and optimization.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
