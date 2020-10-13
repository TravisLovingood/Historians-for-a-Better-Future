import React, { Component } from 'react';
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
// links
import Header from "./component/header";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Events from "./pages/Events";
import Archives from "./pages/Archives";
import Contact from "./pages/Contact";
import Footer from "./component/footer";
import Updates from "./component/updates";
import MissionStatement from "./component/missionStatement";
import Committees from './component/committees';
// Bootstrap stuff
// import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
;



class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <Header/>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} /> 
        <Route path="/blog" component={Blog} />
        <Route path="/events" component={Events} />
        <Route path="/Archives" component={Archives} />
        <Route path="/contact" component={Contact} />
        <hr />
        <Footer/>
      </HashRouter>
    );
  }
}

const Home = () =>
    <Container fluid>

      <hr />
      <MissionStatement></MissionStatement>
      <hr />

      <Row>
        <Col></Col>
        <Col md={4}>
          <Card>
            <h1><strong>News/Updates</strong></h1>
          </Card>    
        </Col>
        <Col></Col>
      </Row>

      <hr />
      <Updates></Updates>
      <hr />

      <Row>
        <Col></Col>
        <Col md={4}>
          <Card><h1><strong>Committees</strong></h1></Card>
        </Col>
        <Col></Col>
      </Row>

      <hr />
      <Committees></Committees>
      <hr />

    </Container>

export default App;

