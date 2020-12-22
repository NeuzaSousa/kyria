import React from 'react';
import Container from 'react-bootstrap/Container';
import Kyria from './Kyria.jpg';

class Sobremim extends React.Component {
    render() {
        return (
            <Container fluid>
                <h1 className="title">Sobre mim</h1>
                <img src={Kyria} alt="Kyria" />
            </Container>
        )
    }
}

export default Sobremim;