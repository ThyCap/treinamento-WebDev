import React, { Component } from 'react';
import './App.css';

import Menu from './Menu.js';
import Projects from './Projects.js';

class App extends Component {
  state = {
    projects: [
      {
        name: 'Cara ou Coroa',
        tags: ['HTML', 'CSS', 'Javascript', 'ChartJS'],
        design: 'own',
        description:
          'Simulador de cara ou coroa, com possibilidade de apostar e plot do gráfico de incidência de eventos',
        id: 1,
      },
      {
        name: 'Moedas em Pokémon',
        tags: ['HTML', 'CSS', 'Javascript', 'API'],
        design: 'own',
        description:
          'Utiliza API para saber conversão em tempo real de moedas estrangeiras para BRL e as transforma em pokemons',
        id: 2,
      },
      {
        name: 'Price Grid',
        tags: ['HTML', 'CSS'],
        design: 'premade',
        description: 'Exercício proposto pelo site Frontend Mentor',
        id: 3,
      },
      {
        name: 'Four card feature',
        tags: ['HTML', 'CSS', 'Flexbox'],
        design: 'premade',
        description: 'Exercício proposto pelo site Frontend Mentor',
        id: 4,
      },
      {
        name: 'Huddle Landing Page',
        tags: ['HTML', 'CSS', 'Javascript', 'Flexbox'],
        design: 'premade',
        description: 'Exercício proposto pelo site Frontend Mentor',
        id: 5,
      },
      {
        name: 'Base Apparel',
        tags: ['Python', 'Machine Learning'],
        design: 'own',
        description: 'Exercício proposto pelo site Frontend Mentor',
        id: 6,
      },
      {
        name: 'Machine Learning: identificação de dígitos',
        tags: ['Python', 'Machine Learning'],
        design: 'own',
        description:
          'Treinamento de rede neural para identificar digítos cursivos',
        id: 7,
      },
      {
        name: 'Machine Learning: identificação de dígitos',
        tags: ['Python', 'Machine Learning'],
        design: 'own',
        description:
          'Treinamento de rede neural para identificar digítos cursivos',
        id: 8,
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <Menu projects={this.state.projects} />
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
