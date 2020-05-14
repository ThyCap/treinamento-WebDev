import React from 'react';

function Projects(props) {
  const { projects } = props;
  // const isChecked = {
  //   noTags: false,
  //   HTML: true,
  //   CSS: true,
  // };

  const projectsList = projects.map((project) => {
    if (true) {
      return (
        <div className="item" key={project.id}>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
        </div>
      );
    } else {
      return null;
    }
  });

  return <div className="projects">{projectsList}</div>;
}

export default Projects;
