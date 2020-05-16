import React, { Component } from 'react';
import './App.css';

import Menu from './Menu.js';
import Projects from './Projects.js';

class App extends Component {
  state = {
    projects: [
      {
        name: 'Portfolio (esse site)',
        gitUrl: 'https://google.com',
        liveUrl: 'https://google.com',
        tags: ['HTML', 'CSS', 'Javascript', 'React'],
        design: 'own',
        description:
          'Website criado com react para mostrar meus projetos realizados até então.',
        id: 1,
      },
      {
        name: 'Cara ou Coroa',
        gitUrl: 'https://google.com',
        liveUrl: 'https://google.com',
        tags: ['HTML', 'CSS', 'Javascript', 'ChartJS'],
        design: 'own',
        description:
          'Simulador de cara ou coroa, com possibilidade de apostar e plot do gráfico de incidência de eventos',
        id: 2,
      },
      {
        name: 'Moedas em Pokémon',
        gitUrl: 'https://google.com',
        liveUrl: 'https://google.com',
        tags: ['HTML', 'CSS', 'Javascript', 'API'],
        design: 'own',
        description:
          'Utiliza API para saber conversão em tempo real de moedas estrangeiras para BRL e as transforma em pokemons',
        id: 3,
      },
      {
        name: 'Price Grid',
        gitUrl: 'https://google.com',
        liveUrl: 'https://google.com',
        tags: ['HTML', 'CSS'],
        design: 'premade',
        description: 'Exercício proposto pelo site Frontend Mentor',
        id: 4,
      },
      {
        name: 'Four card feature',
        gitUrl: 'https://google.com',
        liveUrl: 'https://google.com',
        tags: ['HTML', 'CSS', 'Flexbox'],
        design: 'premade',
        description: 'Exercício proposto pelo site Frontend Mentor',
        id: 5,
      },
      {
        name: 'Huddle Landing Page',
        gitUrl: 'https://google.com',
        liveUrl: 'https://google.com',
        tags: ['HTML', 'CSS', 'Javascript', 'Flexbox'],
        design: 'premade',
        description: 'Exercício proposto pelo site Frontend Mentor',
        id: 6,
      },
      {
        name: 'Base Apparel',
        gitUrl: 'https://google.com',
        liveUrl: 'https://google.com',
        tags: ['HTML', 'CSS', 'Javascript', 'Flexbox'],
        design: 'premade',
        description: 'Exercício proposto pelo site Frontend Mentor',
        id: 7,
      },
      {
        name: 'Machine Learning: identificação de dígitos',
        gitUrl: 'https://google.com',
        liveUrl: 'https://google.com',
        tags: ['Python', 'Machine Learning'],
        design: 'own',
        description:
          'Treinamento de rede neural para identificar digítos cursivos',
        id: 8,
      },
      {
        name: 'Machine Learning: cachorros vs gatos',
        gitUrl: 'https://google.com',
        liveUrl: 'https://google.com',
        tags: ['Python', 'Machine Learning'],
        design: 'own',
        description:
          'Treinamento de rede neural para identificar entre fotos de cachorros ou gatos',
        id: 9,
      },
    ],
    isChecked: {},
    design: {},
  };

  tagsToFilter = (tagList) => {
    this.setState((prevState) => ({
      ...prevState,
      isChecked: tagList,
    }));
  };

  designFilter = (designList) => {
    this.setState((prevState) => ({
      ...prevState,
      design: designList,
    }));
  };

  render() {
    return (
      <div className="App">
        <Menu
          projects={this.state.projects}
          actionTag={this.tagsToFilter}
          actionDesign={this.designFilter}
        />
        <Projects
          projects={this.state.projects}
          isChecked={this.state.isChecked}
          design={this.state.design}
        />
      </div>
    );
  }
}

export default App;

// VK.api('users.get',{fields: 'photo_50'},function(data){
//   if(data.response){
//       this.setState({ //the error happens here
//           FirstName: data.response[0].first_name
//       });
//       console.info(this.state.FirstName);
//   }

// }.bind(this));
