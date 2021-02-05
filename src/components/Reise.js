import React from 'react';
import Container from 'react-bootstrap/Container';

class Reise extends React.Component {
    render() {
        return (
            <Container fluid className="container4">
                <h1 className="title">Kleistpark Tour</h1>
                <Container fluid className="tour">
                    <p><strong>
                        Der Kleistpark ist schwer zu schlagen, wenn es um Plätze mit Geschichte per m² geht. Und wir sprechen hier von Berlin, einer 
                        Stadt die Geschichte atmet und man an keinem cm² vorbeigehen kann an dem nicht wahnsinnig viel passiert ist.
                        Die Kleistpark tour umfasst über 300 Jahre deutsche Geschichte und die dazugehörige Architektur und Literatur. Heinrich 
                        Kleist, wurde knapp 30 Jahre nach Goethe geboren wurde, was man wahrscheinlich schonmal als den ersten großen Fehler in seiner 
                        Karriere sehen könnte, der zu dem tragischen Selbstmord des Genies führte. In gleichen Maße talentiert wie gequält ist ein Klischee das 
                        bei den Heinrichs in der deutschen Literaturgeschichte leider allzuoftpräsent ist.
                    </strong></p>
                    <p>
                        Die Tour umfasst 300 Jahre deutsche Geschichte, mit speziellem Fokus auf dem 2. Weltkrieg und den Ikonen der wilden 70er in Berlin <strong>David Bowie</strong>, 
                        <strong>Christiane F</strong>., <strong>Iggy Pop</strong>. Bei privaten Gruppen kann der Fokus auch je nach Geschmack gewählt werden. Stationen sind:
                    </p>
                    <ul>
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
                </Container>
            </Container>
        )
    }
}

export default Reise;