import React,{useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import  AuthModal from './AuthModal';


import '../Style.css'

const Banner = () => {
  const [modalShow,setModalShow] = useState(false);
    return (
        <React.Fragment>
    <Container fluid className ="header-banner" style={{overflowX:"hidden"}}>
        <Row>
            <Col md={12} sm={12}>
                <div className ="header-text-content">
                    <Row>
                        <Col md={7} sm={12}>
                        <div ><h1 id="smallhead">Your Course To Success</h1></div>
                        <p id="smallp">Build skills with courses, certificates, and degrees online from world-class universities and companies</p>
                        <button id ="smallbtn" onClick={() => setModalShow(true)}>>Join for Free</button>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </Container>
    <AuthModal
    show={modalShow}
    onHide={() => setModalShow(false)} />
    </React.Fragment>
)
}

export default Banner;