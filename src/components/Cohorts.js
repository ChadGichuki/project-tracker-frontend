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
    <div>
      <section>
        <div className="container">
          <h1>Explore projects by different cohorts</h1>
          <div className="card">
            {
              cohorts.map((cohort) => (
             
            <div key={cohort.id} className="cards">
              <p>
                {cohort.name}
                <br/>
                {cohort.start_date} - {cohort.end_date}
              </p>
              <button className="btn" id={cohort.id} onClick={handleClick}>view projects</button>
            </div>
               ))
              }
          </div>

        </div>
      </section>
    </div>
  )
}

export default Cohorts