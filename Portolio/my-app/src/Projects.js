import React from 'react';

function Projects(props) {
  const { projects, isChecked, design } = props;
  let projectsList = '';

  const trueTags = Object.keys(isChecked).filter(
    (tag) => tag !== 'noTags' && isChecked[tag]
  );

  let showProjects = projects.filter(
    (project) =>
      // check if 'noTags' is checked
      (isChecked.noTags ||
        // check if all checked tags are in the projects
        trueTags.every((tag) => {
          return project.tags.includes(tag);
        })) &&
      // check if the project's type of design is checked
      design[project.design]
  );

  if (showProjects.length === 0) {
    projectsList = <h1 className="error">Não há projetos correspondentes</h1>;
  } else {
    projectsList = showProjects.map((project) => {
      return (
        <div
          className="item"
          key={project.id}
          style={{
            backgroundImage: `url(./img/${project.imgUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPositionY: '-1px',
          }}
        >
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <ul>
            <li>
              <a
                href={project.gitUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live code
              </a>
            </li>
          </ul>
        </div>
      );
    });
  }

  return <div className="projects">{projectsList}</div>;
}

export default Projects;
