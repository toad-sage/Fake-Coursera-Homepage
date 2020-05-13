import React from 'react';

import promo from '../images/promoStat.png';
import redcir from '../images/pinkish-half-circle.png';

import '../Style.css'

import Container from 'react-bootstrap/Container'
import {Button} from 'react-bootstrap'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components';

const Redcir = styled.div`
    margin-top: -9%;
    margin-left: 10%;
`;

const LearnerSection = () => (
    <Container fluid className="section1">
        <Row>
            <Col md={6} sm={12}>
                <Redcir>
                    <img src={redcir} alt="" />
                </Redcir>
                <div>
                    <img src={promo}  className="proming-image"/>
                </div>
            </Col>
            <Col md={5} sm={12} className="socks">
                <div className ="box">
                    <p id ="heading">Learner outcomes on Coursera</p>
                    <p id="subheading"><b>87% of people learning </b>for professional development <b>report career benefits</b> like getting a promotion, a raise, or starting a new career</p>
                    <p>-&nbsp;Coursera Learner Outcomes Survey (2019)</p>
                    <Button variant="primary">Join For Free</Button>
                    <Button variant="outline-primary" style ={{margin:"10px"}}>Try Coursera For Business</Button>
                </div>
            </Col>
        </Row>
    </Container>
)

export default LearnerSection;