import React from 'react';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className={`field ${touched && error ? 'error' : ''}`}>
    <label>{label}</label>
    <div className=''>
      <input {...input} placeholder={label} type={type}/>
      {/* {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))} */}
    </div>
  </div>
)

export default renderField
