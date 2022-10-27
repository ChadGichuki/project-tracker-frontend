import React, { useEffect, useState } from 'react'
import '../components/Cohort.css'

function Cohorts() {
  const[projects, setProjects] = useState([])
  const[, setProject_id] = useState(null)


  useEffect(()=> {
    fetch("https://project-tracker-phase5.herokuapp.com/")
    .then((res) => res.json())
    .then((data) => {
      setProjects(data)
      setProject_id(projects[0].id)
    })
  }, [projects])


  const [cards] = useState([
    {
      
      text: 'Name Date'
    },
    {
      
      text: 'Name Date'
    },
    {
      
      text: 'Name Date'
    },
    {
      
      text: 'Name Date'
    },
    {
      
      text: 'Name Date'
    },
    {
      
      text: 'Name Date'
    },
    {
      
      text: 'Name Date'
    },
    {
     
      text: 'Name Date'
    },
    {
     
      text: 'Name Date'
    },
    {
      
      text: 'Name Date'
    },
  ])
  return (
    <div>
      <section>
        <div className="container">
          <h1>Explore projects by different cohorts</h1>
          <div className="card">
            {
              cards.map((card, i) => (
             
            <div key={i} className="cards">
              
             
              <p>
                Name: SD59-63
                Date: Nov 2020-Dec 2021

              </p>
              <button className="btn">view projects</button>
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