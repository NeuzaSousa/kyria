import React from 'react';
import Container from 'react-bootstrap/Container';
import Kyria from './pictures/Kyria.jpg';

class Ubermich extends React.Component {
    render() {
        return (
            <Container fluid>
                <h1 className="title">Über mich</h1>
                <img src={Kyria} alt="Kyria" />
            </Container>
        )
    }
}

export default Ubermich;