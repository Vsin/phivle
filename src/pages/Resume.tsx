import React from "react";

const Resume: React.FC = () => {
  return (
    <div>
      <h1>Resume</h1>
      <p>
        You can view my resume here:{" "}
        <a href="/your-resume.pdf" target="_blank" rel="noopener noreferrer">
          Download Resume (PDF)
        </a>
      </p>
    </div>
  );
};

export default Resume;
