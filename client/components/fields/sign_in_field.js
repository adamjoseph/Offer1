import React from 'react';

//field is used on landing_pages/sign_in and set_password
const signInField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className={`field ${touched && error ? 'error' : ''}`}>
      <input {...input} placeholder={label} type={type}/>
  </div>
)

export default signInField
