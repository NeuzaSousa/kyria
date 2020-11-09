import React from 'react';
import './App.css';
import English from './gb.png';
import Deutsch from './de.png';
import Français from './fr.png';
import Portugues from './pt.png';



class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <div id="flags">
          <img src={English} alt="English" />
          <img src={Deutsch} alt="Deutsch" />
          <img src={Français} alt="Français" />
          <img src={Portugues} alt="Portugues" />
        </div>
        <div id="container1">
          <h1>Tour Guide Kyria Sobrinho</h1>
        </div>
      </div>
    );
  }
}

export default App;
