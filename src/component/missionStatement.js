import React from "react";
import "../App.css"
// Bootstrap stuff
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

function missionStatement() {
    return (  
        <Row>
        <Col></Col>
        <Col md={8}>
        <Card className="p-3">
            <Card.Body>
              {/* <Image src="pics/Just-Fists-Pink.PNG" alt="Historians For a Better Future Logo" rounded fluid/> 
                            <hr /> */}
              <Card.Title><h1><strong>Mission Statement</strong></h1></Card.Title>

              <Card.Text><p>Historians for a Better Future works to 
                address contemporary problems by drawing on historical 
                knowledge and critically engaging with the present. 
                HBF uses history as a resource to help communities 
                address societal inequities. By facilitating dialogue 
                about the past, we work toward a better, more just 
                future.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col> 
      </Row>
    )
};
 
export default missionStatement;