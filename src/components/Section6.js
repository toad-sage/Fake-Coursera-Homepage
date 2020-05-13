import React from 'react'
import '../Style.css';

import secphoto from '../images/secondary-consumer-hero-img.png';

import Container from 'react-bootstrap/Container'
import {Button} from 'react-bootstrap'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Section7 = () => {
    return (
        <Container fluid className="section7" style ={{backgroundColor:"#FCF4CF",paddingBottom:"60px"}}>
            <Row>
                <Col md={2} sm={12}></Col>
                <Col md={4} sm={12}>
                    <img id="mobileimg"src ={secphoto} alt=""/>
                </Col>
                <Col md={5} sm={12}>
                    <h2 style ={{fontWeight:"400"}}><b>Take the next step</b> toward<br/> your personal and professional<br/> goals with Coursera.</h2>
                    <p style={{fontSize:"20px"}}>Join now to receive personalized recommendations from the full Coursera catalog.</p>
                    <Button variant="primary">Join for Free</Button>
                </Col>
            </Row> 
        </Container>
    )
}

export default Section7