import React from "react";
import { Link } from "react-router-dom";
import "../App.css"
// Bootstrap stuff
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
// import CardColumns from 'react-bootstrap/CardColumns'
// import Carousel from 'react-bootstrap/Carousel'
// import CardDeck from 'react-bootstrap/CardDeck'

function Contact() {
  return (
    <Container fluid>
      <hr />
      <Row>
        <Col></Col>
        <Col md={4}>
          <Card>
            <h1><strong>Contact</strong></h1>
          </Card>    
        </Col>
        <Col></Col>
      </Row>
      <hr />
      <Row>
        <Col></Col>
        <Col md={6}>
          <Card className="p-3">
            <Row>
              {/* <Col></Col> */}

              <Col md={6}>
                <Card.Text>
                  <Image src="pics/Logo-Pink.PNG" alt="Historians For a Better Future Logo" rounded fluid/>
                </Card.Text>
              </Col>

              <Col md={6}>
                <Card.Text>Filler Text - Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                  consequat.                          
                </Card.Text>
              </Col>
              {/* <Col></Col> */}
            </Row>
          </Card>    
        </Col>
        <Col></Col>
      </Row>

      <hr />

      <Row>
        <Col></Col>
        <Col md={8}>
          <Card className="p-3">
            <Row>
              <Col></Col>

              <Col md={5}>
                <Card.Title><h5><strong>Direct Contacts</strong></h5></Card.Title>
                <hr />
                <Card.Text>
                  <li><h3><a href="https://github.com/TravisLovingood">link1</a></h3></li>                       
                  <li><h3><a href="https://github.com/TravisLovingood">link2</a></h3></li>
                  <li><h3><a href="https://github.com/TravisLovingood">link3</a></h3></li>
                  <li><h3><a href="https://github.com/TravisLovingood">link4</a></h3></li>                       
                  <li><h3><a href="https://github.com/TravisLovingood">link5</a></h3></li>
                  <li><h3><a href="https://github.com/TravisLovingood">link6</a></h3></li>
                </Card.Text>
              </Col>

              <Col md={5}>
                <Card.Title><h5><strong>Additional Materials</strong></h5></Card.Title>
                <hr />
                <Card.Text>
                  <li><h3><a href="https://github.com/TravisLovingood">link1</a></h3></li>                       
                  <li><h3><a href="https://github.com/TravisLovingood">link2</a></h3></li>
                  <li><h3><a href="https://github.com/TravisLovingood">link3</a></h3></li>
                  <li><h3><a href="https://github.com/TravisLovingood">link4</a></h3></li>                       
                  <li><h3><a href="https://github.com/TravisLovingood">link5</a></h3></li>
                  <li><h3><a href="https://github.com/TravisLovingood">link6</a></h3></li>
                </Card.Text>
              </Col>

              <Col></Col>
            </Row>
          </Card>    
        </Col>
        <Col></Col>
      </Row>

      <hr />

      <Row>
        <Col></Col>
        <Col md={4}>
          <Card>
            <h3><li><Link to="/">Back Home</Link></li></h3>
          </Card>    
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
};

export default Contact;
