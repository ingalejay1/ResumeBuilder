// components/EducationSection.jsx

import React from 'react';

function EducationSection({ education, onChange, onAdd }) {
  return (
    <div>
      {education.map((edu, index) => (
        <div key={index} className="form-group">
          <label htmlFor={`institution-${index}`} className='form-label'>Institution</label>
          <input
            type='text'
            name='institution'
            id={`institution-${index}`}
            placeholder='Institution'
            className='form-input'
            value={edu.institution}
            onChange={(e) => onChange(index, 'institution', e.target.value, 'education')}
          />
          <label htmlFor={`degree-${index}`} className='form-label'>Degree</label>
          <input
            type='text'
            name='degree'
            id={`degree-${index}`}
            placeholder='Degree'
            className='form-input'
            value={edu.degree}
            onChange={(e) => onChange(index, 'degree', e.target.value, 'education')}
          />
          <label htmlFor={`startDate-${index}`} className='form-label'>Start Date</label>
          <input
            type='date'
            name='startDate'
            id={`startDate-${index}`}
            className='form-input'
            value={edu.startDate}
            onChange={(e) => onChange(index, 'startDate', e.target.value, 'education')}
          />
          <label htmlFor={`endDate-${index}`} className='form-label'>End Date</label>
          <input
            type='date'
            name='endDate'
            id={`endDate-${index}`}
            className='form-input'
            value={edu.endDate}
            onChange={(e) => onChange(index, 'endDate', e.target.value, 'education')}
          />
        </div>
      ))}
      <button type="button" onClick={onAdd}>Add Education</button>
    </div>
  );
}

export default EducationSection;
