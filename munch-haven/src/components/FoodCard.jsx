import React from 'react'
import './styles/FoodCard.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function FoodCard() {
    return (
        <Card className="card-body">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    This is some very important card text
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
            </Card.Body>
        </Card>)
}
