import React from 'react';

//this field used on form/page2
const labeledField = ({ input, label, type, max, info, meta: { touched, error, warning } }) => (
  <div className={`field ${touched && error ? 'error' : ''}`}>
    <label>{label}</label>
    <div className=''>
      <input {...input} placeholder={label} type={type} maxLength={max}/>
      <div className="ui pointing label">
        {info}
      </div>
    </div>
  </div>
)

export default labeledField
