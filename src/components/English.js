import React from 'react';
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
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



class English extends React.Component {
  
  openImg () {
    console.log("Hello")
    //window.open('./pictures/kleist.jpg', '_blank');
    
  }

    render() {
        return (
            <Container fluid className="container2">
              <p>
                The tour encompasses 300 years of German history, with special focus on World War 
                II and the wild 70s when Music and Pop Culture Icons like <strong>David 
                Bowie</strong>, <strong>Iggy Pop</strong> or <strong>Christiane F.</strong> ran 
                the streets of <em>Schöneberg</em> looking for inspiration, fame, drugs and 
                destruction. We will discuss a few prominent figures in German literature such
                as <strong>Heinrich von Kleist</strong> and <strong>ETA Hoffmann</strong> and 
                how they tie into the history of the park. But the area has been playing a striking role 
                in very recent history as well. The <em>Palasseum</em>, just one example of the architectural pearls in close proximity of the park, has been spotted on countless 
                album covers and music videos by German Rap artists. Once a symbol for social 
                decay - today a prestigious piece of real estate under protection - A quintessential Berlin story.
              </p>
              <p>
                Depending on the particular interest of the group I can put the focus wherever 
                it is desired these are the options:
              </p>
              <ul className="list">
                <li>David Bowie and his life in Berlin</li>
                <li>Iggy Pop and his life in Berlin</li>
                <li>Christiane F and her turf in Schöneberg</li>
                <li>Frederik the Great and the leftovers from the original palace of Berlin</li>
                <li>Goebbels and his infamous sport palace speech</li>
                <li>Roland Freisler: judge who basically set in motion the Holocaust and is 
                  responsible for the sentencing of countless people including
                  <em> Stauffenberg</em>(Operation Valkyria) and the members of the <em>weiße Rose</em></li>
                <li>The design of the park</li>
                <li> The Supreme Court and its dealing of the most recent terrorist attacks in 
                  Germany such as the attacks on <em>Breitscheidplatz</em></li>
                <li>The architecture of the <em>Pallasseum</em> and its cultural significance 
                  in German Rap music</li>
              </ul>
    
              <div className="galery">
                <Row>
                  <Col><img src={KleistImg} alt="Kleist" onClick={this.openImg()} />Heinrich von Kleist</Col>
                  <Col><img src={SportImg} alt="Sportpalast rede" />Sportpalast speech</Col>
                  <Col><img src={WirKinderImg} alt="Wir Kinder von Bahnhofzoo" />Christiane F. movie still</Col>
                </Row>
                <Row>
                  <Col><img src={PalasseumImg} alt="Palasseum" />Palasseum</Col>
                  <Col><img src={Bowie1Img} alt="Bowie1" />David Bowie, 70s</Col>
                  <Col><img src={HoffmannImg} alt="A drawing by ETA Hoffmann" />Drawing, ETA Hoffmanm</Col>
                </Row>
                <Row>
                  <Col><img src={GoebbelsImg} alt="Goebbels" />Goebbels</Col>
                  <Col><img src={PoeImg} alt="Poe" />Drawing from Edgar Allen Poe book</Col>
                  <Col><img src={Bowie2Img} alt="Bowie2" />David Bowie visiting Berlin</Col>
                </Row>
              </div>
              

              <Container fluid className="container3">
                <h1 className="title">About me</h1>
                <hr />
                <img src={Kyria} alt="Kyria" />
                <p>
                  I am an art school dropout and later studied Northamerican studies and French with a focus on literature and for the past ten years have been working
                  as a radio host, freelance speaker, museum educator, writer and interpreter.
                </p>
                <p>
                  After Covid my main income that from museums was just gone from one day to another, but it also gave me the final time and motivation to work on a
                  walking tour that I had been thinking about offering each time I walked passed the park and the eclectic mix of hideous functional 50's architecture,
                  the gorgeous Bauhaus buildings from the 20s, the royal Rococo leftovers of the
                </p>
                <p>
                  If you read a biography about a writer you probably realized that writing and walking goes hand in hand. Hemingway was a big walker, so were Charles
                  Dickens, Henry David Thoreau, Ernest Hemingway, Kate Chopin, Ralph Waldo Emerson and also contemporary writers like Delphine de Vigan chugs in a good… miles
                  a day. I still love writing and aim to do It every day but in the tradition of the big writers I feel like it should be combined with walking. What
                  better idea then to offer a walking tour at this special place?
                </p>
              </Container>
            </Container>

        )    
    }
}

export default English;