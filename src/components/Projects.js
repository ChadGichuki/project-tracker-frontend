import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import './Projects.css'

function Projects(){
    const [projects, setProjects] = useState([])

    const token = localStorage.getItem('token')
    const id = useParams()['id']

    let [cohortName, setCohortName] = useState("")

    useEffect(()=> {
        fetch(`https://project-tracker-phase5.herokuapp.com/cohorts/${id}`, {
            method: "GET",
            headers: {
                Authorization:`Bearer ${token}`,
            }
        })
        .then((res) => res.json())
        .then((data) => {
            setProjects(data.projects)
            setCohortName(data.name)
        })
    }, [])

    function handleCategoryChange(e){
        let currentCategory = e.target.value

        fetch(`https://project-tracker-phase5.herokuapp.com/cohorts/${id}`, {
            method: "GET",
            headers: {
                Authorization:`Bearer ${token}`,
            }
        })
        .then((res) => res.json())
        .then((data) => {
            setCohortName(data.name)
            let filteredProjects = data.projects.filter((project) => {
                if (currentCategory === "All"){
                    return project
                }else {
                    return project.category === currentCategory
                }
            })
            setProjects(filteredProjects)
        })

    }

    return(
        <div className="projectsPage">
            <div className="projectsHeader">
                <h1>{cohortName}</h1>
                <form className="filterBy">
                    <label className="selectLabel">Filter Projects By: </label>
                    <select className="selectField" name="category" onChange={handleCategoryChange}>
                        <option value="All">All</option>
                        <option value="Fullstack">Fullstack</option>
                        <option value="Android">Android</option>
                    </select>
                </form>
            </div>
            <div className="projectsCardsDiv">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project}/>
            ))}
            </div>

        </div>
    )
}

export default Projects
