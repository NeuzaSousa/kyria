import React from 'react';
import Container from 'react-bootstrap/Container';
import Kyria from './pictures/Kyria.jpg';

class Ubermich extends React.Component {
    render() {
        return (
            <Container fluid className="container4">
                <h1 className="title">Über mich</h1>
                <img src={Kyria} alt="Kyria" />
                <p>
                    Als ehemalige Studentin der bildenden Künste und 
                    Nordamerikastudien/Französisch mit Schwerpunkt Literatur habe 
                    ich die letzten Zehn Jahre als Gästeführerin in diversen Museen, 
                    Radio Moderatorin, -Sprecherin, Journalistin und Übersetzerin 
                    gearbeitet.
                </p>
                <p>
                    Nachdem im März 2020 Museumsführungen von einem Tag auf den 
                    anderen aufhörten, hatte ich endlich die Zeit und Motivation an 
                    einer Führung zu arbeiten, an die ich schon seit geraumer Zeit
                     gedacht hatte. Jedes Mal, wenn ich an dem bizarren 
                     Architektur-mix rund um den Kleistpark vorbeilief dachte ich 
                     mir- Wahnsinn, dass, an diesem geschichtsträchtigem Ort, keine 
                     Führungen stattfinden.
                </p>
                <p>
                    Liest man Biographien, über Schriftsteller stellt man fest, dass
                     Schreiben und laufen Hand in Hand gehen. Viele Autoren spazierten 
                     nicht nur gerne ausgiebig selbst, sie schrieben auch über die Liebe 
                     zum Spaziergang. Charles Dickens, Ernest Hemingway, Kate Chopin, Ralph 
                     Waldo Emerson, Henry Thoreau und auch zeitgenössische Autoren wie die 
                     Französin Delphine de Vigan bekennen ihre Passion zum Streifzug. Die
                     Idee lag nahe, dass ich als Schreiberin Spaziergänge in meinen Alltag 
                     miteinbringe, was gibt es also an besseren Ideen, diese Spaziergänge 
                     anzubieten?
                </p>
                
            </Container>
        )
    }
}

export default Ubermich;