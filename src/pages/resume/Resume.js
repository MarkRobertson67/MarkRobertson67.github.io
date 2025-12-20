import React from "react";


function Resume() {
  const resumeUrl = "/Data_Analyst_Mark_Robertson_Resume.pdf";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 pb-16 bg-gray-100 dark:bg-gray-600">


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
