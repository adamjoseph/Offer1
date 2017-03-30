import React from 'react';

const signInField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className={`field ${touched && error ? 'error' : ''}`}>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && (<label className='field error'>{error}</label>)}
  </div>
)

export default signInField
