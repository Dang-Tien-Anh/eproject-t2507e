import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import './auth.css';

const Login = () => {
    return (
        <>
            <NavBar />
            <section className="auth-section">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={6} lg={5}>
                            <Card className="auth-card">
                                <h3 className="auth-title">Login to Your Account</h3>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group className="mb-4" controlId="formPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Button className="w-100 fw-bold btn-custom-blue" type="submit">
                                        Login
                                    </Button>
                                    <div className="text-center mt-3">
                                        Don't have an account? <a href="/signup" className="auth-link">Register</a>
                                    </div>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    );
};

export default Login;
