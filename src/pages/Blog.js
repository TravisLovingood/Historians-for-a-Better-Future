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
// import InputGroup from 'react-bootstrap/InputGroup'
// import FormControl from 'react-bootstrap/FormControl'
// import Button from 'react-bootstrap/Button'

function ProjectArchives() {
  return (
    <Container fluid>
      <hr />
      <Row>
        <Col></Col>
        <Col md={4}>
          {/* <Card> */}
          <h1><strong>Blog</strong></h1>
          {/* </Card>     */}
        </Col>
        <Col></Col>
      </Row>
      <hr />

{/* Blog Examples*/}
      <Row>
        <Col></Col>
        <Col md={10}>
        <Card className="p-3">
            <Card.Body>
              <Card.Title><h1><strong>Example Blog Topic 1</strong></h1></Card.Title>
              <Card.Text><h5>Posted By: Username Example 1</h5></Card.Text>
              <hr />
              <Card.Text><p>Text Example - Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit,sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                ea commodo consequat. Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum.</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer><a href="https://github.com/TravisLovingood"><h4>Example link 1</h4></a></Card.Footer>
          </Card>
        </Col>
        <Col></Col> 
      </Row>
      <hr />
      <Row>
        <Col></Col>
        <Col md={10}>
        <Card className="p-3">
            <Card.Body>
              <Card.Title><h1><strong>Example Blog Topic 2</strong></h1></Card.Title>
              <Card.Text><h5>Posted By: Username Example 2</h5></Card.Text>
              <hr />
              <Card.Text><p>Text Example - Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit,sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                ea commodo consequat. Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum.</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer><a href="https://github.com/TravisLovingood"><h4>Example link 2</h4></a></Card.Footer>
          </Card>
        </Col>
        <Col></Col> 
      </Row>
      <hr />
      <Row>
        <Col></Col>
        <Col md={10}>
        <Card className="p-3">
            <Card.Body>
              <Card.Title><h1><strong>Example Blog Topic 3</strong></h1></Card.Title>
              <Card.Text><h5>Posted By: Username Example 3</h5></Card.Text>
              <hr />
              <Card.Text><p>Text Example - Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit,sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                ea commodo consequat. Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum.</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer><a href="https://github.com/TravisLovingood"><h4>Example link 3</h4></a></Card.Footer>
          </Card>
        </Col>
        <Col></Col> 
      </Row>

{/* Back Home Link */}
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

export default ProjectArchives;

