import React from "react";

const AboutMe = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-gray-50 p-6 flex items-center">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
        <p className="text-lg text-gray-600 mb-4">
          Hi, I'm Mark Robertson – a passionate developer and creative thinker who loves building engaging, user-friendly web experiences. I specialize in modern JavaScript frameworks like React, and I enjoy leveraging tools like Tailwind CSS to bring vibrant designs to life.
        </p>
        <p className="text-lg text-gray-600">
          When I'm not coding, you can find me exploring the latest technology trends, contributing to open source projects, or simply enjoying a good book and some fresh air. I believe that creativity and innovation go hand-in-hand, and I'm always excited to tackle new challenges.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
