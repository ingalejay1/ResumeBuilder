import React from 'react';

function CertificatesSection({ certificates, onChange, onAdd }) {
  return (
    <div>
      {certificates.map((cert, index) => (
        <div key={index} className="form-group">
          <label htmlFor={`certificateName-${index}`} className='form-label'>Certificate Name</label>
          <input
            type='text'
            name='name'
            id={`certificateName-${index}`}
            placeholder='Certificate Name'
            className='form-input'
            value={cert.name}
            onChange={(e) => onChange(index, 'name', e.target.value, 'certificates')}
          />
          <label htmlFor={`certificateInstitution-${index}`} className='form-label'>Institution</label>
          <input
            type='text'
            name='institution'
            id={`certificateInstitution-${index}`}
            placeholder='Institution'
            className='form-input'
            value={cert.institution}
            onChange={(e) => onChange(index, 'institution', e.target.value, 'certificates')}
          />
          <label htmlFor={`certificateDate-${index}`} className='form-label'>Date</label>
          <input
            type='date'
            name='date'
            id={`certificateDate-${index}`}
            className='form-input'
            value={cert.date}
            onChange={(e) => onChange(index, 'date', e.target.value, 'certificates')}
          />
        </div>
      ))}
      <button type="button" onClick={onAdd}>Add Certificate</button>
    </div>
  );
}

export default CertificatesSection;
