import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className='contact-container'>
        <div className='contact-inner-container'>
            <div className='contact-grid'>
                <div className='contact-info'>
                    <h1 className='contact-title'>Get in touch:</h1>
                    <p className='contact-description'>Fill in the form to start a conversation</p>
                    <div className='contact-details'>
                        <div className='contact-detail-item'>
                            <svg className='contact-icon' fill='none' stroke='currentColor' strokeLinejoin='round' strokeLinecap='round' strokeWidth='1.5' viewBox='0 0 24 24'>
                                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <div className='contact-text'>Acme Inc, Street, State, Postal Code</div>
                        </div>
                        <div className='contact-detail-item'>
                            <svg className='contact-icon' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' viewBox='0 0 24 24'>
                                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <div className='contact-text'>+44 1234567890</div>
                        </div>
                        <div className='contact-detail-item'>
                            <svg className='contact-icon' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' viewBox='0 0 24 24'>
                                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <div className='contact-text'>info@acme.org</div>
                        </div>
                    </div>
                </div>
                <form className='contact-form'>
                    <div className='contact-form-group'>
                        <label htmlFor='name' className='contact-label'>Full Name</label>
                        <input type='text' name='name' id='name' placeholder='Full Name' className='contact-input' />
                    </div>
                    <div className='contact-form-group'>
                        <label htmlFor='email' className='contact-label'>Email</label>
                        <input type='email' name='email' id='email' placeholder='Email' className='contact-input' />
                    </div>
                    <div className='contact-form-group'>
                        <label htmlFor='tel' className='contact-label'>Telephone Number</label>
                        <input type='tel' name='tel' id='tel' placeholder='Telephone Number' className='contact-input' />
                    </div>
                    <button type='submit' className='contact-submit'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Contact;
