import React from 'react';
import Container from 'react-bootstrap/Container';
import Kyria from './pictures/Kyria.jpg';

class Aboutme extends React.Component {
    render() {
        return (
            <Container fluid>
                <h1 className="title">About me</h1>
                <img src={Kyria} alt="Kyria" />
            </Container>
        )
    }
}

export default Aboutme;