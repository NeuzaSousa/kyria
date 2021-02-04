import React from 'react';
import Container from 'react-bootstrap/Container';
import Kyria from './pictures/Kyria.jpg';

class Aproposdemoi extends React.Component {
    render() {
        return (
            <Container fluid className="container3">
                <h1 className="title">À propos de moi</h1>
                <img src={Kyria} alt="Kyria" />
                <p>
                    En tant qu’ancienne étudiante des Beaux-Arts et de Langues & 
                    Littérature Franco-Américaine, j'ai travaillé comme animatrice de 
                    radio, oratrice, médiatrice culturelle en musées, traductrice et 
                    écrivaine.
                </p>
                <p>
                    Après la crise de Covid en mars 2020 et la fermeture des musées, 
                    la plupart de mes revenus ont été supprimés d’un jour à l'autre. 
                    J’en ai donc profité pour investir mon temps et ma motivation 
                    dans une offre de visite à laquelle je pensais depuis des années.
                     A chaque fois que je passais par le Kleistpark et que je voyais 
                     le mélange éclectique de l'architecture de l’ancien château 
                     baroque, des bâtiments du Bauhaus et les vestiges hideux du 
                     style fonctionnel des années 50, je me demandais pourquoi personne 
                     n’organisait des visites dans cet endroit si riche en histoire?
                </p>
                <p>
                    Si on lit des biographies d’écrivains, on constate qu'écrire va 
                    de pair avec se balader. Si beaucoup d’auteurs sont adeptes des 
                    promenades, ils les ont aussi décrites. Charles Dickens, Henry 
                    David Thoreau, Ralph Waldo Emerson, Kate Chopin, entre autres et 
                    pour mentionner une autrice française contemporaine, Delphine de 
                    Vigan, en sont quelques exemples.
                </p>
                <p>
                    Férue d’écriture, je désirais agrémenter mon quotidien de 
                    promenades. Quel meilleur choix que d'offrir des visites dans 
                    cet endroit chargé d`histoire?
                </p>
            </Container>
        )
    }
}

export default Aproposdemoi;