import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import '../Style.css'

const Banner = () => (
    <Container fluid className ="header-banner" style={{overflowX:"hidden"}}>
        <Row>
            <Col md={12} sm={12}>
                <div class ="header-text-content">
                    <Row>
                        <Col md={7} sm={12}>
                        <div data-aos="zoom-in"><h1 id="smallhead">Your Course To Success</h1></div>
                        <p id="smallp">Build skills with courses, certificates, and degrees online from world-class universities and companies</p>
                        <button id ="smallbtn">Join for Free</button>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </Container>
)

export default Banner;