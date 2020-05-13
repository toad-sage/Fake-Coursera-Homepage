import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import illinois from '../images/illinois.png';
import imperial from '../images/imperial.png';
import duke from '../images/duke.png';
import google from '../images/google.png';
import ibm from '../images/ibm.png';
import umich from '../images/umich.jpg';
import penn from '../images/penn.png';
import stanford from '../images/stanford.png';

import '../Style.css';

const Collaborators = () => {
    return (
        <Container fluid className ="collaborator">
            <Row className ="text-center">
                <Col md={12} sm={12}>
                    <p>We collaborate with <u>190+ leading universities and companies</u></p>
                </Col>
                <Col md={12} sm={12}>
                    <Container>
                        <Row className ="text-center">
                            <Col md={12}>
                                <img src ={illinois} alt=""illinois/>
                                <img src ={duke} alt="duke"/>
                                <img src ={google} alt="google"/>
                                <img src ={umich} alt="umich"/>
                                <img src ={ibm} alt="ibm"/>
                                <img src ={imperial} alt="imperial"/>
                                <img src ={stanford} alt="stanford"/>
                                <img src ={penn} alt="penn"/>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <hr/>
        </Container>
    )
}

export default Collaborators;