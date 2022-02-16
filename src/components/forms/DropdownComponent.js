
import React from 'react'

const DropdownComponent = (props) => {
  const { name, labelName, value, onChange, options } = props
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label" required>
        {labelName}
        <select name={name} value={value} onChange={onChange}>
          {options.map(option => {
            return(
              <option key={option.text} value={option.value}>{option.text}</option>
            )
          })}
        </select>
      </label>
    </div>
  )
}

export default DropdownComponent