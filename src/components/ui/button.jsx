import React from 'react'

export const Button = ({ children, ...props }) => (
  <button
    {...props}
    style={{
      backgroundColor: '#007bff',
      color: 'white',
      padding: '0.75rem 1.5rem',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '1rem'
    }}
  >
    {children}
  </button>
)
