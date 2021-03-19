import React from 'react';
import Container from 'react-bootstrap/Container';
import Kyria from './pictures/Kyria.jpg';
import Lightbox from './Lightbox';

class Deutsch extends React.Component {
    render() {
        return (
            <Container fluid className="container2">
                <h2>Ein kleiner Park, 500 Jahre Berliner Geschichte</h2>
                <p>
                    Meine Kleistpark-Tour beginnt vor David Bowies Berliner Wohnung, Hauptstraße 155. Bereits vor seinem Umzug nach Berlin wird 
                    Bowie im April '76 an der russisch-polnischen Grenze festgehalten, weil er einen Koffer voller Nazi-Krimskrams mit sich 
                    schleppt, vor allem Bücher. Er recherchiere doch nur für ein Musical über Goebbels, fleht Bowie die Grenzpolizisten an. Und 
                    kommt davon.
                </p>

                <p>Die Tour umfasst 500 Jahre Berliner Geschichte, mit speziellem Fokus auf dem 2. Weltkrieg und den Ikonen der wilden 70er Jahre 
                    David Bowie, Christiane F., Iggy Pop, Romy Haag. Bei privaten Gruppen kann der Fokus auch je nach Geschmack gewählt werden. 
                    Stationen sind:
                </p>

 
                <ul className="list">

                    <li>David Bowie und sein Leben in Berlin</li>

                    <li>Iggy „The idiot“ Pop</li>

                    <li>Christiane F. , mehr als nur eine berühmte Drogensüchtige</li>

                    <li>Friedrich der Große und die Reste des originalen Berliner Schlosses</li>

                    <li>Goebbels Sportpalastrede: „Wollt ihr den totalen Krieg“</li>

                    <li>Schauprozesse gegen die Hitler Attentäter Stauffenberg und seine Mitverschwörer (Operation Walküre engl. Valkyrie)</li>

                    <li>Der königliche botanische Garten und der heutige Park</li>

                    <li>Adelbert von Chamisso, Autor von Peter Shlemihls wundersame Geschichte</li>

                    <li>Heinrich von Kleist, dessen dichterisches Genie selbst Goethe neidisch machte</li>

                    <li>Das Kammergericht heute und seine Prozesse (u.a. Terroranschlag Breitscheidplatz, 2016)</li>

                    <li>Palasseum, Sozialwohnungsprojekt der 70er (gebaut über dem Sportpalastbunker) Symbol für soziale Brennpunkte, zu sehen in unzähligen deutschen Rap-Videos u.a. von Bushido und Fler.</li>
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