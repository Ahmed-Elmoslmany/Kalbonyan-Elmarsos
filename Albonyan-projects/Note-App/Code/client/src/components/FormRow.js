import React from 'react'

function FormRow({type, name, value, handleChange, labelText}) {
  return (
    <div className='form-row'>
        <label className="form-label" htmlFor={name}>
            {labelText || name}
          </label>
          <input
            type={type}
            value={value}
            name={name}
            onChange={handleChange}
            className="form-input"
          />
    </div>
  )
}

export default FormRow