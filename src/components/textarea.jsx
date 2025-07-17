import React from 'react'

export const Textarea = ({ ...props }) => (
  <textarea
    {...props}
    style={{
      padding: '0.5rem',
      borderRadius: '4px',
      border: '1px solid #ccc',
      fontSize: '1rem',
      resize: 'vertical'
    }}
  />
)
