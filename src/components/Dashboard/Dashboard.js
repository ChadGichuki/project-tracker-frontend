import React, {useEffect,useState} from 'react'
import Dashfetch from './Dashfetch'
import '../Dashboard/dashboard.css'
import NewProjModal from './NewProjModal'


function Dashboard() {

  const [openModal,setOpenModal] = useState(false)
  const [projects,setProjects] = useState([])

    // Fetching projects
    const token = localStorage.getItem('token')

    const fetchProjects = ()=>{
        fetch("https://project-tracker-phase5.herokuapp.com/projects",
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then((res)=>res.json())
        .then((projects)=>setProjects(projects))
    }

     console.log("From outside:",projects)

    useEffect(
        fetchProjects,[]
    )


    // let projectsOutline = projects.map((project)=>(
    // ))









  return (
    <>
     { openModal && <NewProjModal closeModal={setOpenModal}/>}
    <div className='backgroundDashboard'>
      <button className='AddNewProjBtn' onClick={()=>{setOpenModal(true)}}>Add New Project</button>
   
    </div>
   
  <div className='AnotherProjectCard'>
{projects.map((project)=>(
  <Dashfetch key={project.id} project={project}/>
))}
</div>

</>
  )
}

export default Dashboard