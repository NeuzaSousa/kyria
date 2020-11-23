import React from 'react';
import './App.css';
import English from './gb.png';
import German from './de.png';
import French from './fr.png';
import Portuguese from './pt.png';
import Deutsch from './Deutsch';
import Francais from './Francais';
import Portugues from './Portugues';
import Homeview from './Homeview';
import Aboutme from './Aboutme';
import { Switch, Route, NavLink } from "react-router-dom";
import TourEn from "./TourEn";
import Contact from "./Contact";




class App extends React.Component {
  
  render() {
    return (
      <div className="App">

      <div id="flags">
        <nav>
            <NavLink to="/"><img src={English} alt="English" /></NavLink>
            <NavLink to="/deutsch"><img src={German} alt="Deutsch" /></NavLink>
            <NavLink to="francais"><img src={French} alt="Français" /></NavLink>
            <NavLink to="portugues"><img src={Portuguese} alt="Portugues" /></NavLink>
        </nav>
      </div>

        <Switch>
          <Route path="/" exact>
            <Homeview />
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
      </div>
    );
  }
}

export default App;
