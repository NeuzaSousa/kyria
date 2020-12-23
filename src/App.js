import React from 'react';
import './App.css';

import EnglishImg from './components/pictures/gb.png';
import GermanImg from './components/pictures/de.png';
import FrenchImg from './components/pictures/fr.png';
import PortugueseImg from './components/pictures/pt.png';

import English from './components/English';
import Deutsch from './components/Deutsch';
import Francais from './components/Francais';
import Portugues from './components/Portugues';
import Error404View from './components/Error404View';

import Aboutme from './components/Aboutme';
import TourEn from "./components/TourEn";
import ContactEn from "./components/ContactEn";


import Ubermich from "./components/Ubermich";
import Reise from "./components/Reise";
import Kontakt from "./components/Kontakt";

import Aproposdemoi from "./components/Aproposdemoi";
import Tournee from "./components/Tournee";
import ContactFr from "./components/ContactFr";

import Sobremim from "./components/Sobremim";
import Visita from "./components/Visita";
import Contacto from "./components/Contacto";

import Container from 'react-bootstrap/Container';
import { Switch, Route, NavLink } from "react-router-dom";
import { Redirect } from 'react-router-dom';


class App extends React.Component {
  
  render() {
    return (
      <Container fluid className="container1">

        <div id="flags">
          <NavLink to="/english"><img src={EnglishImg} alt="English" /></NavLink>
          <NavLink to="/deutsch"><img src={GermanImg} alt="Deutsch" /></NavLink>
          <NavLink to="/francais"><img src={FrenchImg} alt="Français" /></NavLink>
          <NavLink to="/portugues"><img src={PortugueseImg} alt="Portugues" /></NavLink>
        </div>

        <Redirect to="/english"/>

        <Switch>
          <Route path="/english" component={English} />
          <Route path="/deutsch" component={Deutsch} />
          <Route path="/francais" component={Francais} />
          <Route path="/portugues" component={Portugues} />       
          <Error404View />
        </Switch>

        <Route path={"/english" + "/aboutme"} component={Aboutme} />
        <Route path={"/english" + "/tour"} component={TourEn} />
        <Route path={"/english" + "/contact"} component={ContactEn} />
        <Route path={"/deutsch" + "/ubermich"} component={Ubermich} />
        <Route path={'/deutsch' + '/reise'} component={Reise} />
        <Route path={"/deutsch" + "/kontakt"} component={Kontakt} />
        <Route path={'/francais' + "/aproposdemoi"} component={Aproposdemoi} />
        <Route path={'/francais' + "/tournee"} component={Tournee} />
        <Route path={'/francais' + "/contactfr"} component={ContactFr} />
        <Route path={'/portugues' + "/sobremim"} component={Sobremim} />
        <Route path={'/portugues' + "/visita"} component={Visita} />
        <Route path={'/portugues' + "/contacto"} component={Contacto} />

      </Container>
    );
  }
}

export default App;
