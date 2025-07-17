import { Navbar, Container, Button } from "react-bootstrap";
import { IconBox } from "./iconBox";
import "../style/navbar.css";

import {
  Zap,
  Wrench,
  Hammer,
  Settings,
  CheckCircle,
  Paintbrush,
  Phone,
  MessageCircle,
} from "lucide-react";

export function MyNavbar() {
  return (
    <Navbar
      bg="white"
      expand="lg"
      fixed="top"
      className="border-bottom shadow-sm">

      <Container className="d-flex justify-content-between align-items-center">

        {/* Brand a sinistra */}
        <Navbar.Brand href="#home" className="fw-bold">
          <div className="d-flex align-items-center">

            <IconBox icon={Wrench} />

            <div className="ps-3">
              <h5 id="navbar_title" className="m-0">
                <b>Toninello Service</b>
              </h5>
              <p id="navbar_subtitle" className="text-secondary m-0">
                Il tuo Ciapinaro di fiducia
              </p>
            </div>

          </div>
        </Navbar.Brand>

        {/* Contenitore a destra */}
        <div className="d-flex align-items-center gap-3">

          {/* Telefono */}
          <div className="d-flex align-items-center text-secondary">
            <Phone size={20} className="me-2" />
            <span className="fw-semibold">+39 333 123 4567</span>
          </div>

          {/* Bottone WhatsApp */}
          <Button variant="success" className="d-flex align-items-center" style={{ gap: "0.5rem" }}>
            <MessageCircle size={18} />
            WhatsApp
          </Button>
          
        </div>

      </Container>
    </Navbar>
  );
}
