import React from 'react';

const renderField = ({ input, label, type, max, meta: { touched, error, warning } }) => (
  <div className={`field ${touched && error ? 'error' : ''}`}>
    <label>{label}</label>
      <input {...input} placeholder={label} type={type} maxLength={max}/>
      {touched && error && (<label className='field error'>{error}</label>)}
  </div>
)

export default renderField
