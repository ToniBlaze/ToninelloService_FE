import { Container, Row, Col } from 'react-bootstrap';
import { TestimonialCard } from './TestimonialCard';
import { testimonials } from '../data/testimonials';

export const TestimonialsSection = () => (
  <section className="py-5 bg-white">
    <Container>
      <div className="text-center mb-5">
        <h3 className="fw-bold">Cosa Dicono i Nostri Clienti</h3>
      </div>
      <Row className="g-4">
        {testimonials.map(item => (
          <Col key={item.id} md={4}>
            <TestimonialCard
              rating={item.rating}
              text={item.text}
              author={item.author}
              location={item.location}
            />
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);