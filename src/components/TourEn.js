import React from 'react';
import Container from 'react-bootstrap/Container';

class TourEn extends React.Component {
    render() {
        return (
            <Container fluid className="container3">
                <h1 className="title">Kleistpark tour</h1>
                <div className="tour">
                    <p>
                        The tour encompasses 300 years of German history, with special focus on World War 
                        II and the wild 70s when Icons of music and popular culture like <strong>David 
                        Bowie</strong>, <strong>Iggy Pop</strong> or <strong>Christiane F.</strong> ran 
                        the streets of <em>Schöneberg</em> looking for inspiration, fame, drugs and 
                        destruction. We will discuss a few prominent figures in German literature such
                         as <strong>Heinrich von Kleist</strong> and <strong>ETA Hoffmann</strong> and 
                         how they tie into the history of the park. But the area has been playing a role 
                         in very recent history as well. The <em>Palasseum</em>  seen on uncountable 
                         album covers and music video by German Rap artists - Once a symbol for social 
                         decay - today a prestigious piece of real estate under protection.
                        Depending on the particular interest of the group I can put the focus wherever 
                        it is desired these are the options:
                    </p>
                    <ul>
                        <li>David Bowie and his life in Berlin</li>
                        <li>Iggy Pop and his life in Berlin</li>
                        <li>Christiane F and her turf in Schöneberg</li>
                        <li>Frederik the great and the leftovers from the original palace of Berlin</li>
                        <li>Goebbels and his infamous sport palace speech</li>
                        <li>Roland Freisler: judge who basically  set in motion the Holocaust and is 
                            responsible for the sentencing of countless people including
                            <em> Stauffenberg</em> and the members of the <em>weiße Rose</em></li>
                        <li>The design of the park</li>
                        <li> The Supreme court and its dealing of the most recent terrorist attacks in 
                            Germany such as the attacks on <em>Breitscheidplatz</em></li>
                        <li>The architecture of the <em>Pallasseum</em> and its cultural significance 
                            in German Rap music</li>
                    </ul>

                </div>
            </Container>
        )
    }
}

export default TourEn;