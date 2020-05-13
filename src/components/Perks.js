import React from 'react';
import '../Style.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import SvgaLearn from '../images/SvgaLearn.png';
import teacherimg from '../images/teacher-img.png';
import SvgaColorCertificate from '../images/SvgaColorCertificate.png';
import SvgaCommunity from '../images/SvgaCommunity.png';
import styled from 'styled-components';

const H1 = styled.h1`
    font-size: 30px;
`;

const Perks = () => (
    <Container fluid className="perks">
        <Row className="text-center">
            <Col md={12} sm={12}>
                <H1>Achieve your goals with Coursera</H1>
            </Col>
        </Row>
        <br /><br />
        <Container>
            <Row className="text-center">
                <Col md={3} sm={12}>
                    <div className="perk-box">
                        <img src={SvgaLearn} />
                        <h3>Learn the latest skills</h3>
                        <p>like business analytics, graphic design, Python, and more</p>
                    </div>
                </Col>
                <Col md={3} sm={12}>
                    <div className ="perk-box" >
                        <img src ={teacherimg} alt =""/>
                        <h3>Get ready for a career</h3>
                        <p>in high-demand fields like IT, AI and cloud engineering</p>
                    </div>
                </Col>
                <Col md={3} sm={12}>
                    <div className ="perk-box" >
                        <img src ={SvgaColorCertificate} alt =""/>
                        <h3>Earn a certificate or degree</h3>
                        <p>from a leading university in business, computer science, and more</p>
                    </div>
                </Col>
                <Col md={3} sm={12}>
                    <div className ="perk-box" >
                        <img src ={SvgaCommunity} alt =""/>
                        <h3>Upskill your organization</h3>
                        <p>with on-demand training and development programs</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </Container>
)

export default Perks;