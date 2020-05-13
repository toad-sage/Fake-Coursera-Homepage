import React from 'react'
import andrew from '../images/andrewng.png';

import Container from 'react-bootstrap/Container'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import '../Style.css';
import styled from 'styled-components';

const Desc = styled.p`
    fontSize:26px;
    lineHeight:2;
`;

const Tit = styled.p`
    font-size:25px;
`;

const SurrDiv = styled.div`
    background-color:#2a73cc;
    width:20%;
    height:2px;
`;

const Section2 = () => {
    return (
        <Container fluid className="section2">
            <Row className ="text-center">
                <Col md={12} sm={12}>
                <br/>
                    <h1 id="heading">World-class learning for anyone, anywhere</h1>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col md={2} sm={12}></Col>
                <Col md={3} sm={12}>
                    <div>
                    <br/>
                        <p style ={{color:"grey"}}>TOP QUALITY</p>
                        <Tit>Learn from leading <br/>universities and companies</Tit>
                        <SurrDiv></SurrDiv><br/>
                        <Desc>Start streaming on-demand video lectures today from top instructors in subjects like <b>business, computer science, data science, language learning</b>, & more.
                        </Desc>
                    </div>
                </Col>
                <Col md={7} sm={12}>
                    <img id="mobileimg" src ={andrew} alt=""/>
                </Col>
            </Row>
        </Container>
    )
}

export default Section2