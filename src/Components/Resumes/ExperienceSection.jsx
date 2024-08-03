import React from 'react';

function ExperienceSection({ experience, onChange, onAdd }) {
  return (
    <div>
      {experience.map((exp, index) => (
        <div key={index} className="form-group">
          <label htmlFor={`jobTitle-${index}`} className='form-label'>Job Title</label>
          <input
            type='text'
            name='jobTitle'
            id={`jobTitle-${index}`}
            placeholder='Job Title'
            className='form-input'
            value={exp.jobTitle}
            onChange={(e) => onChange(index, 'jobTitle', e.target.value, 'experience')}
          />
          <label htmlFor={`company-${index}`} className='form-label'>Company</label>
          <input
            type='text'
            name='company'
            id={`company-${index}`}
            placeholder='Company'
            className='form-input'
            value={exp.company}
            onChange={(e) => onChange(index, 'company', e.target.value, 'experience')}
          />
          <label htmlFor={`expStartDate-${index}`} className='form-label'>Start Date</label>
          <input
            type='date'
            name='startDate'
            id={`expStartDate-${index}`}
            className='form-input'
            value={exp.startDate}
            onChange={(e) => onChange(index, 'startDate', e.target.value, 'experience')}
          />
          <label htmlFor={`expEndDate-${index}`} className='form-label'>End Date</label>
          <input
            type='date'
            name='endDate'
            id={`expEndDate-${index}`}
            className='form-input'
            value={exp.endDate}
            onChange={(e) => onChange(index, 'endDate', e.target.value, 'experience')}
          />
          <label htmlFor={`description-${index}`} className='form-label'>Description</label>
          <textarea
            name='description'
            id={`description-${index}`}
            placeholder='Description'
            className='form-input'
            value={exp.description}
            onChange={(e) => onChange(index, 'description', e.target.value, 'experience')}
          />
        </div>
      ))}
      <button type="button" onClick={onAdd}>Add Experience</button>
    </div>
  );
}

export default ExperienceSection;
