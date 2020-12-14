import React from 'react';
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
//import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Deutsch extends React.Component {
    render() {
        return (
            <Container fluid className="container1">
                <Container fluid className="container2">
                    <h1>Kyria Sobrinho Reiseführer</h1>
                    <hr />
                    <Navbar variant="light">
                        <Nav>
                        <Row>
                            <Col>
                                <Nav.Item as="li">
                                    <button variant="outline-secondary" className="button"><NavLink to="/aboutme" activeClassName="selected">Uber mich</NavLink></button>
                                </Nav.Item>
                            </Col>
                            <Col> 
                                <Nav.Item as="li">
                                    <button variant="outline-secondary" className="button"><NavLink to="/tour" activeClassName="selected">Reise</NavLink></button>
                                </Nav.Item>
                            </Col>    
                            <Col>
                                <Nav.Item as="li">
                                    <button variant="outline-secondary" className="button"><NavLink to="/contact" activeClassName="selected">Kontakt</NavLink></button>
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

export default Deutsch;