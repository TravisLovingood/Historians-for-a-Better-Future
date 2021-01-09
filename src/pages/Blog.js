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
              <Card.Title><h1><strong>Drawing Democracy: North Carolina’s Gerrymandering History</strong></h1></Card.Title>
              <Card.Text><h5>by Derek Huss and Katie Schinabeck</h5></Card.Text>
              <hr />
              <Card.Text><p>Brick by Brick: NC State University’s History Department Blog - July 29, 2019</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer><a href="https://history.news.chass.ncsu.edu/2019/07/29/drawing-democracy-north-carolinas-gerrymandering-history/"><h4>More Information</h4></a></Card.Footer>
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
              <Card.Title><h1><strong>Graduate Students Present Work at National Council on Public History Conference</strong></h1></Card.Title>
              <Card.Text><h5>by Katie Schinabeck, Sarah Soleim, Lisa Withers, & Hanna Howard</h5></Card.Text>
              <hr />
              <Card.Text><p>NC State University History News - June 25, 2018</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer><a href="https://history.news.chass.ncsu.edu/2018/06/25/graduate-students-present-work-at-national-council-on-public-history-conference/"><h4>More Information</h4></a></Card.Footer>
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
              <Card.Title><h1><strong>Q: “Sir, would you like a history of this monument?” A: “F**k You!”</strong></h1></Card.Title>
              <Card.Text><h5>by Historians for a Better Future</h5></Card.Text>
              <hr />
              <Card.Text><p>National Council of Public History - March 21, 2018</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer><a href="https://ncph.org/history-at-work/q-sir-would-you-like-a-history-of-this-monument/"><h4>More Information</h4></a></Card.Footer>
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
              <Card.Title><h1><strong>Historians for a Better Future Offers “Free History Lessons” at State Capitol</strong></h1></Card.Title>
              <Card.Text><h5>by Historians for a Better Future</h5></Card.Text>
              <hr />
              <Card.Text><p>NC State University History News - September 8, 2017</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer><a href="https://history.news.chass.ncsu.edu/2017/09/08/grad-students-faculty-and-alum-give-free-history-lessons-at-confederate-monument/"><h4>More Information</h4></a></Card.Footer>
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

