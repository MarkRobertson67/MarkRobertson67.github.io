import React from "react";

function Recommendations() {
  const testimonials = [
    {
      name: "Jane Doe",
      quote: "Mark is an amazing developer. Highly recommend working with him!",
    },
    {
      name: "John Smith",
      quote:
        "Professional, timely, and delivers top-quality work every time!",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-gray-50 p-6 md:p-10">
      <h2 className="text-3xl font-bold mb-6">Recommendations</h2>
      <div className="space-y-6">
        {testimonials.map((testi, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-600"
          >
            <p className="italic mb-2">&quot;{testi.quote}&quot;</p>
            <p className="font-semibold text-blue-600">- {testi.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommendations;
