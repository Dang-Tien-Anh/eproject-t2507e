import React from 'react';
import './Footer.css';

const Footer = () => (
    <footer className="footer-section bg-light text-dark pt-5 pb-3 mt-5">
        <div className="container">
            <div className="row">
                <div className="col-md-3 mb-4">
                    <h6 className="fw-bold mb-3">HEALTH SOLUTIONS</h6>
                    <ul className="list-unstyled small">
                        <li>Alzheimer's Disease</li>
                        <li>Diabetes Help Center</li>
                        <li>Learn About Triglycerides</li>
                        <li>Vaccine Questions?</li>
                        <li>Rheumatoid Arthritis?</li>
                    </ul>
                </div>
                <div className="col-md-3 mb-4">
                    <h6 className="fw-bold mb-3">RECENT POSTS</h6>
                    <ul className="list-unstyled small">
                        <li>Proin fermentum ut massa at mauris suscipit mattis. Proin lorem lorem...</li>
                        <li className="text-muted">Admin • Nov 23 2013</li>
                    </ul>
                </div>
                <div className="col-md-3 mb-4">
                    <h6 className="fw-bold mb-3">LOCATION MAP</h6>
                    <div style={{ width: '100%', height: '120px', background: '#222', borderRadius: '6px', overflow: 'hidden' }}>
                        <iframe
                            title="location-map"
                            src="https://www.openstreetmap.org/export/embed.html?bbox=-76.6122%2C39.2904%2C-76.6122%2C39.2904&amp;layer=mapnik"
                            style={{ width: '100%', height: '120px', border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <h6 className="fw-bold mb-3">CONTACT INFO</h6>
                    <ul className="list-unstyled small">
                        <li>789 St. East Madison St<br />Baltimore, MD, USA</li>
                        <li>Phone: +1 202 398 2345</li>
                        <li>Email: youremail@somesmail.com</li>
                        <li>www.gmgh.com</li>
                    </ul>
                </div>
            </div>
            <div className="text-center small mt-4">
                &copy; {new Date().getFullYear()} Soul Medic. All rights reserved.
            </div>
        </div>
    </footer>
);

export default Footer;
