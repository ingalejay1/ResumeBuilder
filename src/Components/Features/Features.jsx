import React from 'react';
import './Feature.css';

function Feature() {
  return (
    <div className="feature-section">
      <div className="feature-container">
        <h2 className="feature-title">Our Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <div className="feature-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c0-3 3-5 5-5s5 2 5 5-2 5-5 5-5-2-5-5zm-7 6a6 6 0 00-6 6v3h24v-3a6 6 0 00-6-6H5z"
                />
              </svg>
            </div>
            <h3 className="feature-card-title">User Registration and Login</h3>
            <p className="feature-card-text">
              Securely manage your account and access your resume anytime.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="feature-card-title">Resume Section</h3>
            <p className="feature-card-text">
              Add, edit, and delete entries for work experience, education, skills, and achievements.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6M9 16h6M7 8h10M5 4h14"
                />
              </svg>
            </div>
            <h3 className="feature-card-title">Profile Management</h3>
            <p className="feature-card-text">
              Create and manage your profile with personal information and contact details.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 7l3-3m0 0l4 4m-4-4v11a4 4 0 004 4h4"
                />
              </svg>
            </div>
            <h3 className="feature-card-title">Export Option</h3>
            <p className="feature-card-text">
              Export your resume as a PDF with one-click download.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <h3 className="feature-card-title">Template Selection</h3>
            <p className="feature-card-text">
              Choose from simple templates and customize fonts and colors.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 11l7-7 7 7M5 19l7-7 7 7"
                />
              </svg>
            </div>
            <h3 className="feature-card-title">Real-Time Preview</h3>
            <p className="feature-card-text">
              See a live preview of your resume as you edit it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
