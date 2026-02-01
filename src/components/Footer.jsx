import { Container, Row, Col } from "react-bootstrap";

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12}>
                        <p>Copyright 2026. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;