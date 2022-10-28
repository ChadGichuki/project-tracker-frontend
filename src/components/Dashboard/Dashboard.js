import React, { useEffect, useState,  } from 'react'
// import {useform} from 'react-hook-form'
// import { Link, Route } from 'react-router-dom';
// import { Link, useParams } from "react-router-dom";
// import Members from '../about/Members'
// import Projectdetails from './Projectdetails';
import './dashboard.css'
 
function Dashboard() {
    // const [page, setPage] = useState("List");
    // const [dashboard, setDashboard] = useState([]);
    // const [project, setProjects] = useState([]);
    // const [member, setMembers] = useState([]);
// const id = useParams()['id']
const token = localStorage.getItem('token')

useEffect(()=> {
   fetch('https://project-tracker-phase5.herokuapp.com/projects',{
   method: "GET",
   headers: {
    Authorization:`Bearer ${token}`,
   }
})
   .then((res) => res.json())
  .then((data) => console.log(data)
 )
}, []);

// function onAddProject(newProject) {
//     newProject([...project, newProject]);
//     console.log("new project :", newProject);
// }
 
// function onUpdateProject(updatedProject){
//     const updatedProjects = project.map((project) => {
//       if (project.id === updatedProject.id) return updatedProject
//       return project;
//     });
  
//     setProjects(updatedProjects);
//     console.log(updatedProjects);
//     console.log("update projects :", updatedProjects);

//     function onAddMembers(newMember) {
//         setMembers([ ...members, newMember]);
//         console.log("new member :", newMember);
//     }


return(
<div id="viewport">
 
  <div id="sidebar">
    <header>
      <a href="#Project Tracker">...</a>
    </header>
    <ul class="nav">
      <li>
        <a href="/">
          <i class="zmdi zmdi-view-dashboard"></i> My Dashboard
        </a>
      </li>
      <li>
        <a href="/">
          <i class="zmdi zmdi-link"></i> Add Project
        </a>
      </li>
      <li>
        <a href="/">
          <i class="zmdi zmdi-widgets"></i> Update Project
        </a>
      </li>

      <li> 
        <a href="/">
          <i class="zmdi zmdi-info-outline"></i> Add Members
        </a>
      </li>
    </ul>
  </div>

  <div id="content">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="/"><i class="zmdi zmdi-notifications text-danger"></i>
            </a>
          </li>
          <li><a href="/">Notifications</a></li>
        </ul>
      </div>
    </nav>
    <div class="container-fluid">
      <h1>This is my dashboard</h1>
      <p>
        It is empty for now but, watch this space.
      </p>
    </div>
  </div>
</div>
 
);
}
// }
 
 
 
export default Dashboard;
