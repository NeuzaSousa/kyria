import React from 'react';
import Container from 'react-bootstrap/Container';
import Kyria from './Kyria.jpg';

class Aproposdemoi extends React.Component {
    render() {
        return (
            <Container fluid>
                <h1>À propos de moi</h1>
                <img src={Kyria} alt="Kyria" />
            </Container>
        )
    }
}

export default Aproposdemoi;