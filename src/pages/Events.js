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

function Events() {
  return (
    <Container fluid>
      <hr />
{/* Events */}
      <Row>
        <Col></Col>
        <Col md={4}>
          {/* <Card> */}
            <h1><strong>Events</strong></h1>
          {/* </Card> */}
        </Col>
        <Col></Col>
      </Row>
      <hr />
      <Row>    
        <Col></Col>
        <Col md={10}>
  
{/* Event 1 */}
            <Card className="p-3">
              <Card.Body>
                <Card.Title>
                  <h3><strong>Connect with our Facebook page to learn more about upcoming events.</strong></h3>
                </Card.Title>
              </Card.Body>
              <Card.Footer><a href="https://facebook.com/hist4future/"><h4>Go to Facebook</h4></a></Card.Footer>
            </Card>
          <hr />
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

export default Events;