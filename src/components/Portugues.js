import React from 'react';
import Container from 'react-bootstrap/Container';
import Kyria from './pictures/Kyria.jpg';
import Lightbox from './Lightbox';

class Portugues extends React.Component {
    render() {
        return (
            <Container fluid className="container2">
                <h2>Um Pequeno Parque, 500 anos de História de Berlím</h2>
                <p>A visita guiada inclui 300 anos de História, com um foco especial na II Guerra Mundial e as ícones dos anos setenta:  
                    <strong> David Bowie</strong>, <strong>Iggy Pop</strong>, <strong>Christiane F</strong>. (Eu, Christiane F., 13 Anos, Drogada, Prostituida)</p>
 
                <p>Com grupos particulares, eu posso focalizar a visita como queiram nos seguintes temas</p>
  
                <ul className="list">
                    <li>David Bowie e a sua vida em Berlim</li>
                    <li>Iggy Pop e a sua vida em Berlim</li>
                    <li>Os lugares que frequentava Christiane F.</li>
                    <li>Frederico II da Prússia e as ruínas do Palácio</li>
                    <li>O discurso no Sportpalast de Goebbels</li>
                    <li>Roland Freisler, o juíz sanguinário mais conhecido no Terceiro Reich que trabalhava no Supremo Tribunal Federal e os 
                    seus processos</li>
                    <li>A concepção do parque e a função de Adalbert Chamisso</li>
                    <li>Heinrich von Kleist</li>
                    <li>O Supremo tribunal e os casos atuais</li>
                    <li>O Palasseum e os começos do Gangsta Rap alemao com Aggro Berlin…</li>
                </ul>

                <Lightbox />

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