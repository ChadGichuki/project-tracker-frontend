import React, { useEffect, useState } from 'react'
import { Link, Route } from 'react-router-dom';
// import Projectdetails from '../Dashboard/Projectdetails'
import '../components/dashboard.css'

function Dashboard() {
const [, setDashboard] = useState([]);


useEffect(()=> {
    fetch(`https://project-tracker-phase5.herokuapp.com/projects/${id}`, {
        method: "POST",
        headers: {
            Authorization:`Bearer ${token}`,
        }
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
}, [])

// function onUpdateProject(updatedProject){
//     const updatedProjects = projects.map((q) => {
//       if (project.id === updatedProject.id) return updatedProject
//       return p;
//     });
    
//     setProjects(updatedProjects);
//     console.log(updatedProjects);
//     console.log("update projects :", updatedProjects);

return(
    <><div id="sidebar">
        <header>
            <a href="#">Project Tracker</a>
        </header>
        <ul class="nav">
            <li>
                <a href="#">
                    <i class="zmdi zmdi-view-dashboard"></i> My Dashboard
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="zmdi zmdi-link"></i> Add Project
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="zmdi zmdi-widgets"></i> Update Project
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="zmdi zmdi-settings"></i> Add Project Members
                </a>
            </li>
        </ul>
    </div>
    <div id="content">
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a href="#"><i class="zmdi zmdi-notifications text-danger"></i>
                            </a>
                        </li>
                        <li><a href="#">Test User</a></li>
                    </ul>
                </div>
            </nav>
            <div class="container-fluid">
                <h1>My Projects</h1>
                <p>
                    This helps me keep a track of my projects done individually and with other members
                </p>
            </div>
        </div></>


);
}



export default Dashboard;