import React from 'react';
import './styles/FoodCard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export default function FoodCard({ food }) {

  let priceOptions = Object.keys(food.options[0])

  return (
    <Card className="card-body">
      <Card.Img variant="top" src={food.img} style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{food.name}</Card.Title>
        <Card.Text>{food.description}</Card.Text>
        <div className="d-flex align-items-center mb-3">
          <Form.Label className="me-3">Options</Form.Label>
          <Form.Select aria-label="Options" style={{ width: '150px' }}>
            {priceOptions.map((data, index) => (
              <option key={index} value={data}>{data}</option>
            ))}
          </Form.Select>
        </div>
        <div className="d-flex align-items-center mb-3">
          <Form.Label className="me-3">Quantity</Form.Label>
          <Form.Control type="number" placeholder="1" min={0} style={{ width: '70px' }} />
        </div>
        <Button variant="success">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}
