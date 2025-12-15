import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import './auth.css';

const Register = () => {
    return (
        <>
            <NavBar />
            <section className="auth-section">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={6} lg={5}>
                            <Card className="auth-card">
                                <h3 className="auth-title">Create an Account</h3>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formName">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your full name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-4" controlId="formConfirmPassword">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control type="password" placeholder="Confirm Password" />
                                    </Form.Group>
                                    <Button className="w-100 fw-bold btn-custom-blue" type="submit">
                                        Register
                                    </Button>
                                    <div className="text-center mt-3">
                                        Already have an account? <a href="/loginform" className="auth-link">Login</a>
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

export default Register;
