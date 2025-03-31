import React from "react";

function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)]
                    bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500
                    dark:from-gray-800 dark:via-gray-700 dark:to-gray-900
                    text-white"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-bounce text-center">
        Mark Robertson's <br /> Portfolio Site
      </h1>
    </div>
  );
}

export default Home;


// <p className="text-lg md:text-2xl max-w-2xl text-center">
// Explore my Projects, check
// out Recommendations, or get in touch with me.
// </p>

// {/* Under Construction Section */}
// <div className="mt-8 flex flex-col items-center">
// <p className="text-xl font-bold mb-2">Site Under Construction</p>
// <img
//   src="https://www.fg-a.com/under-construction/under-construction-night.gif"
//   alt="Under Construction"
//   className="w-20 h-auto"
// />
// </div>