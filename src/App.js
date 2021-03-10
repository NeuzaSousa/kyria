import React from 'react';
import './App.css';

import EnglishImg from './components/pictures/gb.png';
import GermanImg from './components/pictures/de.png';
import FrenchImg from './components/pictures/fr.png';
import PortugueseImg from './components/pictures/pt.png';
import InstaImg from './components/pictures/insta-color.png';

import English from './components/English';
import Deutsch from './components/Deutsch';
import Francais from './components/Francais';
import Portugues from './components/Portugues';
import Error404View from './components/Error404View';

import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Switch, Route, NavLink, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';


class App extends React.Component {

  render() {
    return (
      <Container fluid className="container1">
        <div id="flags">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              Language
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item><Link to="/english"><img src={EnglishImg} alt="English" />EN</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/deutsch"><img src={GermanImg} alt="Deutsch" />DE</Link></Dropdown.Item>
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
          <Error404View />
        </Switch>

        <Container fluid className="container4">
          <Row className="insta">
            <Col>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/operation_walkyria/"><img src={InstaImg} alt="Instagram" /><br />@operation_walkyria</a>
            </Col>
            <Col>
              <span id="email">&#9993;</span><span id="email-address"><br /> kyria.sobrinho@gmail.com</span>
            </Col>
          </Row>
        </Container>

        <p className="bottom">&#169; 2021 Kyria Sobrinho</p>
      </Container>
    );
  }
}

export default App;
