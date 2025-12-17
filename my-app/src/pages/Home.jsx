import partner1 from '../images/partner1.png';
import partner2 from '../images/partner2.png';
import partner3 from '../images/partner3.png';
import partner4 from '../images/partner4.png';
import './WhyUs.css';
import './Home.css';
import Footer from '../components/Footer';


import React from 'react';
import NavBar from '../components/NavBar';
import DoctorLists from '../components/DoctorLists';
import PartnersList from '../components/PartnersList';
import { Container, Row, Col, Button, Card, Form, Accordion, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import icon1 from '../images/icon-1.png';
import icon2 from '../images/icon-2.png';
import icon3 from '../images/icon-3.png';
import icon4 from '../images/icon-4.png';
import icon5 from '../images/icon-5.png';
import icon6 from '../images/icon-6.png';


const Home = () => {
    return (
        <>

            <NavBar />

            {/* Carousel Section */}
            <Carousel className="">
                <Carousel.Item>
                    <img className="d-block w-100 carousel-img" src="https://www.mua.edu/uploads/sites/10/2023/02/istock-482499394.webp" alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 carousel-img" src="https://max-website20-images.s3.ap-south-1.amazonaws.com/Types_of_Doctors_1c5efbe677.jpg" alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 carousel-img" src="https://www.onlinemeded.com/hubfs/Facts%20About%20Doctors.png" alt="Third slide" />
                </Carousel.Item>
            </Carousel>

            {/* Three Features Section */}
            <section className="py-5 bg-white">
                <Container>
                    <Row className="text-center">
                        <Col md={4} className="mb-4">
                            <img src={icon1} alt="Advanced Technology" className="feature-icon" />
                            <h4 className="text-uppercase fw-bold">Advanced Technology</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod risus a lorem viverra elementum.</p>
                        </Col>
                        <Col md={4} className="mb-4">
                            <img src={icon2} alt="Healthcare Solutions" className="feature-icon" />
                            <h4 className="text-uppercase fw-bold">Healthcare Solutions</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod risus a lorem viverra elementum.</p>
                        </Col>
                        <Col md={4} className="mb-4">
                            <img src={icon3} alt="24/7 Availability" className="feature-icon" />
                            <h4 className="text-uppercase fw-bold">24/7 Availability</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod risus a lorem viverra elementum.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* FAQ and Why Us Section */}
            <section className="py-5 bg-light">
                <Container>
                    <Row>
                        <Col md={6}>
                            <h3 className="mb-4">FAQ's</h3>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What is the difference between lease and licence agreement?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>How ownership of property is acquired by a person?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Can a registered will be rectified or changed?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Is the certified copy of a registered will available to any body?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                        <Col md={6}>
                            <h3 className="mb-4">Why Us?</h3>
                            <ul className="whyus-list">
                                <li>
                                    <img src={icon4} alt="Great Infrastructure" className="whyus-icon" />
                                    <div>
                                        <div className="whyus-title">Great Infrastructure</div>
                                        <div>Modern facilities and advanced equipment for the best care.</div>
                                    </div>
                                </li>
                                <li>
                                    <img src={icon5} alt="24/7 Ambulance Services" className="whyus-icon" />
                                    <div>
                                        <div className="whyus-title">24/7 Ambulance Services</div>
                                        <div>Immediate response and support for all emergencies, any time.</div>
                                    </div>
                                </li>
                                <li>
                                    <img src={icon6} alt="Cutting Edge Technology" className="whyus-icon" />
                                    <div>
                                        <div className="whyus-title">Cutting Edge Technology</div>
                                        <div>Utilizing the latest medical innovations for accurate diagnosis and treatment.</div>
                                    </div>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Doctor Profile Section */}

            <section className="py-5 bg-white">
                <Container>
                    <Row className="align-items-center">
                        <Col md={4} className="text-center mb-4 mb-md-0">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZDqJZtBHSDkmMSZ6cPC2xf7ZsCe1CYIJopw&s" alt="Dr. John Smith" className="doctor-img" />
                            <h5 className="mt-3">Dr. John Smith (MD)</h5>
                            <p className="text-muted">Medicine, Surgery</p>
                        </Col>
                        <Col md={8}>
                            <h4 className="mb-3">How to live a healthy lifestyle?</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <ul className="list-unstyled">
                                <li>✓ Sleep and recovery about the things you cannot help</li>
                                <li>✓ Eat healthy, work harder. Go gardening</li>
                                <li>✓ Exercise routine can lift your mood thought on one</li>
                                <li>✓ Focus on the good things that excite</li>
                                <li>✓ Eat healthy, work harder. Go gardening</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>

            <DoctorLists />

            {/* Blog Section */}
            <section className="py-5 bg-white">
                <Container>
                    <h3 className="mb-5">From the Blog</h3>
                    <Row>
                        <Col md={4} className="mb-4">
                            <Card>
                                <img src="https://image.vietnamnews.vn/uploadvnnews/Article/2018/2/26/0116342855PM.jpg" alt="Proin fermentum ut massa at" style={{ height: '200px', objectFit: 'cover', width: '100%' }} />
                                <Card.Body>
                                    <Card.Title>Proin fermentum ut massa at</Card.Title>
                                    <p className="text-muted small">Admin • 2 months ago</p>
                                    <Card.Text>Proin fermentum ut massa at mauris suscipit mattis. Proin lorem lorem...</Card.Text>
                                    <Button variant="link" style={{ color: '#3498db' }}>READ MORE →</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqTc-A92QJf_l1dtO1yE5KTDTz7TX41BZDMw&s" alt="Curabitur lobortis risus at" style={{ height: '200px', objectFit: 'cover', width: '100%' }} />
                                <Card.Body>
                                    <Card.Title>Curabitur lobortis risus at</Card.Title>
                                    <p className="text-muted small">Admin • 2 months ago</p>
                                    <Card.Text>Curabitur lobortis risus at mauris suscipit mattis. Curabitur lorem lorem...</Card.Text>
                                    <Button variant="link" style={{ color: '#3498db' }}>READ MORE →</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card>
                                <img src="https://media.sciencephoto.com/c0/37/67/99/c0376799-800px-wm.jpg" alt="Heart Rate Predicts risk" style={{ height: '200px', objectFit: 'cover', width: '100%' }} />
                                <Card.Body>
                                    <Card.Title>Heart Rate Predicts risk</Card.Title>
                                    <p className="text-muted small">Admin • 2 months ago</p>
                                    <Card.Text>Heart Rate risk at mauris suscipit mattis. Heart lorem lorem ipsum...</Card.Text>
                                    <Button variant="link" style={{ color: '#3498db' }}>READ MORE →</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Top Trends - Health Talks Section */}
            <section className="py-5 bg-light">
                <Container>
                    <h4 className="mb-4">Top Trends - Health Talks</h4>

                    <Row className="align-items-start">
                        {/* Left: list */}
                        <Col md={8} sm={12}>
                            <ul className="top-trends-list">
                                <li>Breast Cancer Types</li>
                                <li>Medical Eligibility</li>
                                <li>Medical Facility</li>
                                <li>Yellow Fever</li>
                                <li>Gonorrhea</li>
                                <li>No Vaccine</li>
                                <li>Gluten-Free Diet</li>
                                <li>HIV / AIDS</li>
                                <li>Asthma in Cold Weather</li>
                                <li>Insurance Deductions</li>
                                <li>Pumpkin Health Benefits</li>
                                <li>Diet-related Syndromes</li>
                            </ul>
                        </Col>

                        {/* Right: single image */}
                        <Col md={4} sm={12} className="d-flex justify-content-center">
                            <div className="trend-image-wrapper">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZDqJZtBHSDkmMSZ6cPC2xf7ZsCe1CYIJopw&s"
                                    alt="Health trends illustration"
                                    className="trend-image"
                                    loading="lazy"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            );

            {/* Partners Section */}
            {/* <section className="py-5 bg-light">
                <Container>
                    <h3 className="text-center mb-5">Our Partners</h3>
                    <Row className="text-center">
                        <Col md={3} className="mb-4">
                            <img src={partner1} alt="Partner 1" className="partner-img" />
                        </Col>
                        <Col md={3} className="mb-4">
                            <img src={partner2} alt="Partner 2" className="partner-img" />
                        </Col>
                        <Col md={3} className="mb-4">
                            <img src={partner3} alt="Partner 3" className="partner-img" />
                        </Col>
                        <Col md={3} className="mb-4">
                            <img src={partner4} alt="Partner 4" className="partner-img" />
                        </Col>
                    </Row>
                </Container>
            </section> */}
            <PartnersList />


            <Footer />
        </>
    );
};


export default Home;