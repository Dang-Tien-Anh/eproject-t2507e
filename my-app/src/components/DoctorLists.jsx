import React, { useEffect, useState } from "react";
import { Carousel, Row, Col, Card } from "react-bootstrap";
import '../assets/css/Lists.css';

/** Inline doctors data (edit here) */
const doctors = [
    { name: "Dr. Sarah Johnson", profession: "Cardiologist", availability: "Mon-Fri, 9am - 5pm", image: "/images/imagedoctor.png" },
    { name: "Dr. Michael Lee", profession: "Neurologist", availability: "Tue-Thu, 10am - 4pm", image: "./images/imagedoctor.png" },
    { name: "Nurse Emily Davis", profession: "Registered Nurse", availability: "Daily, 8am - 6pm", image: "./images/imagedoctor.png" },
    { name: "Dr. Ahmed Khan", profession: "Pediatrician", availability: "Mon-Sat, 9am - 3pm", image: "./images/imagedoctor.png" },
    { name: "Dr. Laura Chen", profession: "Dermatologist", availability: "Wed-Fri, 11am - 6pm", image: "./images/imagedoctor.png" },
    { name: "Nurse James Brown", profession: "Nurse Practitioner", availability: "Daily, 7am - 7pm", image: "./images/imagedoctor.png" },
    { name: "Dr. Priya Patel", profession: "Oncologist", availability: "Mon-Fri, 10am - 4pm", image: "./images/imagedoctor.png" },
    { name: "Dr. David Kim", profession: "Orthopedic Surgeon", availability: "Tue-Sat, 9am - 5pm", image: "./images/imagedoctor.png" },
];

function chunkArray(arr, size) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size));
    return chunks;
}

export default function DoctorsCarousel() {
    const [itemsPerSlide, setItemsPerSlide] = useState(4);

    useEffect(() => {
        function update() {
            const w = window.innerWidth;
            if (w < 576) setItemsPerSlide(1);
            else if (w < 992) setItemsPerSlide(2);
            else setItemsPerSlide(4);
        }
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const slides = chunkArray(doctors, itemsPerSlide);

    return (
        <section className="doctors-section py-4 bg-light">
            <div className="container">
                <h3 className="text-center mb-4">Doctors & Nurses</h3>

                <Carousel indicators={false} interval={5000} pause="hover">
                    {slides.map((group, idx) => (
                        <Carousel.Item key={idx}>
                            <Row className="gx-3 justify-content-center">
                                {group.map((doc, i) => (
                                    <Col key={i} xs={12} sm={6} md={3}>
                                        <Card className="doctor-card h-100 text-center">
                                            <Card.Img variant="top" src={doc.image} alt={doc.name} className="doctor-img" />
                                            <Card.Body>
                                                <Card.Title className="mb-1">{doc.name}</Card.Title>
                                                <Card.Text className="mb-1">{doc.profession}</Card.Text>
                                                <div className="text-muted small">{doc.availability}</div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </section>
    );
}
