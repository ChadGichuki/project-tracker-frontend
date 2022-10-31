import React, { useEffect, useState } from "react";
import ProjectIndex from "./ProjectIndex";

function ProjectList() {
    const [projects, setProjects] = useState([]);

    

    useEffect(() => {
        fetch("https:project-tracker-phase5.herokuapp.com/projects")
        .then((r) => r.json())
        .then((projects) => {
          setProjects(projects);
        });
    }, []);

    // function handleDeleteProject(id) {
    //     fetch("https:project-tracker-phase5.herokuapp.com/projects/${id}", {
    //         method: "DELETE",
    //         headers: {
    //             Authorization: 'Bearer ${token}',
    //         },

    //     })
    //     .then((r) => r.json())
    //     .then(() => {
    //         const updatedProjects = projects.filter((p) => p.id !==id);
    //         setProjects(updatedProjects);
    //     });
    // }
    function handleUpdateProject(id, correctIndex) {
        fetch("https:project-tracker-phase5.herokuapp.com/projects/${id}"), {
            method: "PATCH",
            headers: {
                Authorization: 'Bearer ${token}'
        },
        body: JSON.stringify({ correctIndex}),
    }

    .then((r) => r.json())
    .then((updatedProject) => {
      const updatedProjects = projects.map((p) => {
        if (p.id === updatedProject.id) return updatedProject;
        return p;
      });
      setProjects(updatedProjects);
    });
}

const projectIndex = projects.map((p) => (
    <ProjectIndex
    key={p.id}
    project={p}
    onDeleteClick={handleDeleteProject}
    onUpdateProject={handleUpdateProject}
    />
));

return (
    <section>
        <h1>projects</h1>
        <ul>{projectIndex}</ul>
    </section>
);

}

export default ProjectList;
