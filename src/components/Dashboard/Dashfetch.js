import React, { useEffect, useState, useContext } from 'react'
import '../Dashboard/dashboard.css'
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";


function Dashfetch({project}) {

 const { id, name, description, github_link, category, cohort_id, user_id, users } = project
 const [projects, setProjects] =useState([]);

 const token =localStorage.getItem ('token')

    function handleDeleteProject(id) {
      fetch("https://project-tracker-phase5.herokuapp.com/projects/${id}", {
          method: "DELETE",
          headers: {
              Authorization: 'Bearer ${token}',
          },

      })
      .then((r) => r.json())
      .then(() => {
          const updatedProjects = projects.filter((p) => p.id !==id);
          setProjects(updatedProjects);
      });
  }

  return (
  <div className='container12'>
<div className='projectCard12'>
  <h2 className='projectTitle'>{name}</h2>
  <p>{description}</p>
  <a href={github_link} target="_blank" rel="noopener noreferrer">Github Link</a>
  <p className='projectCategory'>{category}</p>
  <div className='ProjectButtons'>
  <button className='projButton'><AiIcons.AiFillEye/></button>
  <button className='projButton'onClick={handleDeleteProject}><RiIcons.RiDeleteBin6Fill/></button>
  <button className='projButton'><MdIcons.MdGroupAdd/></button>
  <button className='projButton'><FaIcons.FaUserEdit/></button>
  </div>
  </div>
  
  </div>
  )
}

export default Dashfetch