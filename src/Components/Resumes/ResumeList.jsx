import React, { useEffect, useState } from 'react';
import { fetchResumes } from '../../services/api'
import { Link } from 'react-router-dom';
import './ResumeList.css';

const ResumeList = () => {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
      const getResumes = async () => {
          try {
              const response = await fetchResumes();
              setResumes(response.data);
          } catch (error) {
              console.error('Error fetching resumes:', error);
          }
      };

      getResumes();
  }, []);

  return (
    <div className='resume-list-container'>
      <h1>My Resumes</h1>
      <Link to="/create-resume" className='create-resume-button'>Create New Resume</Link>
      <ul className='resume-list'>
        {resumes.map((resume) => (
          <li key={resume._id} className='resume-item'>
            <Link to={`/resumes/${resume._id}`} className='resume-link'>{resume.title}</Link>
            <button onClick={() => handleDelete(resume._id)} className='delete-button'>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResumeList;
