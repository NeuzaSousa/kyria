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
import { Switch, Route, NavLink } from "react-router-dom";
import TourEn from "./TourEn";
import Contact from "./Contact";
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
          <NavLink to="/"><img src={EnglishImg} alt="English" /></NavLink>
          <NavLink to="/deutsch"><img src={GermanImg} alt="Deutsch" /></NavLink>
          <NavLink to="francais"><img src={FrenchImg} alt="Français" /></NavLink>
          <NavLink to="portugues"><img src={PortugueseImg} alt="Portugues" /></NavLink>
        </div>

        <Switch>
          <Route path="/" exact>
            <English />
          </Route>
          <Route path="/deutsch">
            <Deutsch />
          </Route>
          <Route path="/francais">
            <Francais />
          </Route>
          <Route path="/portugues">
            <Portugues />
          </Route>
          <Route path="/aboutme">
            <Aboutme />
          </Route>
          <Route path="/tour">
            <TourEn />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          {/*<Error404View />*/}
        </Switch>
      </Container>
    );
  }
}

export default App;
