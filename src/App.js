import React from 'react';
import './App.css';

import EnglishImg from './components/pictures/gb.png';
import GermanImg from './components/pictures/de.png';
import FrenchImg from './components/pictures/fr.png';
import PortugueseImg from './components/pictures/pt.png';
import InstaImg from './components/pictures/insta.png';
//import EmailImg from './components/pictures/email.png';
//import HomeImg from './components/pictures/home.png';
//import PhoneImg from './components/pictures/phone.png';

import English from './components/English';
import Deutsch from './components/Deutsch';
import Francais from './components/Francais';
import Portugues from './components/Portugues';
import Contact from './components/Contact';
import Lightbox from './components/Lightbox';
import Error404View from './components/Error404View';

import Container from 'react-bootstrap/Container';
//import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { Switch, Route, NavLink, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';


class App extends React.Component {

  render() {
    return (
      <Container fluid className="container1">
        <div id="flags">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              <Link to="/english"><img src={EnglishImg} alt="English" />EN</Link>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item><NavLink to="/deutsch"><img src={GermanImg} alt="Deutsch" />DE</NavLink></Dropdown.Item>
              <Dropdown.Item><NavLink to="/francais"><img src={FrenchImg} alt="Français" />FR</NavLink></Dropdown.Item>
              <Dropdown.Item><NavLink to="/portugues"><img src={PortugueseImg} alt="Portugues" />PT</NavLink></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <h1>Operation Walkyria</h1>
            <hr />

          <Redirect to="/english"/>
        <Switch>
          <Route path="/english" component={English} />
          <Route path="/deutsch" component={Deutsch} />
          <Route path="/francais" component={Francais} />
          <Route path="/portugues" component={Portugues} />      
          <Route path="/contact" component={Contact} />      
          <Route path="/lightbox" component={Lightbox} />      
          <Error404View />
        </Switch>

        <div className="insta">
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/operation_walkyria/"><img src={InstaImg} alt="Instagram" /></a>
          <Link to="/contact"><span className="email">&#x1f4e7;</span></Link>
          <Link to="/contact"><span className="phone">&#9742;</span></Link>
          <Link to="/lightbox">Lightbox</Link>
        </div>

        <p className="bottom">&#169; 2021 Kyria Sobrinho</p>
      </Container>
    );
  }
}

export default App;
