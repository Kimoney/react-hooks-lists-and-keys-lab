import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  // console.log(projects);
  const singleProject = projects.map( (oneProject) => (
    <ProjectItem
    key={oneProject.id}
    name={oneProject.name}
    about={oneProject.about}
    technologies={oneProject.technologies}
    />
  ))
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
      {/* render ProjectItem components here */}
      {singleProject}
      </div>
    </div>
  );
}

export default ProjectList;
