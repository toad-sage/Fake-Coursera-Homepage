import React from 'react'

import certi4 from '../images/certificates4.png';
import '../Style.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styled from 'styled-components'

const Line =  styled.div`
    background-color:#2a73cc;
    width:20%;
    height:2px;
`

const  Section5 = () => {
    return (
        <Container fluid className ="section5">
            <Row>
                <Col md={6}>
                    <br/><br/>
                    <img id ="mobileimg"src ={certi4} alt =""/>
                </Col>
                <Col md={5} sm={12}>
                    <div style ={{marginTop:"30%"}}>
                    <p style ={{color:"grey"}}><b>SHAREABLE CERTIFICATES</b></p>
                    <p style ={{fontSize:"25px"}}>Earn industry-recognized credentials</p>
                    <Line /><br/>
                    <p style ={{fontSize:"17px"}}>Demonstrate your new skills by sharing your Course <b>Certificate, Professional Certificate, MasterTrack™ Certificate</b>, or diploma with your network.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Section5