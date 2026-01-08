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

    // ✅ Build an absolute URL so email clients can load it
    // (works in localhost + Netlify)
    const logoUrl = `${window.location.origin}/DataAnalysis2.png`;

    const templateParams = {
      ...formData,

      // helpful metadata
      source: "Portfolio Contact",

      // ✅ branding vars (use in your EmailJS templates)
      brand_name: "Mark Robertson",
      logo_url: logoUrl,
      logo_display: "block", // or "none" if you ever want to hide it
    };

    emailjs
      .send(
        "service_nmgxjq9",
        "template_7rmosy9",
        templateParams,
        "Nvoo2xgtKqLWexhFd"
      )
      .then(
        (response) => {
          console.log("Contact alert email sent!", response.status, response.text);
          alert("Thank you for contacting me!");
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.error("Contact alert FAILED...", err);
          alert("There was an error sending your message. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-gray-100 dark:bg-gray-600 p-2 md:p-10 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Contact Me</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 w-full max-w-md rounded-lg shadow p-6"
      >
        <div className="mb-4">
          <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-200">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 focus:outline-none bg-white dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-200">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 focus:outline-none bg-white dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-200">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 focus:outline-none bg-white dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-800 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactMe;
