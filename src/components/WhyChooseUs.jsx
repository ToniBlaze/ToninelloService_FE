import { Container, Row, Col, Card } from "react-bootstrap";
import { Shield, Clock, Award } from "lucide-react";

export function WhyChooseUs() {
  return (
    <section className="py-5 mb-5 bg-white">
      <Container>
        <div className="text-center mb-5">
          <h3 className="fw-bold text-dark mb-3">Perché Scegliere Toninello Service</h3>
        </div>

        <Row className="g-4">
          {/* BOX 1 */}
          <Col md={4}>
            <Card className="border-0 text-center bg-transparent">
              <div className="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: "64px", height: "64px" }}>
                <Shield size={32} className="text-primary" />
              </div>
              <Card.Body>
                <Card.Title className="fs-5 fw-semibold mb-2">Professionalità Garantita</Card.Title>
                <Card.Text className="text-muted">
                  Lavoratore autonomo con P.IVA regolare, assicurato e qualificato
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* BOX 2 */}
          <Col md={4}>
            <Card className="border-0 text-center bg-transparent">
              <div className="rounded-circle bg-warning bg-opacity-10 d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: "64px", height: "64px" }}>
                <Clock size={32} className="text-warning" />
              </div>
              <Card.Body>
                <Card.Title className="fs-5 fw-semibold mb-2">Rapidità di Intervento</Card.Title>
                <Card.Text className="text-muted">
                  Pronto intervento per emergenze e programmazione flessibile
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* BOX 3 */}
          <Col md={4}>
            <Card className="border-0 text-center bg-transparent">
              <div className="rounded-circle bg-success bg-opacity-10 d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: "64px", height: "64px" }}>
                <Award size={32} className="text-success" />
              </div>
              <Card.Body>
                <Card.Title className="fs-5 fw-semibold mb-2">Garanzia sui Lavori</Card.Title>
                <Card.Text className="text-muted">
                  Tutti i nostri interventi sono garantiti e certificati
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
