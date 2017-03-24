import React from 'react';

const labeledField = ({ input, label, type, info, meta: { touched, error, warning } }) => (
  <div className={`field ${touched && error ? 'error' : ''}`}>
    <label>{label}</label>
    <div className=''>
      <input {...input} placeholder={label} type={type}/>
      <div className="ui pointing label">
        {info}
      </div>
    </div>
  </div>
)

export default labeledField
