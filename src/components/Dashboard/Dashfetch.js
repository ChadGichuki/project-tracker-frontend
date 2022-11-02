import React, { useEffect, useState, useContext } from 'react'
import '../Dashboard/dashboard.css'
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import { Modal } from 'react-bootstrap';
import { Context } from "../Context/Context";


function Dashfetch({ project, handleDelete, handleEdit }) {

  const { id, name, description, github_link, category, cohort_id, user_id, users } = project
  const [projects, setProjects] = useState([]);

  const token = localStorage.getItem('token')

  // Delete icon functionality
  function handleDeleteProject(e) {
    fetch(`https://project-tracker-phase5.herokuapp.com/projects/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((r) => {
        if (r.status === 204) {
          handleDelete(id)
        }
      })
  }

  // View, Edit & Add members icon functionality
  const [actionTriggered, setActionTriggered] = useState('')
  const [showDetail, setShowDetail] = useState(false)
  const handleCloseDetail = () => setShowDetail(false)

  function handleShowDetail() {
    setActionTriggered('DETAILS')
    setShowDetail(true)
  }

  function handleShowEditForm() {
    setActionTriggered('EDIT')
    setShowDetail(true)
  }

  function handleAddMembersForm() {
    setActionTriggered('ADDMEMBERS')
    setShowDetail(true)
  }

  const [projectDetails, setProjectDetails] = useState(users)

  useEffect(() => {
    fetch(`https://project-tracker-phase5.herokuapp.com/projects/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then((res) => res.json())
      .then((data) => setProjectDetails(data.users))
  }, [])

  // edit project icon functionality
  const [context, setContext] = useContext(Context)
  const [formData, setFormData] = useState(
    {
      name: name,
      description: description,
      category: category,
      github_link: github_link,
      cohort_id: cohort_id,
    }
  )

  function handleChange(event) {
    const key = event.target.id;
    setFormData({ ...formData, [key]: event.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const cohort_id = context.cohort_id
    fetch(`https://project-tracker-phase5.herokuapp.com/projects/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,

      },
      body: JSON.stringify({
        name: formData.name,
        description: formData.description,
        category: formData.category,
        cohort_id: cohort_id,
        github_link: formData.github_link,
      })
    }).then((res) => res.json())
      .then((editedProject) => {
        handleEdit(editedProject)
        setFormData({
          ...formData,
          name: " ",
          description: " ",
          category: " ",
          github_link: " ",
          cohort_id: cohort_id,
        })
      })
    handleCloseDetail()
  }

  // Add Project Members icon functionality
  const [email,setEmail]=useState("");

  function handleNewMemberSubmit(e){
    e.preventDefault()
    fetch(`https://project-tracker-phase5.herokuapp.com/projects/${id}/addmembers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({email})
  })
  .then(res => res.json())
  .then(newmember => {
    setProjectDetails([...projectDetails, newmember])
    setEmail('')
  })
  handleCloseDetail()
}

  return (
    <div className='container12'>
      <div className='projectCard12'>
        <h2 className='projectTitle'>{name}</h2>
        <p>{description}</p>
        <a href={github_link} target="_blank" rel="noopener noreferrer">Github Link</a>
        <p className='projectCategory'>{category}</p>
        <div className='ProjectButtons'>
          <button className='projButton' onClick={handleShowDetail}><AiIcons.AiFillEye /></button>
          <button className='projButton' onClick={handleDeleteProject}><RiIcons.RiDeleteBin6Fill /></button>
          <button className='projButton' onClick={handleAddMembersForm}><MdIcons.MdGroupAdd /></button>
          <button className='projButton' onClick={handleShowEditForm}><FaIcons.FaUserEdit /></button>
        </div>
      </div>
      <Modal show={showDetail} onHide={handleCloseDetail}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {actionTriggered === 'DETAILS' ?
            <div>
              <div className="modalDiv">
                <p>{description}</p>
              </div>
              <div className="modalDiv" id="github">
                <a href={github_link}>View on Github</a>
              </div>
              <div className="modalDiv">
                <h6>Collaborators on this project:</h6>              
                <ol>
                  {projectDetails.map((user) => (
                    user.id === user_id ? <li>{user.name} - Owner</li> : <li>{user.name}</li>
                  ))}
                </ol>
              </div>
            </div>
            :
            actionTriggered === 'EDIT' ?
              <>
                <form action="" onSubmit={handleSubmit}>
                  <h5> Update The Current Project Details:</h5>
                  <div className="mb-3">
                  <label htmlFor="name" class="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    id="name"
                    autoFocus
                    value={formData.name}
                    onChange={handleChange}
                  />
                  </div>
                  <div className="mb-3">
                  <label htmlFor="description" class="form-label">Description</label>
                  <textarea
                    id="description"
                    className="form-control"
                    value={formData.description}
                    onChange={handleChange}
                    rows="5"
                  />
                  </div>
                  <div className="mb-3">
                  <label htmlFor="link" class="form-label">Github Link</label>
                  <input
                    type="url"
                    className="form-control"
                    id="github_link"
                    value={formData.github_link}
                    onChange={handleChange}
                  />
                  </div>
                  <div className="mb-3">
                  <label htmlFor="category" class="form-label">Project Category</label>
                  <select name="category" id="category" className="form-select" onChange={handleChange}>
                  <option value="Fullstack">Choose Category</option>
                    <option value="Fullstack">Fullstack</option>
                    <option value="Android">Android</option>
                  </select>
                  </div>
                  <button className="projBtn">Update Project Details</button>
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
              :
              actionTriggered === 'ADDMEMBERS' ?
                <>
                  <h5>Add Group Members to your project</h5>
                  <form onSubmit={handleNewMemberSubmit}>
                    <div class="mb-3">
                      <label for="exampleInputEmail8" class="form-label">New Member's Email Address:</label>
                      <input type="email" class="form-control" id="exampleInputEmail8" autoFocus aria-describedby="emailHelp" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                      <div id="emailHelp" class="form-text">The group member must be signed up on Project Tracker using the email provided.</div>
                    </div>
                    <button type="submit" class="btn btn-primary">Add Member</button>
                  </form>
                </>
                :
                null
          }

        </Modal.Body>
      </Modal>
      {/* <Modal2 show={handleShowEditForm} onHide={handleCloseEditForm}>
        <Modal2.Header closeButton>
          <Modal2.Title>{name}</Modal2.Title>
        </Modal2.Header>
        <Modal2.Body>
          <p>{description}</p>
          <br />
          <a href={github_link}>View Project on Github</a>
          <br />
          <h5>Group Members:</h5>
          <ol>
            {projectDetails.users.map((user) => (
              user.id === user_id ? <li>{user.name} - Owner</li> : <li>{user.name}</li>
            ))}
          </ol>
        </Modal2.Body>
      </Modal2> */}
      {/* <div class="modal" id="myModal">
	<div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Modal title</h4>    
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        </div><div class="container"></div>
        <div class="modal-body"></div>
    </div>
    </div>
    </div> */}
    </div>
  )
}

export default Dashfetch