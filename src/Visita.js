import React from 'react';
import Container from 'react-bootstrap/Container';

class Visita extends React.Component {
    render() {
        return (
            <Container fluid className="container3">
                <h1 className="title">Visita ao Kleistpark</h1>
                <div className="tour">
                    <p>A visita guiada inclui 300 anos de História, com um foco especial na segunda guerra mundial e as ícones dos anos setenta: 
                    David Bowie, Christiane F. (Eu, Christiane F., 13 Anos, Drogada Prostituida.)</p>
 
                    <p>Com grupos particulares, eu posso focalizar a visita como queiram</p>
  
                    <ul>
                        <li>David Bowie e a vida dele em Berlim</li>
                        <li>Iggy Pop e a vida dele em Berlim</li>
                        <li>Os lugares que frequentava Christiane F.</li>
                        <li>Frederico II da Prússia e os restos originais do Palácio</li>
                        <li>O discurso no Sportpalast de Goebbels</li>
                        <li>Roland Freisler,  o juíz sanguinário mas conhecido no Terceiro Reich que trabalhava no Tribunal Supreno Federal e os 
                        seus processos.</li>
                        <li>A concepção do parque e a função de Adalbert Chamisso</li>
                        <li>Heinrich von Kleist</li>
                        <li>O Supremo tribunal e os casos atuais.</li>
                        <li>O Palasseum e os começos do Gangsta Rap alemao com Aggro Berlin…</li>
                    </ul>
                </div>
            </Container>
        )
    }
}

export default Visita;