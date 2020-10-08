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
          <Card>
            <h1><strong>Events</strong></h1>
          </Card>
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
                  <h3><strong>Event 1</strong></h3>
                </Card.Title>
                <Row>
                  <Col></Col>
                  <Col md={3}><Card.Img src="pics/3Fists-Black.PNG"  alt="Event 1" rounded fluid /></Col>
                  <Col md={7}>
                    <Card.Text><p>Filler Text - Lorem ipsum dolor sit amet, consectetur 
                      adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                      Duis aute irure dolor in reprehenderit in voluptate velit esse 
                      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                      cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                      anim id est laborum.</p>
                    </Card.Text>
                  </Col>
                  <Col></Col>
                </Row>
              </Card.Body>
              <Card.Footer><a href="https://github.com/TravisLovingood"><h4>Event Link</h4></a></Card.Footer>
            </Card>
          <hr />
{/* Event 2 */}
            <Card className="p-3">
              <Card.Body>
                <Card.Title>
                  <h3><strong>Event 2</strong></h3>
                </Card.Title>
                <Row>
                  <Col></Col>
                  <Col md={7}>
                    <Card.Text><p>Filler Text - Lorem ipsum dolor sit amet, consectetur 
                      adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                      Duis aute irure dolor in reprehenderit in voluptate velit esse 
                      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                      cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                      anim id est laborum.</p>
                    </Card.Text>
                  </Col>
                  <Col md={3}><Card.Img src="pics/3Fists-White.PNG"  alt="Event 2" rounded fluid /></Col>                  
                  <Col></Col>
                </Row>
              </Card.Body>
              <Card.Footer><a href="https://github.com/TravisLovingood"><h4>Event Link</h4></a></Card.Footer>
            </Card>
          <hr /> 
{/* Event 3 */}
            <Card className="p-3">
              <Card.Body>
                <Card.Title>
                  <h3><strong>Event 3</strong></h3>
                </Card.Title>
                <Row>
                  <Col></Col>
                  <Col md={3}><Card.Img src="pics/3Fists-Pink.PNG" alt="Event 3" rounded fluid /></Col>
                  <Col md={7}>
                    <Card.Text><p>Filler Text - Lorem ipsum dolor sit amet, consectetur 
                      adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                      Duis aute irure dolor in reprehenderit in voluptate velit esse 
                      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                      cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                      anim id est laborum.</p>
                    </Card.Text>
                  </Col>
                  <Col></Col>
                </Row>
              </Card.Body>
              <Card.Footer><a href="https://github.com/TravisLovingood"><h4>Event Link</h4></a></Card.Footer>
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

export default Events;