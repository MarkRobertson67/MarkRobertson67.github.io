import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi"; 


function Resume() {
  const navigate = useNavigate();
  const resumeUrl = "/Mark_Robertson_Resume.pdf";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 pb-16 bg-gray-100 dark:bg-gray-600">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-5 py-2 flex items-center bg-blue-500 text-white rounded shadow-lg hover:bg-blue-600 transition duration-200 focus:outline-none"
      >
        <FiArrowLeft className="mr-2" /> Back
      </button>

      {/* PDF Viewer with Fallback */}
      <div className="w-full max-w-4xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-600">
        <object
          data={resumeUrl}
          type="application/pdf"
          className="w-full h-[800px]"
        >
          <iframe
            src={resumeUrl}
            className="w-full h-[800px]"
            title="Resume"
          />
          <p>
            This browser does not support PDFs.
          </p>
        </object>
      </div>
    </div>
  );
}

export default Resume;
