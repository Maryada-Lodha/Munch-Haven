import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    geolocation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Sending data to the backend API
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: formData.name, email: formData.email, password: formData.password, location: formData.geolocation })
    });

    const json = await response.json()
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials")
    }

    // Reset form fields
    setFormData({
      name: '',
      email: '',
      password: '',
      geolocation: '',
    });
  };

  return (
    <Container className="mt-5">

      <h2>Sign Up</h2>

      <Form onSubmit={handleSubmit}>

        <Form.Group className="mt-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label>Geolocation</Form.Label>
          <Form.Control
            type="text"
            name="geolocation"
            value={formData.geolocation}
            onChange={handleChange}
            placeholder="Geolocation"
            required
          />
        </Form.Group>

        <Button className="mt-5" variant="primary" type="submit">
          Sign Up
        </Button>

      </Form>

      <div className="mt-3">
        <Link to="/login" style={{ textDecoration: 'none'}}>Already a user</Link>
      </div>

    </Container>
  );
};

export default Signup;
