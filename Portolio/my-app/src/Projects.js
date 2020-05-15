import React from 'react';

function Projects(props) {
  const projects = props.projects;
  const isChecked = props.isChecked;

  const design = props.design;

  let trueTags = [];

  let ranlist = { ...isChecked };
  delete ranlist.noTags;

  Object.keys(ranlist).forEach((tag) => {
    if (ranlist[tag]) {
      trueTags.push(tag);
    }
  });

  let projectsList = projects.map((project) => {
    let test1 = isChecked.noTags;
    let test2 = trueTags.every((tag) => {
      return project.tags.includes(tag);
    });
    let test3 = design[project.design];

    if ((test1 || test2) && test3) {
      return (
        <div className="item" key={project.id}>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            Clique aqui
          </a>
        </div>
      );
    } else {
      return null;
    }
  });

  console.log(projectsList);

  if (
    projectsList.every((elem) => {
      return elem === null;
    })
  ) {
    projectsList = <h1 className="error">Não há projetos correspondentes</h1>;
  }

  return <div className="projects">{projectsList}</div>;
}

export default Projects;
