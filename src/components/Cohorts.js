import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../components/Cohort.css'
import { Pagination } from 'semantic-ui-react'
import { Container } from "react-bootstrap";



function Cohorts() {
  // const[projects, setProjects] = useState([])
  // const[, setProject_id] = useState(null)
  const [cohortsIndex, setCohortsIndex] = useState([])
  const [cohorts, setCohorts] = useState([])
  const navigate = useNavigate()


  useEffect(()=> {
    fetch("https://project-tracker-phase5.herokuapp.com/cohorts")
    .then((res) => res.json())
    .then((data) => {
      setCohortsIndex(data)
      setCohorts(data.cohorts)
    })
  }, [])

  const handlePage = (e, { activePage }) => {
  let gotopage = { activePage }
  let pagenum = gotopage.activePage
  let pageString = pagenum.toString()
  

  const url ="https://project-tracker-phase5.herokuapp.com/cohorts?page=" + pageString
  fetch(url)
  .then(res => res.json())
  .then((data) => {
    setCohortsIndex(data)
    setCohorts(data.cohorts)
  })

}

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
        <Container>
                <Pagination onPageChange={handlePage} size='mini' siblingRange="3"
                defaultActivePage={cohortsIndex.page}
                totalPages={cohortsIndex.pages} />
            </Container>
    </div>
  )
}

export default Cohorts