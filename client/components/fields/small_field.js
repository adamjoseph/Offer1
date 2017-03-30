import React from 'react';

const smallField = ({ input, label, type, meta: { touched, error } }) => (
  <div className={`field ${touched && error ? 'error' : ''}`}>
    <label>{label}</label>
      <input {...input} className="small-input" type={type}/>
  </div>
)

export default smallField
