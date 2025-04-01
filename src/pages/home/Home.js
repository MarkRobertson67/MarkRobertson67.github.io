import React from "react";

function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)]
                    bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500
                    dark:from-gray-800 dark:via-gray-700 dark:to-gray-900
                    text-white transform -translate-y-8"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-bounce text-center">
        Mark Robertson's <br /> Portfolio Site<br />
      </h1>
    </div>
  );
}

export default Home;
