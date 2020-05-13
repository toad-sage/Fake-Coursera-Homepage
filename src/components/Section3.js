import React from 'react'

import offering from '../images/offerings2.png';
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

const Section3 = () => {
    return (
        <Container fluid className ="section3">
            <Row className ="row">
                <Col md={1}></Col>
                <Col md={5}>
                    <br/><br/>
                    <img id="mobileimg"src ={offering} alt ="Offering"/>
                </Col>
                <Col md={5} sm={12}>
                    <div style ={{marginTop:"20%"}}>
                    <p style ={{color:"grey"}}><b>ACCESSIBLE</b></p>
                    <p style ={{fontSize:"25px"}}>Find flexible, affordable options</p>
                    <Line></Line><br/>
                    <p style ={{fontSize:"20px"}}> Choose from many options including free courses and university degrees at a breakthrough price. Learn at your own pace, 100% online.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Section3