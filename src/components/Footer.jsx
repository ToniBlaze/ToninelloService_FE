import { Container, Row, Col } from 'react-bootstrap';
import { Wrench } from 'lucide-react';

export const Footer = () => (
	<footer className="bg-dark text-white py-5">
		<Container>
			<Row className="gy-4">
				<Col md={4}>
				<div className="d-flex align-items-center mb-3">
					<div className="d-flex align-items-center justify-content-center bg-primary rounded me-2" style={{ width: '32px', height: '32px' }}>
					<Wrench size={20} className="text-white" />
					</div>
					<span className="fs-5 fw-bold">Toninello Service</span>
				</div>
				<p className="text-secondary">
					Il tuo ciapinaro di fiducia a Bologna per tutti i servizi di casa
				</p>
				</Col>
				<Col md={4}>
				<h5 className="fw-semibold mb-3">Servizi</h5>
				<ul className="list-unstyled text-secondary">
					<li>Elettricista</li>
					<li>Idraulico</li>
					<li>Muratore</li>
					<li>Montatore Mobili</li>
					<li>Meccanico</li>
					<li>Imbianchino</li>
				</ul>
				</Col>
				<Col md={4}>
				<h5 className="fw-semibold mb-3">Informazioni Legali</h5>
				<ul className="list-unstyled text-secondary">
					<li>P.IVA: IT12345678901</li>
					<li>Assicurazione RC attiva</li>
					<li>Camera di Commercio Bologna</li>
				</ul>
				</Col>
			</Row>
			<hr className="border-secondary mt-5" />
			<div className="text-center text-secondary pt-3">
				<p className="mb-0">© 2024 Toninello Service. Tutti i diritti riservati.</p>
			</div>
		</Container>
	</footer>
);