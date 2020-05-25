import React, { Component } from 'react';
import './App.css';

import Menu from './Menu.js';
import Projects from './Projects.js';

import projectDb from './projects.json';

class App extends Component {
  state = {
    projects: projectDb.projects,
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
