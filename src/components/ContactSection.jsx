import { Container, Row, Col, Image } from 'react-bootstrap';
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import { ContactItem } from './ContactItem';

import bolognaImg from '../assets/images/bologna2.jpg';

export const ContactSection = () => (
  <section className="py-5 bg-dark text-white">
    <Container>
      <Row className="align-items-center g-4">
        <Col md={6}>
          <h3 className="display-6 fw-bold mb-4">Contattaci Subito</h3>
          <div>
            <ContactItem Icon={Phone} iconProps={{ size: 24, className: 'text-warning' }}>
              331 948 6672
            </ContactItem>
            <ContactItem Icon={MessageCircle} iconProps={{ size: 24, className: 'text-success' }}>
              +39 331 948 6672 (WhatsApp)
            </ContactItem>
            <ContactItem Icon={Mail} iconProps={{ size: 24, className: 'text-primary' }}>
              toninelloservice@gmail.com
            </ContactItem>
            <ContactItem Icon={MapPin} iconProps={{ size: 24, className: 'text-danger' }}>
              Bologna e Provincia
            </ContactItem>
            <ContactItem Icon={Clock} iconProps={{ size: 24, className: 'text-warning' }}>
              Lun-Ven: 7:00-20:00 | Sab: 8:00-14:00
            </ContactItem>
          </div>
        </Col>

        <Col md={6}>
          <Image
            src={bolognaImg}
            alt="Bologna skyline"
            rounded
            fluid
            style={{ height: 'auto', objectFit: 'cover' }}
            className="shadow"/>
        </Col>

      </Row>
    </Container>
  </section>
);