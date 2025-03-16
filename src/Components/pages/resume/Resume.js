
import React from 'react';
import resume from '../../../assets/3-16-2025_Resume.pdf'

// function Resume() {
//   return (
//     <div>
//       <h2>Resume</h2>
//       <a href={resume} target="_blank" rel="noopener noreferrer">
//         Open my resume
//         </a>
//     </div>
//   );
// }

function Resume() {
  return (
    <div>
      <object data={resume} type="application/pdf" width="100%" height="800">
        <p>
          This browser does not support PDFs. Please download the PDF to view it:
          <a href={resume} target="_blank" rel="noopener noreferrer">
            Download PDF
          </a>
        </p>
      </object>
    </div>
  );
}
export default Resume;