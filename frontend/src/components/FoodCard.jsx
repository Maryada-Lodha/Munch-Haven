import React, { useState } from 'react';
import './styles/FoodCard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useDispatchCart, useCart } from '../context/cart_context';

export default function FoodCard({ food }) {
  let data = useCart();
  let dispatch = useDispatchCart();

  const [size, setSize] = useState("");
  const [qty, setQty] = useState(1);

  function handleSize(e) {
    setSize(e.target.value);
  }

  function handleQty(e) {
    setQty(e.target.value);
  }

  const addToCart = async () => {
    if (size && qty > 0) {
      const price = food.options[0][size] * qty;
      const existingItem = data.find(item => item.id === food._id && item.size === size);

      if (existingItem) {
        await dispatch({type: "Update_Item", id: food._id, size: size, qty: parseInt(qty), price: price});
      } else {
        await dispatch({type: "Add_to_Cart", id: food._id, name: food.name, size: size, qty: parseInt(qty), price: price, img: food.img});
      }
    } else {
      alert("Please select a size and quantity greater than 0");
    }
  }

  let priceOptions = Object.keys(food.options[0]);

  return (
    <Card className="card-body">
      <Card.Img variant="top" src={food.img} style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{food.name}</Card.Title>
        <Card.Text>{food.description}</Card.Text>
        <div className="d-flex align-items-center mb-3">
          <Form.Label className="me-3">Options</Form.Label>
          <Form.Select aria-label="Options" style={{ width: '150px' }} onChange={handleSize}>
            {priceOptions.map((data, index) => (
              <option key={index} value={data}>{data}</option>
            ))}
          </Form.Select>
        </div>
        <div className="d-flex align-items-center mb-3">
          <Form.Label className="me-3">Quantity</Form.Label>
          <Form.Control type="number" placeholder="1" min={0} style={{ width: '70px' }} onChange={handleQty} />
        </div>
        <Button variant="success" onClick={addToCart}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}
