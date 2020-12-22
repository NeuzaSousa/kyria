import React from 'react';
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Kyria from './Kyria.jpg';

class English extends React.Component {
    render() {
        return (
            <Container fluid className="container1">
                <Container fluid className="container2">
          <h1>Tour Guide Kyria Sobrinho</h1>
          <hr />
          <Navbar variant="light">
            <Nav>
              <Row>
                <Col>
                  <Nav.Item as="li">
                    <button variant="outline-secondary" className="button"><NavLink to="/english/aboutme" activeClassName="selected">About me</NavLink></button>
                  </Nav.Item>
                </Col>
                <Col> 
                  <Nav.Item as="li">
                    <button variant="outline-secondary" className="button"><NavLink to="/english/tour" activeClassName="selected">Tour</NavLink></button>
                  </Nav.Item>
                </Col>    
                <Col>
                  <Nav.Item as="li">
                    <button variant="outline-secondary" className="button"><NavLink to="/english/contact" activeClassName="selected">Contact</NavLink></button>
                  </Nav.Item>
                </Col>
                <Col>
                  <Nav.Item as="li">
                    <button variant="outline-secondary" className="button"><a>Blog</a></button>
                  </Nav.Item>
                </Col>
              </Row>
            </Nav>
          </Navbar>
        </Container>

            </Container>
        )
    }
}

export default English;