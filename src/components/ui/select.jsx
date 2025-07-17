import React from 'react'

export const Select = ({ children, name, value, onValueChange }) => (
  <select
    name={name}
    value={value}
    onChange={(e) => onValueChange(e.target.value)}
    style={{
      padding: '0.5rem',
      borderRadius: '4px',
      border: '1px solid #ccc',
      fontSize: '1rem'
    }}
  >
    {children}
  </select>
)

export const SelectTrigger = ({ children }) => <>{children}</>
export const SelectValue = ({ placeholder }) => <option disabled>{placeholder}</option>
export const SelectContent = ({ children }) => <>{children}</>
export const SelectItem = ({ children, value }) => <option value={value}>{children}</option>
