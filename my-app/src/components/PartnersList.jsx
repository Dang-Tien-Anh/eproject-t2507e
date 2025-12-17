import React, { useEffect, useState } from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import '../assets/css/Lists.css';

/** Inline partner image paths (edit here) */
const partners = [
    "/images/partner1.png",
    "/images/partner2.png",
    "/images/partner3.png",
    "/images/partner4.png",
    "/images/partner5.png",
    "/images/partner6.png",
    "/images/partner7.png",
    "/images/partner8.png",
];

function chunkArray(arr, size) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size));
    return chunks;
}

export default function PartnersCarousel() {
    const [itemsPerSlide, setItemsPerSlide] = useState(4);

    useEffect(() => {
        function update() {
            const w = window.innerWidth;
            if (w < 576) setItemsPerSlide(1);      // phones
            else if (w < 992) setItemsPerSlide(2); // tablets / iPad
            else setItemsPerSlide(4);              // desktop
        }
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const slides = chunkArray(partners, itemsPerSlide);

    return (
        <section className="partners-section py-4 bg-white">
            <div className="container">
                <h3 className="text-center mb-4">Our Partners</h3>

                <Carousel indicators={false} interval={4000} pause="hover">
                    {slides.map((group, idx) => (
                        <Carousel.Item key={idx}>
                            <Row className="justify-content-center gx-3">
                                {group.map((logo, i) => (
                                    <Col key={i} xs={12} sm={6} md={3} className="d-flex justify-content-center align-items-center">
                                        <div className="partner-wrapper w-100 text-center">
                                            <img src={logo} alt={`Partner ${idx * itemsPerSlide + i}`} className="partner-img" />
                                        </div>
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
