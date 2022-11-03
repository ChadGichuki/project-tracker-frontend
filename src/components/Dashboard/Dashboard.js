import React, { useEffect, useState, useContext } from "react";
import Dashfetch from "./Dashfetch";
import "../Dashboard/dashboard.css";
import "../Dashboard/NewProjModal.css";
import { Context } from "../Context/Context";

//import NewProjModal from './NewProjModal'
import { Modal } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import { Pagination } from 'semantic-ui-react'
import { Container } from "react-bootstrap";


function Dashboard() {
  //context
  const [context, setContext] = useContext(Context)
  const [projectsIndex, setProjectsIndex] = useState([])

  //Managing modals
  const [actionTriggered, setActionTriggered] = useState("");
  const [showDetail, setShowDetail] = useState(false);
  const handleCloseDetail = () => setShowDetail(false);

  //modal trigger for image upload
  function handleUploadImageForm() {
    setActionTriggered("UPLOADImage");
    setShowDetail(true);
  }

  //modal trigger for project upload
  function handleAddProject(){
    setActionTriggered("ADDproject")
    setShowDetail(true)
  }


   //Image upload form cloudinary for setting state

  
   const [image,setImage] = useState({});
   const [profile, setProfile]= useState(context.image_url)
 
   const handleChange1 =  (e) =>{
     e.persist();
     setImage(e.target.files[0])
   }
 
 
 //handle submit for cloudinary input
 
 const handleSubmit1 = (e)=>{
   e.preventDefault();
   
   const data = new FormData();
   data.append('image', image)
   data.append('user_id',context.user.id)
 
   
   
 
   fetch('https://project-tracker-phase5.herokuapp.com/items',{
     method: 'POST',
     headers: {
       Authorization:`Bearer ${token}`,
 
     },
     body: data
   
 
   }).then((res)=>res.json()).then((data)=>{
     setProfile(data.item)
   })
   toast.success('Image Uploaded Successfully!')
    handleCloseDetail()
 }
 
  const [projects, setProjects] = useState([]);

  // Fetching projects
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("https://project-tracker-phase5.herokuapp.com/projects", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) =>{
        if (res.ok){
          res.json().then((data) => { 
            setProjectsIndex(data)
            setProjects(data.projects)
          });
        }
        else{
          setProjects([])
        }
      } 
     )
    //  setProfile(context.image_url)
     
  }, []);

  const handlePage = (e, { activePage }) => {
    let gotopage = { activePage }
    let pagenum = gotopage.activePage
    let pageString = pagenum.toString()
    
  
    const url ="https://project-tracker-phase5.herokuapp.com/projects?page=" + pageString
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => res.json())
    .then((data) => {
      setProjectsIndex(data)
      setProjects(data.projects)
    })
  
  }


  //Controlled form states
  const [formData,setFormData] = useState(
    {
     name: " ",
     description: " ",
     category: "Fullstack",
     github_link: " ",
     cohort_id: " ",
    }
  )

  //handleSubmit for modal
  // const cohort_id = context.cohort_id
  //posting projects
  

  function handleSubmit(e){
    e.preventDefault();
    let $cohort_id = context.user.cohort_id
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
        cohort_id: $cohort_id,
        github_link: formData.github_link,
      })
    }).then((res)=>res.json())
    .then((data)=>{
      setProjects([...projects,data.body]);

      setFormData({
        ...formData,
        name: " ",
     description: " ",
     category: "Fullstack",
     github_link: " ",
     cohort_id: " ",
      })

    toast.success('Project Added Successfully')
    })
    handleCloseDetail()
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
    toast.success('Project Deleted Successfully')
    
  }

  function handleEdit(editedProject){
    const updatedProjects = projects.map((project) => {
      if (project.id === editedProject.id){
        return editedProject
      }
      return project
    })
    setProjects(updatedProjects)
    toast.success('Project Updated Successfully')
  }


  return (
    <>
      {/* { <NewProjModal  show={openModal} closeModal={setOpenModal} onAddingProjects={addingProjects}/>} */}
      <div className="backgroundDashboard">
        <div className="profileImageContainer">
          {profile ?
            <img onClick={handleUploadImageForm} className="profileImage" src={`${profile}`} style={{ height: "150px" }} alt="" />
            : 
            <img onClick={handleUploadImageForm} className="profileImage" src="https://res.cloudinary.com/dnqca0qmw/image/upload/v1667460296/blank-profile-picture-973460__340_sncdzn.png" style={{ height: "150px" }} alt="" />
          }
          <div>Change Picture</div>
      </div>
        <div className="displayItFlex">
          <h1 className="myProjHeader">My Projects</h1>
          <button className="AddNewProjBtn" onClick={handleAddProject}>Add New Project</button>
        </div>
      </div>
      {/* <NewProjModal/> */}

      <div className="projectsCardsDiv">
        {projects.map((project) => (
          <Dashfetch key={project.id} project={project} handleEdit={handleEdit} handleDelete={handleDelete}/>
        ))}
      </div>

      <Modal show={showDetail} onHide={handleCloseDetail}>
        <Modal.Header closeButton>
          <Modal.Title>{actionTriggered === 'ADDproject' ? "New Project Details" : "Upload Profile Picture"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {actionTriggered ==='ADDproject' ? (
            <>
              <form
            action=""
            onSubmit={handleSubmit}
          >
            <div className="mb-3">
            <label htmlFor="Title" className="form-label">Title</label>
            <input
              type="text"
              id="name"
              placeholder="Project Title"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
            />
            </div>
            <div className="mb-3">
            <label htmlFor="Description" className="form-label">Description</label>
            <textarea
              id="description"
              value={formData.description}
              onChange={handleChange}
              className="form-control"
              rows="5"
            ></textarea>
            </div>
            <div className="mb-3">
            <label htmlFor="link" className="form-label">Github Link</label>
            <br />
            <input
              type="url"
              placeholder="github link"
              id="github_link"
              className="form-control"
              value={formData.github_link}
              onChange={handleChange}
            />
            </div>
            <div className="mb-3">
            <label htmlFor="category" className="form-label">Project Category</label>
            <br />
            <select className="form-select" name="category" id="category" onChange={handleChange}>
              <option value="Fullstack">Fullstack</option>
              <option value="Android">Android</option>
            </select>
            </div>
            <button className="projBtn">Add New Project</button>
            <button
              className="projBtn"
              id="projBtn1"
              onClick={() => {
                handleCloseDetail();
              }}
            >
              Close
            </button>
          </form>
            </>
            
          ) : actionTriggered === 'UPLOADImage' ?(
            <>

              <form onSubmit={handleSubmit1}>
                <div class="mb-3">
                <label class="form-label">Choose Image To Upload:</label>
                <input type="file" name="image" onChange={handleChange1} />
                </div>
                <div>
                  <input type="submit"  value="Upload" className="btn btn-primary"/>
                </div>
              </form>
            </>

          ): null}
          
        </Modal.Body>
      </Modal>
      <Container className='pages'>
                <Pagination onPageChange={handlePage} size='mini' siblingRange="3"
                defaultActivePage={projectsIndex.page}
                totalPages={projectsIndex.pages} />
      </Container>


    </>
  );
}

export default Dashboard;
