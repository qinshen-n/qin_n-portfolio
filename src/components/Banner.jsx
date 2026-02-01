import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/img/headerImg.JPG";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { BoxArrowUpRight } from "react-bootstrap-icons";

function Banner() {
    const [loopNum, setLoopNum] = useState(0); // Tracks which word we're currently typing (0 = "Web Developer", 1 = "Full-Stack Developer") 
    const [isDeleting, setIsDeleting] = useState(false); // Are we typing forward or deleting backward?
    const toRotate = ["Qin", "Full-Stack Developer"]; // The array of words to cycle through
    const [text,setText] = useState(''); // The current text shown on screen (starts empty: "" → "W" → "We" → "Web"...)
    const [delta, setDelta] = useState(100 - Math.random() * 50); // Speed of typing in milliseconds (how long between each letter)
    const [index, setIndex] = useState(1);
    const period = 2000; // Pause time (in ms) when a word is fully typed, before starting to delete

    // Why useEffect here: create a timer that needs to run outside React's render cycle
    useEffect( () => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

    // tick() updates the text (adds or removes one letter)
    const tick = () => {
        let i = loopNum % toRotate.length; // Which word? (0, 1)
        let fullText = toRotate[i]; // Get full word: "Web Developer"
        let updatedText = isDeleting 
            ? fullText.substring(0, text.length -1) // Remove last letter
            : fullText.substring(0, text.length + 1); // Add next letter

        
        setText(updatedText); // Update screen

        // Are we deleting or typing?
        if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2); // Delete faster
        }

        // Just finished typing full word?
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true); // Start deleting
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period); // Pause before deleting
        // Just finished deleting?
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false); // Start typing again
            setLoopNum(loopNum + 1); // Move to next word
            setIndex(1);
            setDelta(150); // Slower typing speed
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <h1 className="static-text">Hello, I'm</h1>
                            <h1 className="rotate-txt">
                                <span className="wrap">{text}</span>
                            </h1>
                            <p>I build digital products the way I'd build with Lego 🧩—snapping pieces of logic together until something great emerges. As a full-stack developer, I turn ideas into intuitive, innovative solutions. Take a look at what I've been creating.</p>
                            <a href="/Resume.pdf" target="_blank" className="resume-btn">
                                Resume <BoxArrowUpRight size={20} />
                            </a>
                        </div>}
                    </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>                   
                        <div className="img-container">
                            <img src={headerImg} alt="Header Img" />
                        </div>                       
                    </Col>
                </Row>
            </Container>
        </section>
    )
};
export default Banner;