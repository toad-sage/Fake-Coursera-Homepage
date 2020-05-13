import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import apple from '../images/download_on_the_app_store_badge_en.svg';
import playstore from '../images/playstore.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';
import instagram from '../images/instagram.png';

import '../Style.css'

const items = ['About','LeaderShip','Careers','Catalog','Certificates','Degree']

const all_items = [];
for(let i=1;i<=3;i++)
{
    all_items.push(items);
}

const heading_list = ['Coursera','Community','More'];
const more_items = [facebook,twitter,linkedin,instagram]

console.log(all_items)

const Footer = () => (
    <Container fluid style ={{backgroundColor:"#F8F8F8",padding:"40px"}}>
        <Row>
            <Col md={7} sm={12}>
                <Row>
                    {
                        all_items.map((item,index) => {
                            return (
                                <Col key={index}  md={4} sm={12}>
                                    <ul style ={{listStyle:"none"}}><li><b>{heading_list[index]}</b></li></ul>
                                    <ul style ={{listStyle:"none"}}>
                                    {
                                        item.map((i,ind) => (
                                            <li key={ind}>{i}</li>
                                        ))
                                    }
                                    </ul>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Col>
            <Col md={5} sm={12}>
                <div>
                    <ul style ={{listStyle:"none"}}>
                        <li><img src ={apple} alt="" width="200" height="60"/></li>
                        <li><img src ={playstore} alt=""width="200" height="60"/></li>
                    </ul>
                </div>
            </Col>
        </Row>
        <hr />
        <Row>
            <Col md={9} sm={12} >
                <p>© 2020 Coursera Inc. All rights reserved.</p>
            </Col>
            <Col md={3} sm={12}>
                {
                    more_items.map((m,i) => (
                        <img src={m} key={i} alt={m} style={{padding:"5px"}}/>
                    ))
                }
            </Col>
        </Row>
    </Container>
)

export default Footer