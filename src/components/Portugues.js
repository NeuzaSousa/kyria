import React from 'react';
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
//import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Redirect } from 'react-router-dom';

class Portugues extends React.Component {
    render() {
        return (
            <Container fluid className="container1">
                <Container fluid className="container2">
                    <h1>Guia turística Kyria Sobrinho</h1>
                    <hr />

                    <Redirect to="/portugues/visita"/>

                    <Navbar variant="light">
                        <Nav>
                        <Row>
                            <Col> 
                                <Nav.Item as="li">
                                    <button variant="outline-secondary" className="button"><NavLink to="/portugues/visita" activeClassName="selected">Visita</NavLink></button>
                                </Nav.Item>
                            </Col>
                            <Col>
                                <Nav.Item as="li">
                                    <button variant="outline-secondary" className="button"><NavLink to="/portugues/sobremim" activeClassName="selected">Sobre mim</NavLink></button>
                                </Nav.Item>
                            </Col>
                            <Col>
                                <Nav.Item as="li">
                                    <button variant="outline-secondary" className="button"><NavLink to="/portugues/contacto" activeClassName="selected">Contato</NavLink></button>
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

export default Portugues;