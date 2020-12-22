import React from 'react';
import './App.css';
import EnglishImg from './gb.png';
import GermanImg from './de.png';
import FrenchImg from './fr.png';
import PortugueseImg from './pt.png';
import Deutsch from './Deutsch';
import Francais from './Francais';
import Portugues from './Portugues';
import English from './English';
import Aboutme from './Aboutme';
import Error404View from './Error404View';
import { Switch, Route, NavLink } from "react-router-dom";
import TourEn from "./TourEn";
import Tournee from "./Tournee";
import ContactEn from "./ContactEn";
import ContactFr from "./ContactFr";
import Ubermich from "./Ubermich";
import Reise from "./Reise";
import Visita from "./Visita";
import Kontakt from "./Kontakt";
import Contacto from "./Contacto";
import Aproposdemoi from "./Aproposdemoi";
import Sobremim from "./Sobremim";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
