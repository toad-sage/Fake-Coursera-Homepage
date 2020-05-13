import React from 'react'
import julio from '../images/julio.png';
import kara from '../images/kara.png';
import sabrina from '../images/sabrina.png';
import mirela from '../images/mirela-decorative.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

import Slider from 'react-slick'

const SimpleSlider = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    let peoples = [
        {
            img: julio,
            name: 'Julio',
            desig: 'FrontEnd Developer'
        },
        {
            img: mirela,
            name: 'Mirela',
            desig: 'Corporate Affairs head'
        },
        {
            img: kara,
            name: 'Kara',
            desig: 'Backend Developer'
        },
        {
            img: sabrina,
            name: 'Sabrina',
            desig: 'Public Relation Head'
        }
    ]

    return (
        <Container className="text-center" style={{marginBottom: "6%",marginTop:"4%"}}>
            <Slider {...settings}>
            {
                peoples.map((p) => (
                    <Card style={{ padding:"7px" }} className="border-0">
                    <Card.Img variant="top" src={p.img} style={{width:"50%"}}/>
                    <Card.Body>
                        <Card.Title>{p.name}</Card.Title>
                        <Card.Text>
                        {p.desig}
                        </Card.Text>
                    </Card.Body>
                    </Card>
                ))
            }                
            </Slider>
        </Container>
    )
}

export default SimpleSlider