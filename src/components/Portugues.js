import React from 'react';
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
//import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import KleistImg from './pictures/kleist.jpg';
import SportImg from './pictures/sportpalastrede.jpg';
import WirKinderImg from './pictures/wirkinder.jpg';
import PalasseumImg from './pictures/palasseum.jpg';
import Bowie1Img from './pictures/bowie1.jpg';
import GoebbelsImg from './pictures/goebbels.jpg';
import HoffmannImg from './pictures/hoffmann.jpg';
import PoeImg from './pictures/poe.jpg';
import Bowie2Img from './pictures/bowie2.jpg';
import Kyria from './pictures/Kyria.jpg';
import { Redirect } from 'react-router-dom';

class Portugues extends React.Component {
    render() {
        return (
            <Container fluid className="container2">
                <p>A visita guiada inclui 300 anos de História, com um foco especial na II Guerra Mundial e as ícones dos anos setenta:  
                    <strong> David Bowie</strong>, <strong>Iggy Pop</strong>, <strong>Christiane F</strong>. (Eu, Christiane F., 13 Anos, Drogada, Prostituida)</p>
 
                <p>Com grupos particulares, eu posso focalizar a visita como queiram nos seguintes temas</p>
  
                <ul className="list">
                    <li>David Bowie e a sua vida em Berlim</li>
                    <li>Iggy Pop e a sua vida em Berlim</li>
                    <li>Os lugares que frequentava Christiane F.</li>
                    <li>Frederico II da Prússia e as ruínas do Palácio</li>
                    <li>O discurso no Sportpalast de Goebbels</li>
                    <li>Roland Freisler,  o juíz sanguinário mais conhecido no Terceiro Reich que trabalhava no Supremo Tribunal Federal e os 
                    seus processos</li>
                    <li>A concepção do parque e a função de Adalbert Chamisso</li>
                    <li>Heinrich von Kleist</li>
                    <li>O Supremo tribunal e os casos atuais</li>
                    <li>O Palasseum e os começos do Gangsta Rap alemao com Aggro Berlin…</li>
                </ul>

                <div className="galery">
                    <Row>
                        <Col><img src={KleistImg} alt="Kleist" />Heinrich von Kleist</Col>
                        <Col><img src={SportImg} alt="Sportpalast rede" />Discurso no Sportpalast</Col>
                        <Col><img src={WirKinderImg} alt="Wir Kinder von Bahnhofzoo" />Imagem do filme "Christiane F."</Col>
                    </Row>
                    <Row>
                        <Col><img src={PalasseumImg} alt="Palasseum" />Palasseum</Col>
                        <Col><img src={Bowie1Img} alt="Bowie1" />David Bowie, 70s</Col>
                        <Col><img src={HoffmannImg} alt="A drawing by ETA Hoffmann" />Desenho, ETA Hoffmanm</Col>
                    </Row>
                    <Row>
                        <Col><img src={GoebbelsImg} alt="Goebbels" />Goebbels</Col>
                        <Col><img src={PoeImg} alt="Poe" />Desenho num livro de Edgar Allen Poe</Col>
                        <Col><img src={Bowie2Img} alt="Bowie2" />David Bowie visitando Berlin</Col>
                    </Row>
                </div>

                <Container fluid className="container3">
                <h1 className="title">Sobre mim</h1>
                <hr />
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
            </Container>
        )
    }
}

export default Portugues;