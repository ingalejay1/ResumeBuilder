import React from 'react'
import './Templates.css'
import Template1 from './template1.webp'
import Template2 from './template2.webp'
import Template3 from './template3.webp'

function Templates() {
  return (
    <div className="templates-container">
        <h1 className='templates-title'>Choose Your Resume Template</h1>
        <div className="templates-grid">
            <div className="template-item">
                <img src={Template1} alt="Template 1" className='template-image'/>
                <button className='template-select-button'>Select Template 1</button>
            </div>
            <div className="template-item">
                <img src={Template2} alt="Template 1" className='template-image'/>
                <button className='template-select-button'>Select Template 2</button>
            </div>
            <div className="template-item">
                <img src={Template3} alt="Template 1" className='template-image'/>
                <button className='template-select-button'>Select Template 3</button>
            </div>
        </div>
    </div>
  )
}

export default Templates