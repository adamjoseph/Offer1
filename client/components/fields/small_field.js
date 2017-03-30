import React from 'react';

//field is used on form/page4
const smallField = ({ input, label, type, meta: { touched, error } }) => (
  <div className={`field ${touched && error ? 'error' : ''}`}>
    <label>{label}</label>
      <input {...input} className="small-input" type={type}/>
  </div>
)

export default smallField
