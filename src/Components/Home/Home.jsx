import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './hero.webp'
import Image1 from './image1.webp'
import Image2 from './image2.webp'


import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <div className="first-content">
          <div className='frist-content-left'>
            <p className='first-content-main'>Unleash Your Full Potential</p>
            <p className='first-content-main-1'>Take Your Career to New Heights with our AI-Boosted All-in-One Platform. Start for Free and Elevate with Premium Options.</p>
            <div className='auth-links'>
            <Link to="get-started" className="get-started-link">
              Get started - It's free
            </Link>
          </div>
          </div>
          <div className='frist-content-right'>
          <img src={Hero} alt="heroImg"/>
          </div>
        </div>
        <div className="second-content">
          <div className='second-content-main'>Showcase Yourself</div>
          <div className='second-content-data'>
            <div>ResumeBuilder is more than just a resume making app – it's a revolutionary platform designed to elevate your job search experience. Our focus is on empowering job seekers like you to present their full potential and secure their dream roles, all while saving time and enjoying the process as much as we've enjoyed creating it!</div>
            <div>Design a seamless visual journey across your application and visual appearance that reflects your unique identity, making each aspect of your application uniquely yours. With FlowCV, you can present yourself confidently and professionally, leaving a memorable impression on potential employers. Start building your distinctive brand today!</div>
          </div>
        </div>
        <div className="third-content">
          <div>
            <p className='third-content-main'>Customizable Templates</p>
            <p>Unleash possibilities with ResumeBuilder's thoughtfully designed templates. Whether for resumes, cover letters, personal websites, or more, our customizable templates help you make a lasting impact.</p>
            <div className='auth-links'>
            <Link to="templates" className="get-started-link">
              See all templates
            </Link>
          </div>
          </div>
          <div>
            <img src={Image1} alt="image" />
          </div>
        </div>
        <div className="forth-content">
          <img src={Image2} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
