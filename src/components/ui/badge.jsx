import React from "react";

export const Badge = ({ children }) => (
  <span
    style={{
      backgroundColor: "#eee",
      borderRadius: "12px",
      padding: "0.3rem 0.7rem",
      fontSize: "0.75rem",
      color: "#333",
    }}
  >
    {children}
  </span>
);
