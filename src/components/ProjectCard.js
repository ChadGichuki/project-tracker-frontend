import React, { useEffect, useState } from "react";
import './Projects.css'
import { Modal } from 'react-bootstrap';

// const sgMail = require('@sendgrid/mail')

function ProjectCard({ project }) {
    const { id, name, description, github_link, category, cohort_id, user_id, users } = project
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
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                    <h5>Contact The Project Owner</h5>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Your Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Subject</label>
                            <input type="text" class="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Message</label>
                            <textarea type="text" class="form-control" id="exampleInputPassword2"/>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
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