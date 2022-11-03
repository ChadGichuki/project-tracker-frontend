import React, { useEffect, useState } from "react";
import './Projects.css'
import { Modal } from 'react-bootstrap';

// const sgMail = require('@sendgrid/mail')

function ProjectCard({ project }) {
    const { id, name, description, github_link, category, cohort_id, user_id, users, user } = project
    const [formData, setFormData] = useState({})
    const [projectDetails, setProjectDetails] = useState({
        "users": [{"name": "Loaded"}]
    })
    const token = localStorage.getItem('token')

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    useEffect(() => {
        fetch(`https://project-tracker-phase5.herokuapp.com/projects/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then((res) => res.json())
            .then((data) => setProjectDetails(data))
    }, [])

    function handleShow() {
        setShow(true);
    }

    function handleChange(e){
        const name = e.target.name
        const value = e.target.value
        setFormData({...formData, [name]:value})
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`https://project-tracker-phase5.herokuapp.com/projects/${id}/contact_owner`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(formData)
        })
        .then(res => {
            if (res.ok){
                alert("email sent successfully")
            }
            else{
                alert("error sending message.")
            }
        })
        e.target.reset()
    }

    return (
        <div className="card" style={{ "width": "18rem" }}>
            <div class="card-body">
                <h5 class="card-title"><strong>{name}</strong></h5>
                <p class="card-text">{description.slice(0, 50)}...</p>
                <p class="card-text"><em>{category}</em></p>
                <button href="" class="btn btn-primary" onClick={handleShow}>View Details</button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><strong>{name}</strong></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className="modalDiv">
                            <p>{description}</p>
                        </div>
                        <div className="modalDiv" id="github">
                            <a href={github_link}>View on Github</a>
                        </div>
                        <div className="modalDiv">
                            <h6>This project was built by:</h6>
                            <ol>
                                <li>{user.name} - Owner</li>
                                {projectDetails.users.map((user) => (
                                    <li>{user.name}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
                    <div id ="contactOwnerDiv">
                        <h6>Contact The Project Owner:</h6>
                        <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Your Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com" name="email" value={formData.email} onChange={handleChange}/>
                                <div id="emailHelp" class="form-text">You will receive a reply from the owner through this email.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Subject</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Request To Collaborate" name="subject" value={formData.subject} onChange={handleChange}/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Message</label>
                                <textarea type="text" class="form-control" rows="3" id="exampleInputPassword2" placeholder="A Brief message..." name="message" value={formData.message} onChange={handleChange}/>
                            </div>
                            <button type="submit" class="btn btn-primary">Send</button>
                        </form>
                    </div>
                    {/* <form>
                        <label>Your email address:</label>
                        <input type="email" name="email"/>
                        <br/>
                        <label>Subject:</label>
                        <input type="text" name="subject"/>
                        <br/>
                        <label>Message:</label>
                        <input type="text" name="message"/>
                        <br/>
                        <button type="submit" className="btn">Send</button>
                    </form> */}
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ProjectCard