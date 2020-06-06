import React, { Component } from 'react';
import './App.css';

import Menu from './Menu.js';
import Projects from './Projects.js';
import AboutMe from './aboutMe.js';

import projectDb from './projects.json';

class App extends Component {
  state = {
    projects: projectDb.projects,
    isChecked: {},
    design: {},
    show: 'about',
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

  changeToAbout = (e) => {
    this.setState(
      (prevState) => ({
        ...prevState,
        show: 'about',
      }),
      function () {
        document.getElementById('aboutBtn').classList.add('selectedOps');
        document.getElementById('aboutDiv').classList.remove('hide');

        document.getElementById('projectsBtn').classList.remove('selectedOps');
        document.getElementById('projectsDiv').classList.add('hide');
      }
    );
  };

  changeToProjects = (e) => {
    this.setState(
      (prevState) => ({
        ...prevState,
        show: 'projects',
      }),
      function () {
        document.getElementById('aboutBtn').classList.remove('selectedOps');
        document.getElementById('aboutDiv').classList.add('hide');

        document.getElementById('projectsBtn').classList.add('selectedOps');
        document.getElementById('projectsDiv').classList.remove('hide');
      }
    );
  };

  whatToDisplay = () => {};

  render() {
    return (
      <div className="App">
        <div className="options">
          <button
            id="aboutBtn"
            className="selectedOps"
            onClick={this.changeToAbout}
          >
            Sobre Mim
          </button>
          <button id="projectsBtn" onClick={this.changeToProjects}>
            Projetos
          </button>
        </div>
        <div id="aboutDiv" className="aboutMe hide">
          <AboutMe />
        </div>
        <div id="projectsDiv" className="display">
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
      </div>
    );
  }
}

export default App;
