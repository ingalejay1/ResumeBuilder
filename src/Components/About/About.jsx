import React from 'react';
import './About.css';

function About() {
  return (
    <div className='about-section'>
      <div className='about-container'>
        <div className='about-content'>
          <div className='about-image-container'>
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="Startup Illustration"
              className='about-image'
            />
          </div>
          <div className='about-text-container'>
            <h2 className='about-title'>
              Building Professional Resumes Made Easy
            </h2>
            <p className='about-text'>
              Welcome to our Resume Builder web app, your go-to solution for creating polished, professional resumes with ease. Our mission is to streamline the resume creation process, allowing you to focus on showcasing your skills and experience.
            </p>
            <p className='about-text'>
              Our intuitive platform offers a range of features designed to help you craft the perfect resume:
            </p>
            <ul className='about-list'>
              <li className='about-list-item'>User Registration and Login: Securely manage your account and access your resume anytime.</li>
              <li className='about-list-item'>Resume Sections: Easily add and edit sections for work experience, education, skills, and achievements.</li>
              <li className='about-list-item'>Profile Management: Keep your personal information up to date and organized.</li>
              <li className='about-list-item'>Export Option: Download your resume as a PDF with just one click.</li>
              <li className='about-list-item'>Template Selection: Choose from a variety of professional templates to suit your style.</li>
              <li className='about-list-item'>Real-Time Preview: See your changes in real-time as you edit your resume.</li>
            </ul>
            <p className='about-text'>
              Our team is passionate about helping you succeed. Whether you're applying for your first job or looking to advance your career, our Resume Builder web app is here to make the process seamless and stress-free.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
