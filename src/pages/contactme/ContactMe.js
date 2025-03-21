import React, { useState } from "react";
import emailjs from "emailjs-com";

function ContactMe() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Send the contact alert email (to you)
    emailjs.send(
      "service_3kpodrr",
      "template_7rmosy9",
      formData,
      "Nvoo2xgtKqLWexhFd"
    )
    .then(
      (response) => {
        console.log("Contact alert email sent!", response.status, response.text);
        // After sending the alert, send the auto-reply email
        emailjs.send(
          "service_3kpodrr",
          "template_np119zb",
          formData,
          "Nvoo2xgtKqLWexhFd"
        )
        .then(
          (response) => {
            console.log("Auto-reply email sent!", response.status, response.text);
            alert("Thank you for contacting me!");
            setFormData({ name: "", email: "", message: "" });
          },
          (err) => {
            console.error("Auto-reply FAILED...", err);
            alert("There was an error sending the auto-reply. Please try again.");
          }
        );
      },
      (err) => {
        console.error("Contact alert FAILED...", err);
        alert("There was an error sending your message. Please try again.");
      }
    );
  };
  

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-gray-100 p-6 md:p-10 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md rounded-lg shadow p-6"
      >
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactMe;

