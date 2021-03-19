import React from 'react';
import Container from 'react-bootstrap/Container';
import Kyria from './pictures/Kyria.jpg';
import Lightbox from './Lightbox';

class English extends React.Component {
  
  openImg() {
    console.log("Hello")
    window.open(<img src='./pictures/kleist.jpg' alt="Kleist" />, '_blank');
    
  }

    render() {
        return (
            <Container fluid className="container2">
              <h2>A little park, 500 years of Berlin history</h2>
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
                  <em> Stauffenberg </em>(Operation Valkyrie) and the members of the <em>weiße Rose</em></li>
                <li>The design of the park</li>
                <li> The Supreme Court and its dealing of the most recent terrorist attacks in 
                  Germany such as the attacks on <em>Breitscheidplatz</em></li>
                <li>The architecture of the <em>Pallasseum</em> and its cultural significance 
                  in German Rap music</li>
              </ul>
              
              <Lightbox />

              <Container fluid className="container3">
                <h1 className="title">About me</h1>
                <hr />
                <img src={Kyria} alt="Kyria" />
                <p>
                  I am an art school dropout and later studied Northamerican studies and French with a focus on literature and have been working as 
                  a radio host, freelance speaker, museum educator, writer and interpreter for the past 10 years.
                </p>
                <p>
                  After Covid my main income  that came  from guided tours in museums, was just gone from one day to another. But it also gave me 
                  the final time and motivation to work on a walking tour that I had been thinking about for years. Each time I walked past 
                  Kleistpark,  this eclectic mix of hideous functional 50's architecture next to  gorgeous Bauhaus buildings from the 20s and the 
                  royal baroque leftovers of the palace hit me like a ton of bricks. How come there are myriads of tours involving the most basic 
                  buildings in Berlin one could read up on a travel guide from the 1960s but none that cover the real pearls of this city?
                </p>
                <p>
                If you read biographies of writers, you probably realized that writing and walking goes hand in hand. Hemingway was a big walker, 
                so were Charles Dickens, Henry David Thoreau, Ernest Hemingway, Kate Chopin, Ralph Waldo Emerson and also contemporary writers like 
                Delphine de Vigan. I still love writing and aim to do it every day but in the tradition of the big writers I feel like it should be 
                combined with walking. What better idea then to offer a walking tour at this very special place named after the most underrated 
                German writer?
                </p>
              </Container>
            </Container>

        )    
    }
}

export default English;