import React from "react";

function CoursesSection({ courses, onChange, onAdd }) {
    return(
        <div>
            {courses.map((course, index) => (
                <div key={index} className="form-group">
                    <label htmlFor={`courseName-${index}`} className="form-label">Course Name</label>
                    <input 
                    type="text"
                    name="name"
                    id={`courseName-${index}`}
                    placeholder="Course Name"
                    className="form-input"
                    value={course.name}
                    onChange={(e) => onChange(index, 'name', e.target.value, 'courses')}
                    />
                    <label htmlFor={`courseInstitution-${index}`} className='form-label'>Institution</label>
                    <input
                      type='text'
                      name='institution'
                      id={`courseInstitution-${index}`}
                      placeholder='Institution'
                      className='form-input'
                      value={course.institution}
                      onChange={(e) => onChange(index, 'institution', e.target.value, 'courses')}
                    />
                    <label htmlFor={`courseCompletionDate-${index}`} className='form-label'>Completion Date</label>
                    <input
                      type='date'
                      name='completionDate'
                      id={`courseCompletionDate-${index}`}
                      className='form-input'
                      value={course.completionDate}
                      onChange={(e) => onChange(index, 'completionDate', e.target.value, 'courses')}
                    />
                </div>
            ))}
            <button type="button" onClick={onAdd}>Add Courses</button>
        </div>
    );
}

export default CoursesSection;