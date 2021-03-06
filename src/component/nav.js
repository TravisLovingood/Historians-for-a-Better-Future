import React from "react";
import { Link } from "react-router-dom";
import "../App.css"

// Bootstrap stuff
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

function nav() {
  return (
    <Row>
      <Col md={12}>     
        <Card>
          <Row>
            {/* <Col></Col> */}
            <Col md={2}><strong><li><Link to="/">Home</Link></li></strong></Col>
            <Col md={2}><strong><li><Link to="/about">About</Link></li></strong></Col>
            <Col md={2}><strong><li><Link to="/blog">Blog</Link></li></strong></Col>
            <Col md={2}><strong><li><Link to="/events">Events</Link></li></strong></Col>
            <Col md={2}><strong><li><Link to="/Archives">Archives</Link></li></strong></Col>
            <Col md={2}><strong><li><Link to="/contact">Contact</Link></li></strong></Col>
            <Col></Col>            
          </Row>
        </Card>
      </Col>
    </Row>
  )
};
 
export default nav;
