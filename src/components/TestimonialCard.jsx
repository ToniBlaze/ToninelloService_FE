import { Card } from 'react-bootstrap';
import { Star, Users } from 'lucide-react';

export const TestimonialCard = ({ rating, text, author, location }) => {
	
  const stars = Array.from({ length: rating }, (_, i) => (
    <Star key={i} className="text-warning me-1" fill="currentColor" strokeWidth={1.5} />
  ));

  return (
    <Card className="h-100 shadow-sm">
      <Card.Body className="d-flex flex-column">
        <div className="mb-3">
          {stars}
        </div>
        <Card.Text className="text-muted flex-grow-1">
          “{text}”
        </Card.Text>
        <div className="d-flex align-items-center mt-4">
          <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
            <Users className="text-primary" size={20} />
          </div>
          <div>
            <div className="fw-semibold">{author}</div>
            <small className="text-secondary">{location}</small>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
