import React, { useState } from "react";

const recommendations = [
  {
    name: "Tracey L. Wolfman, RN, BSN, MA",
    title: "Administrator, We Care Adult Care",
    date: "February 1, 2025",
    relation: "Managed Mark directly",
    quote:
      "With gratitude, I write this recommendation for Mark Robertson. Mark identified the need for a more efficient time and attendance application for our business. He presented the idea to streamline and track employee hours and took the initiative to design and implement a custom tailored app. The app was tailored to our specific needs and requirements. This App automated our time tracking process, reducing administrative hours and minimizing errors. Mark provided training and guidance for all employees. His technical expertise and ability to communicate clearly led to a successful transition for all to use. I am confident Mark will be an asset to any organization coupled with his problem solving ability, his technical mindset and strong work ethic that sets him apart! Fondly, Tracey L. Wolfman, RN, BSN, MA",
  },
  {
    name: "Raydelys Morrobel Reyes",
    title: "Software Engineer @ Uber",
    date: "March 8, 2024",
    relation: "Worked with Mark on the same team",
    quote:
      "To Whom It May Concern, I am writing to highly recommend Mark Robertson for his outstanding contributions as a Software Engineer Fellow during our time together at Pursuit. I had the pleasure of collaborating closely with Mark on a challenging capstone project where we developed an innovative application that generates self-guided walking tours using OpenAI API. Throughout the duration of our project, Mark consistently demonstrated remarkable technical prowess and creativity. He played a pivotal role in the development and implementation of various features of our application, showcasing his strong programming skills and deep understanding of software engineering principles. One of Mark's most notable qualities is his unwavering dedication and work ethic. I wholeheartedly recommend him for any role he chooses to pursue. Sincerely, Raydelys Morrobel Reyes",
  },
  {
    name: "David Munzlinger",
    title: "Business Development/Sales Executive",
    date: "February 27, 2024",
    relation: "Reported directly to Mark",
    quote:
      "I built and secured patented headphone technology that I wanted to market. I had previously worked at Monster Cable where we founded Beats by Dr. Dre. What I needed and found in Mark was expertise in sourcing investment capital and organizing a company's legal structure so that it was attractive to investors. Mark reorganized the company's legal entity and generated a CAP table that resulted in Phaz Music becoming ready to receive investment capital. The restructure direction that Mark completed was right on the money and when complete allowed Mark and I to begin meeting with investors in various US states. Mark is a strategic thinker, an excellent communicator, and a strong leader who stays focused on goals in logical ways that sometimes elude others. I highly recommend Mark in any role he chooses to pursue. Sincerely, David Munzlinger",
  },
  {
    name: "Christina Cephus",
    title: "Backend Software Engineer @ Uber | Pursuit Alum",
    date: "February 25, 2024",
    relation: "Worked with Mark on the same team",
    quote:
      "It is with great enthusiasm and utmost respect that I extend my personal recommendation for Mark Robertson. Collaborating with Mark has been a highlight of my professional journey, and his exceptional strength, diligence, and unwavering commitment to excellence have left a lasting impression on me. Mark's technical expertise, combined with his creativity and leadership, makes him an invaluable asset to any organization. I wholeheartedly endorse him for any role he pursues. Sincerely, Christina Cephus",
  },
  {
    name: "Gregor Anderson",
    title: "Managing Director at Pharmacentric Solutions",
    date: "December 22, 2023",
    relation: "Worked with Mark on the same team",
    quote:
      "Mark is an invaluable team member who you can trust to take on any challenge. He has consistently enhanced his ability to learn, analyze, and solve complex problems. Mark is a solid 'completer/finisher' who always delivers. His maturity, inquisitiveness, and reliability make him an extraordinary asset to any employer. I highly recommend him for any role he chooses to pursue. Sincerely, Gregor Anderson",
  },
];

function Recommendations() {
  const [selectedRec, setSelectedRec] = useState(null);

  const closeModal = () => setSelectedRec(null);

  // Optionally, you can truncate the preview text in the card if needed.
  const truncateText = (text, length = 150) =>
    text.length > length ? text.substring(0, length) + "..." : text;

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-gradient-to-br from-blue-50 to-gray-50 dark:from-gray-600 dark:to-gray-600 pt-6 px-6 pb-20 md:pt-10 md:px-10 md:pb-0">
  <h2 className="text-3xl font-bold mb-8 text-center dark:text-gray-100">
    Recommendations
  </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recommendations.map((rec, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-700 rounded-xl shadow-2xl p-6 border-l-4 border-blue-500 dark:border-blue-300 transform transition duration-300 hover:scale-105 cursor-pointer"
            onClick={() => setSelectedRec(rec)}
          >
            <p className="italic text-gray-700 dark:text-gray-300 mb-4">
              "{truncateText(rec.quote)}"
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
              <p className="font-semibold text-gray-800 dark:text-gray-200">
                {rec.name}
              </p>
              <p>{rec.title}</p>
              <p>
                {rec.date} – {rec.relation}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* LinkedIn Recommendation Page Link */}
      <div className="text-center mt-8">
        <a
          href="https://www.linkedin.com/in/mark-robertson-ny-uk/details/recommendations/?detailScreenTabIndex=0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white rounded hover:bg-blue-700 dark:hover:bg-blue-800 transition"
        >
          See More Details on LinkedIn
        </a>
      </div>

      {/* Modal for full recommendation */}
      {selectedRec && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-3xl max-w-2xl w-full mx-4 overflow-y-auto max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold mb-4 text-center dark:text-white">
              {selectedRec.name}
            </h3>
            <p className="italic text-gray-700 dark:text-gray-300 mb-4">
              {selectedRec.quote}
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
              <p className="font-semibold text-gray-800 dark:text-gray-200">
                {selectedRec.title}
              </p>
              <p>
                {selectedRec.date} – {selectedRec.relation}
              </p>
            </div>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded hover:bg-blue-700 dark:hover:bg-blue-800 transition block mx-auto"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Recommendations;
