import React from "react";
import { Link } from "react-router-dom";
import "../App.css"
// Bootstrap stuff
// import Image from 'react-bootstrap/Image'
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
          {/* <Card> */}
            <h1><strong>Contact</strong></h1>
          {/* </Card>     */}
        </Col>
        <Col></Col>
      </Row>
      {/* <hr /> */}
      <Row>
        <Col></Col>
        <Col md={6}>
          {/* <Card className="p-3"> */}
          <Card.Text>
            Interested in learning more or becoming involved in HBF? Email us or 
            check out our content on social media:      
          </Card.Text>
          {/* </Card>     */}
        </Col>
        <Col></Col>
      </Row>

      <hr />

      <Row>
        <Col></Col>
        <Col md={8}>
          <Card className="p-3">
            <Card.Text>
              <h5>Email:</h5> 
              <li><h3>historiansforabetterfuture@gmail.com</h3></li>   
            </Card.Text><hr/>
            <Card.Text> 
              <h5>Social Media:</h5>                               
              <li><h3><a href="https://facebook.com/hist4future/">Facebook: facebook.com/hist4future/</a></h3></li>
              <li><h3><a href="https://twitter.com/hist4future @Hist4Future">Twitter: twitter.com/hist4future @Hist4Future</a></h3></li>
              <li><h3>Instagram: hist4future</h3></li>
            </Card.Text>
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
