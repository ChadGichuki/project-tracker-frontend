import React, { useEffect, useState, useContext } from "react";
import Dashfetch from "./Dashfetch";
import "../Dashboard/dashboard.css";
import "../Dashboard/NewProjModal.css";
import { Context } from "../Context/Context";

//import NewProjModal from './NewProjModal'
import { Modal } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';


function Dashboard() {
  //context
  const [context, setContext] = useContext(Context)

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

  let $cohort_id

  useEffect(() => {
    fetch("https://project-tracker-phase5.herokuapp.com/projects", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) =>{
        if (res.ok){
          res.json().then((data) => setProjects(data.projects));
        }
        else{
          setProjects([])
        }

      } 
     )
    //  setProfile(context.image_url)
     
  }, []);


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
  $cohort_id = context.user.cohort_id

  function handleSubmit(e){
    e.preventDefault();

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
      
      </div>
       <div>
      
       <br />
        {/* <button >Upload Image</button> */}
       </div>
        <div className="displayItFlex">
          <h1 className="myProjHeader">My Projects</h1>
          <button className="AddNewProjBtn" onClick={handleAddProject}>Add New Project</button>
        </div>
      </div>
      {/* <NewProjModal/> */}

      <div className="AnotherProjectCard">
        {projects.map((project) => (
          <Dashfetch key={project.id} project={project} handleEdit={handleEdit} handleDelete={handleDelete}/>
        ))}
      </div>

      <Modal show={showDetail} onHide={handleCloseDetail}>
        <Modal.Header closeButton>
          <Modal.Title>{actionTriggered === 'ADDproject' ? "New Project" : "Upload Profile Picture"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {actionTriggered ==='ADDproject' ? (
            <>
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
              maxLength="200"
        
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
                <label>Image upload</label>
                <input type="file" name="image" onChange={handleChange1} />
               
                <input type="submit"  />
              </form>
            </>

          ): null}
          
        </Modal.Body>
      </Modal>



    </>
  );
}

export default Dashboard;
