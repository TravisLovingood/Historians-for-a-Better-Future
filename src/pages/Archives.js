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

function Archives() {
  return (
    <Container fluid>
      <hr />
      <Row>
        <Col></Col>
        <Col md={4}>
          <Card>
            <h1><strong>Archives</strong></h1>
          </Card>    
        </Col>
        <Col></Col>
      </Row>
      <hr />
      <Row>
        <Col></Col>
        <Col md={8}>
          <Card>
            <Row>
              <Col></Col>
              <Col md={10}>
                <Card.Text>Filler Text - Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                  consequat.                          
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
        <Col md={6}>
          <Card>
            <Row>
              <Col></Col>
              <Col md={10}>
                <Card.Text>
                  <li><h4><a href="https://github.com/TravisLovingood">Archive Example link 1</a></h4></li>                       
                  <li><h4><a href="https://github.com/TravisLovingood">Archive Example link 2</a></h4></li>
                  <li><h4><a href="https://github.com/TravisLovingood">Archive Example link 3</a></h4></li>
                  <li><h4><a href="https://github.com/TravisLovingood">Archive Example link 4</a></h4></li>                       
                  <li><h4><a href="https://github.com/TravisLovingood">Archive Example link 5</a></h4></li>
                  <li><h4><a href="https://github.com/TravisLovingood">Archive Example link 6</a></h4></li>
                  <li><h4><a href="https://github.com/TravisLovingood">Archive Example link 7</a></h4></li>                       
                  <li><h4><a href="https://github.com/TravisLovingood">Archive Example link 8</a></h4></li>
                  <li><h4><a href="https://github.com/TravisLovingood">Archive Example link 9</a></h4></li>
                  <li><h4><a href="https://github.com/TravisLovingood">Archive Example link 10</a></h4></li>                       
                  <li><h4><a href="https://github.com/TravisLovingood">Archive Example link 11</a></h4></li>
                  <li><h4><a href="https://github.com/TravisLovingood">Archive Example link 12</a></h4></li>                           
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

export default Archives;