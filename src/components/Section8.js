import React from 'react'
import '../Style.css';

import loreal from '../images/loreal.svg';
import novartis from '../images/novartis.svg';
import accelya from '../images/accelya.svg';
import axa from '../images/axa.svg';
import axisbank from '../images/axisbank.svg';
import pandg from '../images/pandg.svg';
import sk from '../images/sk.svg';
import tata from '../images/tata.svg';
import danone from '../images/danone.png';
import telenor from '../images/telenor.png';
import airbus from '../images/airbus.svg';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const images = [loreal,novartis,accelya,axa,axisbank,pandg,sk,tata,danone,telenor,airbus];

const Section8 = () => {
    return (
        <Container className ="section8" style ={{padding:"50px"}} fluid>
            <Row>
                <Col md={2} sm={12}></Col>
                <Col md={5} sm={12}>
                    <p id="coursesheading" style={{fontSize: "20px"}}><b>2000+</b>&nbsp;Coursera for Business customers</p>
                    <Row className ="text-center">
                        <Col md={12}>
                        {
                            images.map((i) => {
                                return (<img key={i} id="mobilesponsorimg" src ={i} alt={i}  />)
                            })
                        }
                        </Col>
                    </Row>
                </Col>
                <Col md={4} sm={12}>
                    <div>
                        <h2><b>Coursera for Business</b></h2>
                        <p style ={{fontSize:"18px"}}>We’ve got the solution: world-class training and development programs developed by top universities and companies. All on Coursera for Business.</p>
                        <Button variant="outline-primary">Learn More</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Section8