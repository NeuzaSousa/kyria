import React from 'react';
import './App.css';
import English from './gb.png';
import German from './de.png';
import French from './fr.png';
import Portuguese from './pt.png';
import Deutsch from './Deutsch';
import Francais from './Francais';
import Portugues from './Portugues';




class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <div id="flags">
          <img src={English} alt="English" />
          <img src={German} alt="Deutsch" />
          <img src={French} alt="Français" />
          <img src={Portuguese} alt="Portugues" />
        </div>
        <div id="container1">
          <h1>Tour Guide Kyria Sobrinho</h1>
        </div>
      </div>
    );
  }
}

export default App;
