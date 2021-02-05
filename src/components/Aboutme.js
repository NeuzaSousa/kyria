import React from 'react';
import Container from 'react-bootstrap/Container';
import Kyria from './pictures/Kyria.jpg';

class Aboutme extends React.Component {
    render() {
        return (
            <Container fluid className="container4">
                <h1 className="title">About me</h1>
                <img src={Kyria} alt="Kyria" />
                <p>
                    I am an art school dropout and later studied Northamerican studies and French with a focus on literature and for the past ten years have been working 
                    as a radio host, freelance speaker, museum educator, writer and interpreter.
                </p>
                <p>
                    After Covid my main income that from museums was just gone from one day to another, but it also gave me the final time and motivation to work on a 
                    walking tour that I had been thinking about offering each time I walked passed the park and the eclectic mix of hideous functional 50`s architecture, 
                    the gorgeous Bauhaus buildings from the 20s, the royal Rococo leftovers of the
                </p>
                <p>
                    If you read a biography about a writer you probably realized that writing and walking goes hand in hand. Hemingway was a big walker, so were Charles
                    Dickens, Henry David Thoreau, Ernest Hemingway, Kate Chopin, Ralph Waldo Emerson and also contemporary writers like Delphine de Vigan chugs in a good… miles
                     a day. I still love writing and aim to do It every day but in the tradition of the big writers I feel like it should be combined with walking. What 
                     better idea then to offer a walking tour at this special place? 
                </p>
            </Container>
        )
    }
}

export default Aboutme;