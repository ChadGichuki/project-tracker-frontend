import React, { useEffect, useState, useContext } from "react";
import Dashfetch from "./Dashfetch";
import "../Dashboard/dashboard.css";
import "../Dashboard/NewProjModal.css";
import { Context } from "../Context/Context";
import { Pagination } from 'semantic-ui-react'
import { Container } from "react-bootstrap";


//import NewProjModal from './NewProjModal'
import { Modal } from "react-bootstrap";


function Dashboard() {
  //context
  const [context, setContext] = useContext(Context)
  const [projectsIndex, setProjectsIndex] = useState([])
 
  useEffect(()=> {
    fetch("http://localhost:3000/projects")
    .then((res) => res.json())
    .then((data) => {
      setProjectsIndex(data)
      setProjects(data.projects)
    })
  }, [])

  const handlePage = (e, { activePage }) => {
  let gotopage = { activePage }
  let pagenum = gotopage.activePage
  let pageString = pagenum.toString()
  

  const url ="http://localhost:3000/projects?page=" + pageString
  fetch(url)
  .then(res => res.json())
  .then((data) => {
    setProjectsIndex(data)
    setProjects(data.projects)
  })

}

  //Bootstrap modal states
  const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);

      function handleShow() {
        setShow(true);
    }

  // const [openModal,setOpenModal] = useState(false)
  const [projects, setProjects] = useState([]);

  // Fetching projects
  const token = localStorage.getItem("token");

  // const fetchProjects = ()=>{
  //     // fetch("https://project-tracker-phase5.herokuapp.com/projects",
  //     // {
  //     //     method: "GET",
  //     //     headers: {
  //     //         Authorization: `Bearer ${token}`,
  //     //     }
  //     // }).then((res)=>res.json())
  //     // .then((projects)=>setProjects(projects))
  // }



  useEffect(() => {
    fetch("https://project-tracker-phase5.herokuapp.com/projects", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((projects) => setProjects(projects));
  }, []);

  // function addingProjects(newProjects){
  //   const updatedProjects = [...projects,newProjects]
  //   setProjects(updatedProjects)
  // }

  //Controlled form states
  const [formData,setFormData] = useState(
    {
     name: " ",
     description: " ",
     category: " ",
     github_link: " ",
     cohort_id: " ",
    }
  )

  //handleSubmit for modal

  //posting projects
  function handleSubmit(e){
    e.preventDefault();
    console.log(context)

    const cohort_id = context.cohort_id
    fetch("https://project-tracker-phase5.herokuapp.com/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        Authorization:`Bearer ${token}`,

      },
      body: JSON.stringify({
        name: formData.name,
        description: formData.description,
        category: formData.category,
        cohort_id: cohort_id,
        github_link: formData.github_link,
      })
    }).then((res)=>res.json())
    .then((newProject)=>{
      setProjects([...projects,newProject]);
      setFormData({
        ...formData,
        name: " ",
     description: " ",
     category: " ",
     github_link: " ",
     cohort_id: " ",
      })


    }

    )
    handleClose()
  }
  function handleChange(event) {
    const key = event.target.id;
    setFormData({ ...formData, [key]: event.target.value });
  }

    // let projectsOutline = projects.map((project)=>(
    // ))

  function handleDelete(id){
    const updatedProjects = projects.filter((p) => p.id !== id);
    setProjects(updatedProjects);
  }

  function handleEdit(editedProject){
    const updatedProjects = projects.map((project) => {
      if (project.id === editedProject.id){
        return editedProject
      }
      return project
    })
    setProjects(updatedProjects)
  }


  return (
    <>
      {/* { <NewProjModal  show={openModal} closeModal={setOpenModal} onAddingProjects={addingProjects}/>} */}
      <div className="backgroundDashboard">
        <div className="displayItFlex">
          <h1 className="myProjHeader">My Projects</h1>
          <button className="AddNewProjBtn" onClick={handleShow}>Add New Project</button>
        </div>
      </div>
      {/* <NewProjModal/> */}

      <div className="AnotherProjectCard">
        {projects.map((project) => (
          <Dashfetch key={project.id} project={project} handleEdit={handleEdit} handleDelete={handleDelete}/>
        ))}

<Container>
                <Pagination onPageChange={handlePage} size='mini' siblingRange="3"
                defaultActivePage={projectsIndex.page}
                totalPages={projectsIndex.pages} />
            </Container>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            action=""
            className="newProjModalContainer"
            onSubmit={handleSubmit}
          >
            <h2 className="modalProjDetails">Project Details</h2>
            <label htmlFor="Title">Title</label>
            <br />
            <input
              type="text"
              placeholder="Name"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="Description">Description</label>
            <br />
            <textarea
              id="description"
              value={formData.description}
              onChange={handleChange}
              cols="25"
              rows="5"
            ></textarea>
            <br />
            <label htmlFor="link">Github Link</label>
            <br />
            <input
              type="url"
              placeholder="github link"
              id="github_link"
              value={formData.github_link}
              onChange={handleChange}
            />
            <br />

            <br />
            <label htmlFor="category">Project Category</label>
            <br />
            <select name="category" id="category" onChange={handleChange}>
              <option value="Fullstack">Fullstack</option>
              <option value="Android">Android</option>
            </select>
            <br />
            <br />
            <button className="projBtn">Add New Project</button>
            <button
              className="projBtn"
              id="projBtn1"
              onClick={() => {
                handleClose();
              }}
            >
              Close
            </button>
          </form>
        </Modal.Body>
      </Modal>

    </>
  );
}

export default Dashboard;
