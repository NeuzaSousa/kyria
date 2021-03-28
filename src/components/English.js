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
                My tour starts in front of David Bowie´s former apartment on Hauptstraße 155. Before his move to Berlin in April '76, Bowie is kept on 
                the Russian-Polish border because he is carrying a suitcase full of Nazi memorabilia with him; mostly books.
              </p>
              <p>
                “I am just researching for a Goebbels musical…” Bowie begs the border police to let him pass. And they do.
              </p>
              <p>
                The tour encompasses 500 years of Berlin history with a special focus on World War II and the wild 70s when musical and other pop
                culture icons such as Bowie, Iggy Pop, and Christiane F. ran the streets of Schöneberg looking for inspiration, fame, drugs, and 
                destruction.
              </p>
              <p>
                We will discuss a few prominent figures in German literature such as <strong>Heinrich von Kleist</strong>, Edgar Allen Poe’s role 
                model <strong>ETA Hoffmann</strong> and <strong>Adelbert von Chamisso</strong>, how they tie into the history of the park. This area 
                has been playing a striking role in very recent history as well. The <em>Palasseum</em>, just one example of the architectural pearls 
                in close proximity of the park, has appeared on countless album covers and music videos by German rap artists. Once a symbol for 
                social decay, today a prestigious piece of real estate under protection - a quintessential Berlin story.
              </p>
              <p>
                Depending on the particular interest of the group I can put the focus wherever it is desired - these are the options:
              </p>
              <ul className="list">
                <li>David Bowie and his life in Berlin</li>
                <li>Iggy Pop and his life in Berlin</li>
                <li>Christiane F. and her turf in Schöneberg</li>
                <li> Adelbert von Chamisso and ETA Hoffmann, the great-grandfathers of horror stories. Every principle of every horror story, from 
                  the notion of selling your shadow to the devil to how you can recognize Vampires on their shadowless selves started with these guys 
                  (Carl Gustav Jung would have a field day!)</li>
                <li>Frederik the Great and the leftovers from the original palace of Berlin</li>
                <li>Goebbels and his infamous sport palace speech: “Do you want total war?”</li>
                <li>Show trials against the attempted Hitler assassination: <em>Stauffenberg</em> and his co-conspirators (Operation <em>Valkyrie</em>)</li>
                <li> The royal garden and the park today</li>
                <li>The Kammergericht today and its dealing of the most recent terrorist attacks in Germany, such as the attacks on 
                  <em> Breitscheidplatz</em></li>
                <li>Architectural pearls such as the brutalist <em>Pallasseum</em> and its cultural significance in German rap music</li>
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