import React from 'react';
import Container from 'react-bootstrap/Container';
import Kyria from './pictures/Kyria.jpg';
import Lightbox from './Lightbox';

class Deutsch extends React.Component {
    render() {
        return (
            <Container fluid className="container2">
                <p>
                    Der Kleistpark ist schwer zu schlagen, wenn es um Plätze mit Geschichte per m² geht. Und wir sprechen hier von Berlin, einer
                    Stadt die Geschichte atmet und man an keinem cm² vorbeigehen kann an dem nicht wahnsinnig viel passiert ist.
                    Die Kleistpark tour umfasst über 300 Jahre deutsche Geschichte und die dazugehörige Architektur und Literatur. Heinrich
                    Kleist, wurde knapp 30 Jahre nach Goethe geboren wurde, was man wahrscheinlich schonmal als den ersten großen Fehler in seiner
                    Karriere sehen könnte, der zu dem tragischen Selbstmord des Genies führte. In gleichen Maße talentiert wie gequält ist ein Klischee das
                    bei den Heinrichs in der deutschen Literaturgeschichte leider allzuoftpräsent ist.
                </p>
                <p>
                    Die Tour umfasst 300 Jahre deutsche Geschichte, mit speziellem Fokus auf dem 2. Weltkrieg und den Ikonen der wilden 70er in Berlin <strong>David Bowie</strong>,
                        <strong>Christiane F</strong>., <strong>Iggy Pop</strong>. Bei privaten Gruppen kann der Fokus auch je nach Geschmack gewählt werden. Stationen sind:
                    </p>
                <ul className="list">
                    <li>David Bowies Haus und sein Leben in Berlin</li>
                    <li>Iggy Pop</li>
                    <li>Christiane F.</li>
                    <li>Friedrich der Große und die Reste des Originalen Berliner Schlosses</li>
                    <li>Goebbels Sportpalastrede</li>
                    <li>Freisler Prozesse</li>
                    <li>Die Gestaltung des Parks</li>
                    <li>Adelbert Chamisso</li>
                    <li>Heinrich von Kleist</li>
                    <li>Das Kammergericht heute und seine Prozesse (u.a. Verurteilung der Terroristen vom Breitscheidplatz)</li>
                    <li>Palasseum: Symbol für soziale Brennpunkte, zu sehen in unzähligen deutschen Rap videos, Bushido und auf dem Plattencover von Fler.</li>
                </ul>

                <Lightbox />

                <Container fluid className="container3">
                    <h1 className="title">Über mich</h1>
                    <hr />
                    <img src={Kyria} alt="Kyria" />
                    <p>
                        Als ehemalige Studentin der bildenden Künste und
                        Nordamerikastudien/Französisch mit Schwerpunkt Literatur habe
                        ich die letzten Zehn Jahre als Gästeführerin in diversen Museen,
                        Radio Moderatorin, Sprecherin, Journalistin und Übersetzerin
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
            </Container>

        )
    }
}

export default Deutsch;