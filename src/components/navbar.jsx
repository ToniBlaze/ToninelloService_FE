import { Navbar, Container } from "react-bootstrap";
import { IconBox } from "./iconBox";
import '../style/navbar.css';


import {
  Zap,
  Wrench,
  Hammer,
  Settings,
  CheckCircle,
  Paintbrush,
} from "lucide-react";

export function MyNavbar() {
  return (
    <Navbar
      bg="white"
      expand="lg"
      fixed="top"
      className="border-bottom shadow-sm"
    >
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">
          	<div className="d-flex align-items-center">
				<IconBox icon={Wrench} />
				<div className="ps-2">
					<h5 id="navbar_title" className="m-0 pb-1"><b>Toninello Service</b></h5>
					<p id="navbar_subtitle" className="text-secondary m-0">Il tuo Ciapinaro di fiducia</p>
				</div>
          	</div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
