import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './addNinja';
import './App.css';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Roshi', age: 25, belt: 'black', id: '1' },
      { name: 'Toshi', age: 30, belt: 'green', id: '2' },
      { name: 'Yoshi', age: 20, belt: 'white', id: '3' },
    ],
  };

  addNinja = (ninja) => {
    let randNum = Math.floor(Math.random() * 20).toString();
    let ids = this.state.ninjas.map((ninja) => ninja.id);

    while (randNum in ids) {
      console.log('opa');
      randNum = Math.floor(Math.random() * 20).toString();
    }

    ninja.id = randNum;

    let tempNinjas = [...this.state.ninjas, ninja];

    this.setState({
      ninjas: tempNinjas,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React tutorial</h1>
          <p> Welcome! :)</p>
          <Ninjas ninjas={this.state.ninjas} />
          <AddNinja addNinja={this.addNinja} />
        </header>
      </div>
    );
  }
}

export default App;
