import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ResumeEditor.css';
// import EducationSection from './EducationSection';
// import CoursesSection from './CoursesSection';
// import InterestsSection from './InterestsSection';
// import CertificatesSection from './CertificatesSection';
// import ExperienceSection from './ExperienceSection';
import InterestsSection from './InterestesSection';
import EducationSection from './EducationSection';
import CoursesSection from './CoursesSection';
import CertificatesSection from './CertificateSection';
import ExperienceSection from './ExperienceSection';

function ResumeEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [resumeData, setResumeData] = useState({
    title: '',
    profile: '',
    education: [{ institution: '', degree: '', startDate: '', endDate: '' }],
    courses: [{ name: '', institution: '', completionDate: '' }],
    interests: [''],
    certificates: [{ name: '', institution: '', date: '' }],
    experience: [{ jobTitle: '', company: '', startDate: '', endDate: '', description: '' }]
  });

  useEffect(() => {
    const storedResume = localStorage.getItem('resume');
    if (storedResume) {
      setResumeData(JSON.parse(storedResume));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData({
      ...resumeData,
      [name]: value
    });
  };

  const handleArrayChange = (index, field, value, section) => {
    const updatedSection = resumeData[section].map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    );
    setResumeData({ ...resumeData, [section]: updatedSection });
  };

  const handleAddField = (section) => {
    const newItem = section === 'interests' ? '' : {};
    setResumeData({
      ...resumeData,
      [section]: [...resumeData[section], newItem]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('resume', JSON.stringify(resumeData));
    navigate('/resume-preview'); // Navigate to ResumePreview page
  };

  return (
    <div className='resume-editor-container'>
      <h1>{id ? 'Edit Resume' : 'Create Resume'}</h1>
      <form className='resume-form' onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title" className='form-label'>Title</label>
          <input
            type='text'
            name='title'
            id='title'
            placeholder='Title'
            className='form-input'
            value={resumeData.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="profile" className='form-label'>Profile</label>
          <textarea
            name='profile'
            id='profile'
            placeholder='Profile'
            className='form-input'
            value={resumeData.profile}
            onChange={handleChange}
          />
        </div>

        <EducationSection
          education={resumeData.education}
          onChange={handleArrayChange}
          onAdd={() => handleAddField('education')}
        />
        <CoursesSection
          courses={resumeData.courses}
          onChange={handleArrayChange}
          onAdd={() => handleAddField('courses')}
        />
        <InterestsSection
          interests={resumeData.interests}
          onChange={handleArrayChange}
          onAdd={() => handleAddField('interests')}
        />
        <CertificatesSection
          certificates={resumeData.certificates}
          onChange={handleArrayChange}
          onAdd={() => handleAddField('certificates')}
        />
        <ExperienceSection
          experience={resumeData.experience}
          onChange={handleArrayChange}
          onAdd={() => handleAddField('experience')}
        />
        
        <button type='submit' className='save-button'>Save</button>
      </form>
    </div>
  );
}

export default ResumeEditor;
