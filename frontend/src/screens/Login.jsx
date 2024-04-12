import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate(); // Use useNavigate hook for navigation
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    const response = await fetch("http://localhost:5000/api/validateuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: formData.email, password: formData.password })
    });

    const json = await response.json()
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials")
    }
    else {
      navigate("/"); // Navigate to root path on valid login using useNavigate hook
    }

    // Reset form fields
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <Container className="mt-5">
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
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
        
        <Button className="mt-3" variant="primary" type="submit">
          Login
        </Button>

      </Form>

      <div className="mt-3">
        <Link to="/signup" style={{ textDecoration: 'none'}}>I'm a new user</Link>
      </div>

    </Container>
  );
};

export default Login;
