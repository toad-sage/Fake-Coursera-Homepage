import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Slider from './Slider'

const SliderSection = () => {
	return (
		<Container>
			<Row className="text-center">
				<Col md={12}>
					<div style={{marginTop:"10%"}} >
						<h2><b>From The Coursera Community</b></h2>
	                    <h3 style ={{color:"grey"}} id="subheading">45+ million people are already learning on Coursera</h3>
					</div>
				</Col>
			</Row>
			<Slider />
		</Container>
	)
}

export default SliderSection;