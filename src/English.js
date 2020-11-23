import React from 'react';
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class English extends React.Component {
    render() {
        return (
            <Container fluid>
                <h1>Tour Guide Kyria Sobrinho</h1>
                <Container fluid className="container2">
                    <Nav>
                        <Row>
                            <Col>
                                <NavLink to="/aboutme"><Button variant="light">About me</Button></NavLink>
                            </Col>
                            <Col>
                                <NavLink to="/tour"><Button variant="dark">Tour</Button></NavLink>
                            </Col>
                            <Col>
                                <NavLink to="/contact"><Button>Contact</Button></NavLink>
                            </Col>
                            <Col>
                                <Button>Blog</Button>
                            </Col>
                        </Row>
                    </Nav>
                </Container>
            </Container>
        )
    }
}

export default English;