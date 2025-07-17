import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card.jsx';
import { Badge } from './ui/badge.jsx';
import { CheckCircle } from 'lucide-react';
import '../style/serviceSection.css';

import { services } from '../data/services.js'


export function ServicesSection() {
  return (
    <section className="section-padding">
      <Container fluid>
        <div className="text-center mb-5">
          <h3 className="services-title">I Nostri Servizi</h3>
          <p className="services-subtitle">
            Offriamo una gamma completa di servizi per la casa con professionalità e rapidità
          </p>
        </div>
        <Row>
          {services.map((service) => (
            <Col key={service.id} md={6} lg={4} className="mb-4">
              <Card className="service-card h-100">
                {/* Immagine + icona in overlay */}
                <div className="position-relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-img"
                  />
                  <div className="icon-overlay">
                    {service.icon}
                  </div>
                </div>

                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="features-list">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="d-flex align-items-center mb-2">
                        <CheckCircle className="feature-icon" />
                        <span className="feature-text">{feat}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
