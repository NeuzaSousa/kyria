import React from 'react';
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
//import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Redirect } from 'react-router-dom';

class Francais extends React.Component {
    render() {
        return (
            <Container fluid className="container1">
                <Container fluid className="container2">
                    <h1>Guide turistique Kyria Sobrinho</h1>
                    <hr />

                    <Redirect to="/francais/tournee"/>

                    <Navbar variant="light">
                        <Nav>
                            <Row>
                                <Col> 
                                    <Nav.Item as="li">
                                        <button variant="outline-secondary" className="button"><NavLink to="/francais/tournee" activeClassName="selected">Tournée</NavLink></button>
                                    </Nav.Item>
                                </Col>
                                <Col>
                                    <Nav.Item as="li">
                                        <button variant="outline-secondary" className="button"><NavLink to="/francais/aproposdemoi" activeClassName="selected">À propos de moi</NavLink></button>
                                    </Nav.Item>
                                </Col>
                                <Col>
                                    <Nav.Item as="li">
                                        <button variant="outline-secondary" className="button"><NavLink to="/francais/contactfr" activeClassName="selected">Contact</NavLink></button>
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

export default Francais;