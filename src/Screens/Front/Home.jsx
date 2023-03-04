import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Collapse from 'react-bootstrap/Collapse';
import ListGroup from 'react-bootstrap/ListGroup';
import { AnimationOnScroll } from 'react-animation-on-scroll';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import banner from '../../assets/images/banner-image1.png';
import gateway from '../../assets/images/choose.png';
import code from '../../assets/images/code.jpg';
import steps from '../../assets/images/steps-right.png';
import contact from '../../assets/images/contact-gif.gif';
import FadeIn from 'react-fade-in';
import { Link } from "react-router-dom";


const Home = () => {
    const [faq1, setOpen1] = useState(false);
    const [faq2, setOpen2] = useState(false);
    const [faq3, setOpen3] = useState(false);
    const [faq4, setOpen4] = useState(false);
    const [faq5, setOpen5] = useState(false);
    const [faq6, setOpen6] = useState(false);

    const clickfaq1 = () => {
        setOpen1(!faq1);
        setOpen2(false);
        setOpen3(false);
        setOpen4(false);
        setOpen5(false);
        setOpen6(false);
    }

    const clickfaq2 = () => {
        setOpen2(!faq2);
        setOpen1(false);
        setOpen3(false);
        setOpen4(false);
        setOpen5(false);
        setOpen6(false);
    }
    const clickfaq3 = () => {
        setOpen3(!faq3);
        setOpen1(false);
        setOpen2(false);
        setOpen4(false);
        setOpen5(false);
        setOpen6(false);
    }
    const clickfaq4 = () => {
        setOpen4(!faq4);
        setOpen1(false);
        setOpen2(false);
        setOpen3(false);
        setOpen5(false);
        setOpen6(false);
    }
    const clickfaq5 = () => {
        setOpen5(!faq5);
        setOpen1(false);
        setOpen2(false);
        setOpen4(false);
        setOpen3(false);
        setOpen6(false);
    }
    const clickfaq6 = () => {
        setOpen6(!faq6);
        setOpen1(false);
        setOpen2(false);
        setOpen4(false);
        setOpen5(false);
        setOpen3(false);
    }

    return (
        
        <section className="wrapper">
            <div className="banner">
                {/* <img  src={banner}/> */}
                <div className="top-bar">
                    {['xl'].map((expand) => (
                        <Navbar key={expand} expand={expand} className="mb-3" fixed="top">
                            <Container>
                                <Navbar.Brand href="#">Logo</Navbar.Brand>
                                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                                <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                            Offcanvas
                                        </Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <Nav className="flex-grow-1 pe-3 navbar-options"></Nav>
                                        <Nav className="navbar-options">
                                            <Nav.Link href="/">Home</Nav.Link>
                                            <Nav.Link href="#action2">About</Nav.Link>
                                            <Nav.Link href="#action2">Features</Nav.Link>
                                            <Nav.Link href="#action2">Services</Nav.Link>
                                            <Nav.Link href="#action2">Pricing</Nav.Link>
                                            <Nav.Link href="#action2">API</Nav.Link>
                                            <Nav.Link href="#action2">Contact Us</Nav.Link>
                                            <Button variant="outline-success">Register</Button>
                                            <Button variant="outline-success">Login</Button>
                                        </Nav>
                                    </Offcanvas.Body>
                                </Navbar.Offcanvas>
                            </Container>
                        </Navbar>
                    ))}
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="banner-content">
                                    <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                    <Button variant="outline-success" className="api">API Docs</Button>
                                    <Button variant="outline-success" className="example-1" data-wow-duration=".75s" data-wow-delay="2s">Contact Our Team</Button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="banner-image">
                                    <img src={banner} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              
 


                <div>
                    <div className="rupee"><span className="dot" /></div>
                    <div className="rupee"><span className="dot" /></div>
                    <div className="rupee"><span className="dot" /></div>
                    <div className="rupee"><span className="dot" /></div>
                    <div className="rupee"><span className="dot" /></div>
                    <div className="rupee"><span className="dot" /></div>
                    <div className="rupee"><span className="dot" /></div>
                    <div className="rupee"><span className="dot" /></div>

                </div>

            </div>
            <FadeIn>
            <section className="api">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="api-doc">
                             <h3>API & Plugins</h3>
                               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magni, provident rerum id illum at et optio quaerat unde quo! Rerum, molestiae accusantium expedita quaerat temporibus nisi ea quisquam architecto</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magni, provident rerum id illum at et optio quaerat unde quo! Rerum, molestiae accusantium expedita quaerat temporibus nisi ea quisquam architecto</p>
                                <div className="api-doc-link">
                                    <p> <a href="#">Learn More </a> </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="api-code">
                                <img src={code} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </FadeIn>
            <section className="services">
                <div className="container">
                    <div className="services-body">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="services-images">

                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="services-heading">
                                    <h3>Payment Solutions Designed for</h3>
                                </div>
                                <div className="services-content">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="services-blocks">
                                                <h3>eCommerce Platforms</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorum similique, enim aliquam eos obcaecati provident, dolores in porro unde quidem beatae et! Voluptates reprehenderit libero earum atque, omnis tempore?</p>
                                                <div className="services-icon">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="services-blocks">
                                                <h3>SaaS Platforms</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorum similique, enim aliquam eos obcaecati provident, dolores in porro unde quidem beatae et! Voluptates reprehenderit libero earum atque, omnis tempore?</p>
                                                <div className="services-icon">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="services-blocks">
                                                <h3>Service Providers</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorum similique, enim aliquam eos obcaecati provident, dolores in porro unde quidem beatae et! Voluptates reprehenderit libero earum atque, omnis tempore?</p>
                                                <div className="services-icon">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="services-blocks">
                                                <h3>Exporters and Importers</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorum similique, enim aliquam eos obcaecati provident, dolores in porro unde quidem beatae et! Voluptates reprehenderit libero earum atque, omnis tempore?</p>
                                                <div className="services-icon">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="why-choose">
                <div className="choose-heading">
                    <h3>Strong reasons to choose Payment Gateway<AnimationOnScroll initiallyVisible={true} animateIn="animate__flip"><span className="payuguru">PayUGuru</span></AnimationOnScroll> </h3>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="choose-block">
                            <AnimationOnScroll animateIn="animate__tada"> <span className="material-symbols-outlined">
                                    frame_source
                                </span> </AnimationOnScroll>
                                <h3>Developer Friendly</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis adipisci veniam dolores totam esse quam, quaerat quos sit error culpa sunt ipsum excepturi eligendi,</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="choose-block">
                            <AnimationOnScroll animateIn="animate__tada"> <span class="material-symbols-outlined">
                                    account_balance
                                </span> </AnimationOnScroll>
                                <h3>100+ Payment Modes</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur totam ipsa consequuntur, dignissimos quaerat et assumenda molestias ducimus sit </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="choose-block">
                            <AnimationOnScroll animateIn="animate__tada"> <span class="material-symbols-outlined">
                                    table_rows
                                </span> </AnimationOnScroll>
                                <h3>99.9% System Uptime</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur totam ipsa consequuntur, dignissimos quaerat et assumenda molestias ducimus sit </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="gateway">
                                <img src={gateway} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="process-steps">
                <div className="process-heading">
                    <h3>Smooth and Fast Onboarding Process</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, at? Officiis esse voluptatem maxime</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="process-steps-content">
                                <h3>Sign up</h3>
                                <p>Create a free account on the PayUGuru website.</p>
                                <h3>Account verification & confirmation</h3>
                                <p>Receive instant online account authentication.</p>
                                <h3>Upload Documents</h3>
                                <p>Complete paperless KYC with minimal documentation.</p>
                                <h3>Go Live</h3>
                                <p>Start accepting payments with one of the best Indian payment gateways.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="process-image">
                            <AnimationOnScroll animateIn="animate__fadeInRightBig"> <img src={steps} /> </AnimationOnScroll>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="faq">
                <div className="container">
                    <div className="faq-heading">
                        <h3>FAQ</h3>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="faq-section-block">
                                <Button onClick={clickfaq1} aria-controls="example-collapse-text" aria-expanded={faq1} className="faq-button">
                                    Why should I choose PayUGuru ?
                                </Button>
                                <Collapse in={faq1}>
                                    <div id="example-collapse-text" className="faq-content">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolor, neque nobis qui nam totam harum earum obcaecati quas ut ipsam sapiente. Id, eaque! Incidunt voluptatum voluptatibus ab fuga voluptates.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, aliquam nesciunt delectus quae corrupti facere id. Doloremque ab delectus repellat blanditiis, necessitatibus earum unde quaerat laboriosam eligendi iure, illum numquam.
                                    </div>
                                </Collapse>
                            </div>
                            <div className="faq-section-block">
                                <Button onClick={clickfaq2} aria-controls="example-collapse-text" aria-expanded={faq2} className="faq-button">
                                    How to get started on PayUGurus?
                                </Button>
                                <Collapse in={faq2}>
                                    <div id="example-collapse-text" className="faq-content">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quas perspiciatis praesentium. Odio dolor odit iste corrupti eos doloremque sapiente aperiam! Error, fugiat enim. Dicta nemo magni libero nihil fugit.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quas perspiciatis praesentium. Odio dolor odit iste corrupti eos doloremque sapiente aperiam! Error, fugiat enim. Dicta nemo magni libero nihil fugit.
                                    </div>
                                </Collapse>
                            </div>
                            <div className="faq-section-block">
                                <Button onClick={clickfaq3} aria-controls="example-collapse-text" aria-expanded={faq3} className="faq-button">
                                    How long would it take to activate my account?
                                </Button>
                                <Collapse in={faq3}>
                                    <div id="example-collapse-text" className="faq-content">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quas perspiciatis praesentium. Odio dolor odit iste corrupti eos doloremque sapiente aperiam! Error, fugiat enim. Dicta nemo magni libero nihil fugit.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quas perspiciatis praesentium. Odio dolor odit iste corrupti eos doloremque sapiente aperiam! Error, fugiat enim. Dicta nemo magni libero nihil fugit.
                                    </div>
                                </Collapse>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="faq-section-block1">
                                <Button onClick={clickfaq4} aria-controls="example-collapse-text" aria-expanded={faq4} className="faq-button">
                                    How is PayUGuru Gateway different from other payment gateways in India?
                                </Button>
                                <Collapse in={faq4}>
                                    <div id="example-collapse-text" className="faq-content">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quas perspiciatis praesentium. Odio dolor odit iste corrupti eos doloremque sapiente aperiam! Error, fugiat enim. Dicta nemo magni libero nihil fugit.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quas perspiciatis praesentium. Odio dolor odit iste corrupti eos doloremque sapiente aperiam! Error, fugiat enim. Dicta nemo magni libero nihil fugit.
                                    </div>
                                </Collapse>
                            </div>
                            <div className="faq-section-block1">
                                <Button onClick={clickfaq5} aria-controls="example-collapse-text" aria-expanded={faq5} className="faq-button">
                                    Can I start accepting international payments using PayUGurus?
                                </Button>
                                <Collapse in={faq5}>
                                    <div id="example-collapse-text" className="faq-content">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quas perspiciatis praesentium. Odio dolor odit iste corrupti eos doloremque sapiente aperiam! Error, fugiat enim. Dicta nemo magni libero nihil fugit.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quas perspiciatis praesentium. Odio dolor odit iste corrupti eos doloremque sapiente aperiam! Error, fugiat enim. Dicta nemo magni libero nihil fugit.
                                    </div>
                                </Collapse>
                            </div>
                            <div className="faq-section-block1">
                                <Button onClick={clickfaq6} aria-controls="example-collapse-text" aria-expanded={faq6} className="faq-button">
                                    What is Payouts?
                                </Button>
                                <Collapse in={faq6}>
                                    <div id="example-collapse-text" className="faq-content">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quas perspiciatis praesentium. Odio dolor odit iste corrupti eos doloremque sapiente aperiam! Error, fugiat enim. Dicta nemo magni libero nihil fugit.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quas perspiciatis praesentium. Odio dolor odit iste corrupti eos doloremque sapiente aperiam! Error, fugiat enim. Dicta nemo magni libero nihil fugit.
                                    </div>
                                </Collapse>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-us">
                <div className="contact-heading">
                    <h3>Contact Us</h3>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contact-image">
                                <img src={contact} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="contact-blocks">
                                        <p>Email Address</p>
                                        <h4>support@payuguru.com</h4>
                                        <div className="contact-icon">
                                        <AnimationOnScroll animateIn="animate__tada"> <span class="material-symbols-outlined">mail</span></AnimationOnScroll>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="contact-blocks">
                                        <p>Mobile Number</p>
                                        <h4>+91 9876543210</h4>
                                        <div className="contact-icon">
                                        <AnimationOnScroll animateIn="animate__tada"> <span class="material-symbols-outlined">call</span> </AnimationOnScroll>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-form">
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>User Name</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Message</Form.Label>
                                        <textarea className="form-control"></textarea>
                                    </Form.Group>
                                    <div className="contact-button">
                                        <Button variant="primary" type="submit">Submit</Button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="footer-content">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia molestias asperiores, earum consequuntur at itaque eum rem ex quidem aut, voluptatibus dolorum modi assumenda explicabo. Quisquam vitae error minima dolores.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-links">
                                <h4>Quick Links</h4>
                                <ListGroup variant="flush">
                                    <ListGroup.Item><span class="material-symbols-outlined">double_arrow</span> <span className="foot-list-item"><Link to="/">Home</Link></span> </ListGroup.Item>
                                    <ListGroup.Item><span class="material-symbols-outlined">double_arrow</span> <span className="foot-list-item"><Link to="/">About</Link></span></ListGroup.Item>
                                    <ListGroup.Item><span class="material-symbols-outlined">double_arrow</span> <span className="foot-list-item"><Link to="/">Services</Link></span></ListGroup.Item>
                                    <ListGroup.Item><span class="material-symbols-outlined">double_arrow</span> <span className="foot-list-item"><Link to="/">Features</Link></span></ListGroup.Item>
                                    <ListGroup.Item><span class="material-symbols-outlined">double_arrow</span> <span className="foot-list-item"><Link to="/">Contact us</Link></span></ListGroup.Item>
                                    
                                </ListGroup>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-social">
                                <h4>Social Links</h4>
                                <ListGroup horizontal>
                                    <ListGroup.Item><i class="fab fa-facebook"></i></ListGroup.Item>
                                    <ListGroup.Item><i class="fab fa-google"></i></ListGroup.Item>
                                    <ListGroup.Item><i class="fab fa-twitter"></i></ListGroup.Item>
                                    <ListGroup.Item><i class="fab fa-instagram"></i></ListGroup.Item>
                                </ListGroup>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>copyright &copy; <a href="#">PAYUGURU</a></p>
                </div>
            </section>
        </section>
      
    )
}


export default Home

