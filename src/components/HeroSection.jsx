// src/components/HeroSection.jsx
import { Container, Row, Col, Button } from "react-bootstrap";
import { Calendar, MessageCircle } from "lucide-react";
import "../style/hero.css";
import elettricistaImg from "../assets/images/elettricista.jpg";

export function HeroSection() {
  return (
    <section id="hero_ctn" className="hero-gradient text-white">
      <Container fluid>
        <div className="d-flex flex-wrap align-items-center justify-content-md-between justify-content-center mx-2 mx-md-5">

          {/* Testo a sinistra */}
          <Col xs={10} md={6} lg={5} className="mb-4 mb-md-0 animate-fade-in mb-5 mb-md-0 pe-3 pe-md-0">
            <h2 className="display-5 fw-bold mb-4">
              Il tuo Ciapinaro di fiducia a Bologna
            </h2>
            <p className="fs-5 mb-4 text-light">
              Elettricista, Idraulico, Muratore e molto altro – Servizio
              professionale e veloce per ogni esigenza di casa
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3">
              <Button id="book_appointment_btn" className="text-white d-flex align-items-center gap-2">
                <Calendar size={20} />
                Prenota Intervento
              </Button>
              <Button variant="outline-light" className="d-flex align-items-center gap-2" >
                <MessageCircle size={20} />
                Contatta su WhatsApp
              </Button>
            </div>
          </Col>

          {/* Immagine a destra */}
          <Col id="hero_image_ctn" xs={10} md={6} className="animate-slide-up">
            <img
              id="hero_image"
              src={elettricistaImg}
              alt="Elettricista professionale al lavoro"
              className="img-fluid rounded shadow-lg object-fit-cover"
            />
          </Col>

        </div>
      </Container>
    </section>
  );
}
