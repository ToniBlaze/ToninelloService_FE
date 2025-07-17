import React from 'react'

export const Card = ({ children }) => (
  <div style={{
    background: 'white',
    borderRadius: '8px',
    padding: '1rem',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  }}>
    {children}
  </div>
)

export const CardHeader = ({ children }) => (
  <div style={{ marginBottom: '1rem' }}>
    {children}
  </div>
)

export const CardTitle = ({ children }) => (
  <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{children}</h3>
)

export const CardDescription = ({ children }) => (
  <p style={{ fontSize: '0.9rem', color: '#555' }}>{children}</p>
)

export const CardContent = ({ children }) => (
  <div>{children}</div>
)
