import React from 'react';
import Container from 'react-bootstrap/Container';

class Reise extends React.Component {
    render() {
        return (
            <Container fluid className="container3">
                <h1>Reise</h1>
                <Container fluid className="tour">
                    <p>
                        Die Tour umfasst 300 Jahre deutsche Geschichte, mit speziellem Fokus auf dem 2. Weltkrieg und den Ikonen der wilden 70er in Berlin David Bowie, 
                        Christiane F., Iggy Pop. Bei privaten Gruppen kann der Fokus auch je nach Geschmack gewählt werden. Stationen sind:
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