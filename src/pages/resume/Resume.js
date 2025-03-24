import React from "react";
import { useNavigate } from "react-router-dom";
import { FiDownload, FiArrowLeft } from "react-icons/fi"; 

function Resume() {
  const navigate = useNavigate();
  const resumeUrl = "/Mark_Robertson_Resume_3-16-2025.pdf";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-5 py-2 flex items-center bg-blue-500 text-white rounded shadow-lg hover:bg-blue-600 transition duration-200 focus:outline-none"
      >
        <FiArrowLeft className="mr-2" /> Back
      </button>

      {/* PDF Viewer with Fallback */}
      <div className="w-full max-w-4xl border bg-white p-4 shadow-lg">
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
          <p className="text-center text-gray-700">
            This browser does not support PDFs.
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline ml-1"
            >
              Download PDF
            </a>
          </p>
        </object>
      </div>

      {/* Download Button */}
      <a
        href={resumeUrl}
        download
        className="mt-6 px-6 py-2 flex items-center bg-green-500 text-white rounded shadow-lg hover:bg-green-600 transition duration-200 focus:outline-none"
      >
        <FiDownload className="mr-2" /> Download Resume
      </a>
    </div>
  );
}

export default Resume;
