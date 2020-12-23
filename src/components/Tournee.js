import React from 'react';
import Container from 'react-bootstrap/Container';

class Tournee extends React.Component {
    render() {
        return (
            <Container fluid className="container3">
                <h1 className="title">Kleistpark tournée</h1>
                <div className="tour">
                    <p>
                        La visite couvre 300 ans d’histoire allemande avec un accent sur la deuxième guerre mondiale et les icônes des années 70 à Berlin : David Bowie, Iggy Pop, Christiane F du livre Moi, Christiane F., 13 ans, droguée, prostituée… Avec les groupes privés, il est possible de se concentrer spécifiquement sur certains en fonction des envies.
                        Les stations sont normalement:
                    </p>
                    <ul>
                        <li>L’appartement de David Bowie et sa vie à Berlin</li>
                        <li>Iggy Pop, sa vie à Berlin et son amitié avec Bowie</li>
                        <li>Frédéric II et les vestiges du château originel de Berlin</li>
                        <li>Goebbels et son discours au Sportpalast</li>
                        <li>Roland Freisler, juge pénal du troisième Reich qui condamnait Stauffenberg et les membres de la Weiße Rose</li>
                        <li>La conception du parc</li>
                        <li>Adelbert Chamisso, poète, écrivain et botaniste franco-allemand</li>
                        <li>Heinrich von Kleist, écrivain éclipsé par Goethe</li>
                        <li>Le Kammergericht aujourd’hui : les procès contemporains (par exemple l’attaque terroriste de la Breitscheidplatz…)</li>
                    </ul>   
                </div>
            </Container>
        )
    }
}

export default Tournee;