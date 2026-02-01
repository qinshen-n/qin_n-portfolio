import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import 'animate.css';
import emailjs from '@emailjs/browser';
import navIcon1 from '../assets/img/navIcon1.svg';
import navIcon2 from '../assets/img/navIcon2.svg';
import navIcon3 from '../assets/img/navIcon3.svg';

function ContactForm () {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    // Form Fields Update Handler
    const onFormUpdate = (category, value) => {
        
        setFormDetails({
            ...formDetails, // Keep all existing values
            [category]: value // Update only the changed field
        })
    }

    // Form Submit Handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');

        emailjs.sendForm(
        'service_2lqo74w',
        'template_g5zs0uo', 
        e.target,
        '3uI6X-euTzzud6_l_'
        ).then((result) => {
            console.log('Email sent!', result.text);
            setStatus({ success: true, message: 'Message sent successfully' });
            setButtonText("Send");
        }).catch((error) => {
            console.log('Error:', error.text);
            setStatus({ success: false, message: 'Something went wrong' });
            setButtonText("Send");
        });
    }

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    {/* Left Side: Text & Social Icons */}
                    <Col size={12} md={6}>                       
                        <div>
                            <h2>Let's Connect</h2>
                            <p className="contact-desc">
                                I'm currently looking for new opportunities. Whether you have a question 
                                or just want to say hi, I'll try my best to get back to you!
                            </p>

                            {/* Social Icons */}
                            <div className="social-icon-contact">
                                <a href="https://github.com/qinshen-n" target="_blank" rel="noreferrer"><img src={navIcon1} alt="GitHub" /></a>
                                <a href="https://www.linkedin.com/in/qin-sharon-shen" target="_blank" rel="noreferrer"><img src={navIcon2} alt="LinkedIn" /></a>
                                <a href="mailto:qshen.sharon@outlook.com" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Email" /></a>
                            </div>
                        </div>                         
                    </Col>

                    {/* Right Side: The Form */}
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <form onSubmit={handleSubmit}>                       
                                <Row>
                                    <Col size={12} sm={6} className="px-1">
                                        <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)}/>
                                    </Col>
                                    <Col size={12} sm={6} className="px-1">
                                        <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                                    </Col>
                                    <Col size={12} sm={6} className="px-1">
                                        <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)}/>
                                    </Col>
                                    <Col size={12} sm={6} className="px-1">
                                        <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                                    </Col>
                                    <Col size={12} className="px-1">
                                        <input rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}/>
                                        <button type="submit"><span>{buttonText}</span></button>
                                    </Col>
                                    {
                                        status.message &&
                                        <Col>
                                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                        </Col>
                                        }
                                </Row>
                            </form>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContactForm;