import React from 'react';

function InterestsSection({ interests, onChange, onAdd }) {
  return (
    <div>
      {interests.map((interest, index) => (
        <div key={index} className="form-group">
          <label htmlFor={`interest-${index}`} className='form-label'>Interest</label>
          <input
            type='text'
            name='interest'
            id={`interest-${index}`}
            placeholder='Interest'
            className='form-input'
            value={interest}
            onChange={(e) => onChange(index, '', e.target.value, 'interests')}
          />
        </div>
      ))}
      <button type="button" onClick={onAdd}>Add Interest</button>
    </div>
  );
}

export default InterestsSection;
