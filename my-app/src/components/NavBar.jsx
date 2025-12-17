

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../assets/css/NavBar.css';


const NavBar = () => {
    return (
        <>
            <Navbar bg="white" expand="lg" className="custom-navbar shadow-none border-0">
                <Container className="justify-content-center">
                    <Navbar.Brand href="#home" className="d-flex align-items-center me-5 navbar-logo">
                        <span className="navbar-logo-text">SOUL MEDIC</span>
                        <span className="navbar-logo-dash">–</span>
                        <div className="navbar-logo-sub">We care for you</div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="soulmedic-navbar" />
                    <Navbar.Collapse id="soulmedic-navbar" className="justify-content-center">
                        <Nav className="mx-auto align-items-center nav-center">
                            <Nav.Link href="#home" className="nav-link-custom">HOME</Nav.Link>
                            <Nav.Link href="#doctors" className="nav-link-custom">DOCTORS</Nav.Link>
                            <Nav.Link href="#appointments" className="nav-link-custom">APPOINTMENTS</Nav.Link>
                            <Nav.Link href="#blog" className="nav-link-custom">BLOG</Nav.Link>
                            <Nav.Link href="#events" className="nav-link-custom">EVENTS</Nav.Link>
                            <Nav.Link href="#gallery" className="nav-link-custom">GALLERY</Nav.Link>
                            <Nav.Link href="#contact" className="nav-link-custom">CONTACT</Nav.Link>
                            <Nav.Link href="#shop" className="nav-link-custom">SHOP</Nav.Link>
                        </Nav>
                        <Nav className="ms-2">
                            <Nav.Link href="/loginform" className="nav-link-custom nav-link-special">Login</Nav.Link>
                            <Nav.Link href="/signup" className="nav-link-custom nav-link-special">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="navbar-underline"></div>
        </>
    );
};

export default NavBar;