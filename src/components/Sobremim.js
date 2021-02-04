import React from 'react';
import Container from 'react-bootstrap/Container';
import Kyria from './pictures/Kyria.jpg';

class Sobremim extends React.Component {
    render() {
        return (
            <Container fluid className="container3">
                <h1 className="title">Sobre mim</h1>
                <img src={Kyria} alt="Kyria" />
                <p>
                    Como ex-estudante de belas artes e de Estudos Norteamericanos e 
                    Franceses, com foco em literatura, trabalhei os últimos dez anos 
                    como jornalista, locutora e moderadora de rádio, tradutora e 
                    ainda como educadora em museus.
                </p>
                <p>
                    Quando as visitas aos museus acabaram de um dia para o outro em 
                    Março de 2020 por causa da Covid-19, encontrei finalmente o 
                    tempo e a motivação para planear e conceber uma visita em 
                    Schöneberg, em que já andava a pensar há algum tempo. Cada vez 
                    que passava a pé por esta mistura arquitetônica bizarra à volta 
                    do Kleistpark, pensava para mim mesma - que absurdo não haver 
                    visitas guiadas a este local histórico.
                </p>
                <p>
                    Quando se lêem biografias sobre escritores, constata-se que escrever 
                    e andar caminham juntos de mãos dadas. Muitos escritores não 
                    eram apenas fãs de passeios a pé, como também escreveram muito 
                    sobre a paixão pela caminhada. Charles Dickens, Ernest Hemingway, 
                    Kate Chopin, Ralph Waldo Emerson, Henry Thoreau e também 
                    escritoras contemporâneas como Delphine de Vigan confessam o amor 
                    deles pela deambulação. Daí, como escritora, que ideia melhor do 
                    que a de incorporar passeios no meu quotidiano, e de proporcionar 
                    passeios aos lugares mais interessantes de Berlim?
                </p>
            </Container>
        )
    }
}

export default Sobremim;