import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ResumePreview.css';

function ResumePreview() {
  const [resumeData, setResumeData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedResume = localStorage.getItem('resume');
    if (storedResume) {
      setResumeData(JSON.parse(storedResume));
    } else {
      navigate('/editor'); // Redirect to editor if no resume is found in local storage
    }
  }, [navigate]);

  if (!resumeData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='resume-preview-container'>
      <h1>{resumeData.title}</h1>
      <section>
        <h2>Profile</h2>
        <p>{resumeData.profile}</p>
      </section>
      <section>
        <h2>Education</h2>
        {resumeData.education.map((edu, index) => (
          <div key={index}>
            <h3>{edu.institution}</h3>
            <p>{edu.degree}</p>
            <p>{edu.startDate} - {edu.endDate}</p>
          </div>
        ))}
      </section>
      <section>
        <h2>Courses</h2>
        {resumeData.courses.map((course, index) => (
          <div key={index}>
            <h3>{course.name}</h3>
            <p>{course.institution}</p>
            <p>{course.completionDate}</p>
          </div>
        ))}
      </section>
      <section>
        <h2>Interests</h2>
        <ul>
          {resumeData.interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Certificates</h2>
        {resumeData.certificates.map((cert, index) => (
          <div key={index}>
            <h3>{cert.name}</h3>
            <p>{cert.institution}</p>
            <p>{cert.date}</p>
          </div>
        ))}
      </section>
      <section>
        <h2>Experience</h2>
        {resumeData.experience.map((exp, index) => (
          <div key={index}>
            <h3>{exp.jobTitle} at {exp.company}</h3>
            <p>{exp.startDate} - {exp.endDate}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ResumePreview;
