import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Projects(){

    const token = localStorage.getItem('token')
    const id = useParams()['id']
    console.log(token)

    useEffect(()=> {
        fetch(`https://project-tracker-phase5.herokuapp.com/cohorts/${id}`, {
            method: "GET",
            headers: {
                Authorization:`Bearer ${token}`,
            }
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
    }, [])

    return(
        <p>Name</p>
    )
}

export default Projects