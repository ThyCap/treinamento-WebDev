import React from 'react';

function Projects(props) {
  const { projects } = props;

  const projectsList = projects.map((project) => {
    return (
      <div className="item" key={project.id}>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
      </div>
    );
  });

  return <div className="projects">{projectsList}</div>;
}

export default Projects;
