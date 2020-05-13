import React from 'react'
import quiz from '../images/quizCompletion.png';

import '../Style.css';

import Container from 'react-bootstrap/Container'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styled from 'styled-components';

const Line =  styled.div`
    background-color:#2a73cc;
    width:20%;
    height:2px;
`

const Section4 = () => {
    return (
        <Container fluid className ="section4">
            <Row>
                <Col md={2} sm={12}></Col>
                <Col md={3} sm={12}>
                    <div className ="section2-text-box">
                    <br/>
                        <p style ={{color:"grey"}}>APPLIED LEARNING</p>
                        <p style={{fontSize:"25px"}} >Master skills with in-depth learning</p>
                        <Line></Line><br/>
                        <p style={{fontSize:"26px",lineHeight:"2"}}>Apply what you learn with<b> self-paced quizzes and hands-on projects.</b> Get feedback from a global community of learners.
                        </p>
                    </div>
                </Col>
                <Col md={7} sm={12}>
                    <img id="mobileimg" src ={quiz} alt=""/>
                </Col>
            </Row>
        </Container>
    )
}

export default Section4