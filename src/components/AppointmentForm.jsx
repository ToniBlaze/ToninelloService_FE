import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import FormInput from "./FormInput";
import FileUpload from "./FileUpload";

const AppointmentForm = () => {
  return (
    <section id="appuntamento" className="bg-light py-5 px-5">
      <div className="px-5">
        <div className="text-center mb-5">
          <h3 className="fw-bold">Prenota il tuo Intervento</h3>
          <p className="text-muted">
            Compila il form per richiedere un preventivo gratuito o prenotare un
            intervento
          </p>
        </div>
        <Form>
          <Row className="mb-3">
            <Col md={6}>
              <FormInput
                label="Nome e Cognome *"
                name="nome"
                placeholder="Il tuo nome completo"
                required
              />
            </Col>
            <Col md={6}>
              <FormInput
                label="Telefono *"
                name="telefono"
                placeholder="+39 333 123 4567"
                type="tel"
                required
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <FormInput
                label="Email"
                name="email"
                placeholder="tua@email.com"
                type="email"
              />
            </Col>
            <Col md={6}>
              <Form.Group controlId="servizio">
                <Form.Label>Tipo di Servizio *</Form.Label>
                <Form.Select required>
                  <option value="">Seleziona il servizio</option>
                  <option value="elettricista">Servizi Elettrici</option>
                  <option value="idraulico">Servizi Idraulici</option>
                  <option value="muratore">Opere Murarie</option>
                  <option value="montatore">Montaggio Mobili</option>
                  <option value="meccanico">Riparazioni Meccaniche</option>
                  <option value="imbianchino">Imbiancatura</option>
                  <option value="altro">Altro</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <FormInput
                label="Data Preferita"
                name="data"
                type="date"
                min="2025-07-17"
              />
            </Col>
            <Col md={6}>
              <FormInput label="Ora Preferita" name="ora" type="time" />
            </Col>
          </Row>

          <FormInput
            label="Indirizzo Intervento *"
            name="indirizzo"
            placeholder="Via, numero civico, città"
            required
          />

          <Form.Group className="mb-3" controlId="descrizione">
            <Form.Label>Descrizione del Problema *</Form.Label>
            <Form.Control
              as="textarea"
              name="descrizione"
              rows={4}
              required
              placeholder="Descrivi dettagliatamente il problema o il lavoro da svolgere"
            />
          </Form.Group>

          <FileUpload />

          <Form.Group className="mb-4" controlId="note">
            <Form.Label>Note Aggiuntive</Form.Label>
            <Form.Control
              as="textarea"
              name="note"
              rows={3}
              placeholder="Eventuali note o richieste particolari"
            />
          </Form.Group>

          <Button type="submit" variant="primary" className="w-100">
            Invia Richiesta
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default AppointmentForm;
