import React from 'react'

export const Input = ({ ...props }) => (
  <input
    {...props}
    style={{
      padding: '0.5rem',
      borderRadius: '4px',
      border: '1px solid #ccc',
      fontSize: '1rem'
    }}
  />
)
