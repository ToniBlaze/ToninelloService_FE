import React from "react";
import { Form } from "react-bootstrap";

const FileUpload = () => (
  <Form.Group className="mb-4">
    <Form.Label>Foto del Problema (opzionale)</Form.Label>
    <div className="text-center border rounded p-4 bg-light">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="gray"
        viewBox="0 0 24 24">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" /></svg>

      <p className="mt-2 text-secondary">Clicca per caricare le foto</p>
      
      <Form.Text className="text-muted">
        PNG, JPG fino a 10MB ciascuna
      </Form.Text>
      <Form.Control type="file" accept="image/*" multiple hidden />
    </div>
  </Form.Group>
);

export default FileUpload;
