import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../components/Cohort.css'

function Cohorts() {
  // const[projects, setProjects] = useState([])
  // const[, setProject_id] = useState(null)
  const [cohorts, setCohorts] = useState([])
  const navigate = useNavigate()


  useEffect(()=> {
    fetch("https://project-tracker-phase5.herokuapp.com/cohorts")
    .then((res) => res.json())
    .then((data) => {
      setCohorts(data)
    })
  }, [])

  const handleClick = (e) => {
    const id = e.target.id
    navigate(`/cohorts/${id}`)
  }

  return (
    <div >
        {/* <div className="container"> */}
          <div className="projectsHeader">
            <h1>Explore projects by different cohorts</h1>
          </div >
          <div className="projectsCardsDiv">
            {cohorts.map((cohort) => (
              <div key={cohort.id} className="card" style={{ "width": "20rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Cohort: {cohort.name}</h5>
                  <p className="card-text">Start date: {cohort.start_date}</p>
                  <p className="card-text">End date: {cohort.end_date}</p>
                  <button className="btn" id={cohort.id} onClick={handleClick}>view projects</button>
                </div>
              </div>
               ))}
          </div>
        {/* </div> */}
    </div>
  )
}

export default Cohorts;