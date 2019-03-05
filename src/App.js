import React, { Component } from 'react';
import './App.css';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      str: 10,
      dex: 10,
      con: 10,
      int: 10,
      wis: 10,
      cha: 10
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  calcProf(event) {
    
  }

  reset() {
    this.setState({
      str: 10,
      dex: 10,
      con: 10,
      int: 10,
      wis: 10,
      cha: 10
    });
  }

  render() {
    const strSkill = Math.floor((this.state.str - 10) / 2);
    const dexSkill = Math.floor((this.state.dex - 10) / 2);
    const conSkill = Math.floor((this.state.con - 10) / 2);
    const intSkill = Math.floor((this.state.int - 10) / 2);
    const wisSkill = Math.floor((this.state.wis - 10) / 2);
    const chaSkill = Math.floor((this.state.cha - 10) / 2);

    return (
      <div className="App">
        <h1 className="Title">Player Character Sheet</h1>
        <div className="Content">
          <div className="Attributes">
            <ul>
              <li>Str: </li>
              <li>Dex: </li>
              <li>Con: </li>
              <li>Int: </li>
              <li>Wis: </li>
              <li>Cha: </li>
            </ul>
            <ul>
              <li><input onChange = {this.handleChange.bind(this)} value={this.state.str} type="number" step="1" max="20" min="0" name="str"></input></li>
              <li><input onChange = {this.handleChange.bind(this)} value={this.state.dex} type="number" step="1" max="20" min="0" name="dex"></input></li>
              <li><input onChange = {this.handleChange.bind(this)} value={this.state.con} type="number" step="1" max="20" min="0" name="con"></input></li>
              <li><input onChange = {this.handleChange.bind(this)} value={this.state.int} type="number" step="1" max="20" min="0" name="int"></input></li>
              <li><input onChange = {this.handleChange.bind(this)} value={this.state.wis} type="number" step="1" max="20" min="0" name="wis"></input></li>
              <li><input onChange = {this.handleChange.bind(this)} value={this.state.cha} type="number" step="1" max="20" min="0" name="cha"></input></li>
            </ul>
          </div>
          <div className="Skills">
            <ul>
              <li>Acrobatics: </li>
              <li>Animal Handling: </li>
              <li>Arcana: </li>
              <li>Athletics: </li>
              <li>Deception: </li>
              <li>History: </li>
              <li>Insight: </li>
              <li>Intimidation: </li>
              <li>Investigation: </li>
            </ul>
            <ul>
              <li>{dexSkill}</li>
              <li>{wisSkill}</li>
              <li>{intSkill}</li>
              <li>{strSkill}</li>
              <li>{chaSkill}</li>
              <li>{intSkill}</li>
              <li>{wisSkill}</li>
              <li>{chaSkill}</li>
              <li>{intSkill}</li>
            </ul>
            <ul>
              <li>Medicine: </li>
              <li>Nature: </li>
              <li>Perception: </li>
              <li>Performance: </li>
              <li>Persuasion: </li>
              <li>Religion: </li>
              <li>Sleight of Hand: </li>
              <li>Stealth: </li>
              <li>Survival: </li>
            </ul>
            <ul>
              <li>{wisSkill}</li>
              <li>{intSkill}</li>
              <li>{wisSkill}</li>
              <li>{chaSkill}</li>
              <li>{chaSkill}</li>
              <li>{intSkill}</li>
              <li>{dexSkill}</li>
              <li>{dexSkill}</li>
              <li>{wisSkill}</li>
            </ul>
          </div>
        </div>
        <div id="btns">
          <button onClick = {this.reset.bind(this)}>Reset</button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
