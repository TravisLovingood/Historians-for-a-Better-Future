import React from "react";
import "../App.css"
// Bootstrap stuff
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
function updates() {
    return (  
    <Row>
      <Col></Col>
      <Col md={10}>
        <CardDeck>

          <Card>
            <Card.Img variant="top" src="pics/3Fists-Pink.PNG" />
            <Card.Body>
              <Card.Title>Topic 1</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional news/updates content. This news/updates content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Img variant="top" src="pics/3Fists-Black.PNG" />
            <Card.Body>
              <Card.Title>Topic 2</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                news/updates content.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 5 mins ago</small>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Img variant="top" src="pics/3Fists-White.PNG" />
            <Card.Body>
              <Card.Title>Topic 3</Card.Title>
              <Card.Text>
                This is a wider card with supporting news/updates information below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 30 mins ago</small>
            </Card.Footer>
          </Card>

        </CardDeck>
      </Col>
      <Col></Col> 
    </Row>    
    )
};
 
export default updates;