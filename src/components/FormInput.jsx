import React from "react";
import { Form } from "react-bootstrap";

const FormInput = ({ label, type = "text", required = false, name, placeholder, ...rest }) => (
  <Form.Group controlId={name} className="mb-3">
    <Form.Label>{label}</Form.Label>
    <Form.Control
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      {...rest}
    />
  </Form.Group>
);

export default FormInput;
