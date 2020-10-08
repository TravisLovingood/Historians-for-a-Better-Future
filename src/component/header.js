import React from "react";
import Nav from "./nav";
import "../App.css"
// Bootstrap stuff
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

function header() {
  return (
    <Container>  
      <Row>
        <Col></Col>
        <Col xs={8}>
          <Row>
            <Col xs={12}>
              <Image src="pics/Title-Black.PNG" alt="Historians For a Better Future Logo" rounded fluid/>
              {/* <h1><strong>Historians For a Better Future</strong></h1> */}
            </Col>
          </Row>
          <Nav />      
        </Col>
        <Col></Col>
      </Row> 
    </Container>     
  )
};
 
export default header;