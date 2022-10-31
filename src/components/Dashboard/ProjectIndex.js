import React from "react";
// import React, { useEffect, useState} from "react";


function ProjectIndex({ project, onUpdateProject, onDeleteProject }) {
  // Add function to handle button click
  function handleUpdateProject() {
    console.log("clicked project:", project);

    fetch("https://project-tracker-phase5.herokuapp.com/projects", {
      method: "PATCH",
      headers: {
        Authorization: 'Bearer ${token}',
      },
      body: JSON.stringify({
        isUpdated: !project.isUpdated,
      }),
    })
      .then((r) => r.json())
      .then((updatedProject) => onUpdateProject(updatedProject));
  }

  //delete
  function handleDeleteProject() {
    fetch("https://project-tracker-phase5.herokuapp.com/projects", {
      method: "DELETE",
      headers: {
        Authorization: 'Bearer ${token}',
      }
    })
      .then((r) => r.json())
      .then(() => onDeleteProject(project));
    console.log("project deleted");
  }
  return (
    <li className={project.isInDashboard ? "in-dashboard" : ""}>
      <span>{project.name}</span>
      <span className="category">{project.category}</span>
      <button
        className={project.updated ? "remove" : "add"}
        onClick={handleAddtoDashboardClick}
      >
        {project.isInDashboard? "Remove From" : "Add to"} Dashboard
      </button>
      <button className="remove" onClick={handleDeleteClick}>
        Delete
      </button>
    </li>
  );
}

export default ProjectIndex;