// src/components/HeroSection.jsx
import { Container, Row, Col, Button } from "react-bootstrap";
import { Calendar, MessageCircle } from "lucide-react";
import "../style/hero.css";
import elettricistaImg from "../assets/images/elettricista.jpg";

export function HeroSection() {
  return (
    <section id="hero_ctn" className="hero-gradient text-white">
      <Container fluid>
        <div className="d-flex align-items-center justify-content-evenly">

          {/* Testo a sinistra */}
          <Col md={6} className="mb-4 mb-md-0 animate-fade-in">
            <h2 className="display-5 fw-bold mb-4">
              Il tuo Ciapinaro di fiducia a Bologna
            </h2>
            <p className="fs-5 mb-4 text-light">
              Elettricista, Idraulico, Muratore e molto altro – Servizio
              professionale e veloce per ogni esigenza di casa
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3">
              <Button variant="warning" className="text-white d-flex align-items-center gap-2">
                <Calendar size={20} />
                Prenota Intervento
              </Button>
              <Button
                variant="outline-light"
                className="d-flex align-items-center gap-2"
              >
                <MessageCircle size={20} />
                Contatta su WhatsApp
              </Button>
            </div>
          </Col>

          {/* Immagine a destra */}
          <Col md={5} className="animate-slide-up">
            <img
              src={elettricistaImg}
              alt="Elettricista professionale al lavoro"
              className="img-fluid rounded shadow-lg object-fit-cover"
              style={{ height: "350px", width: "100%", objectFit: "cover" }}
            />
          </Col>

        </div>
      </Container>
    </section>
  );
}
