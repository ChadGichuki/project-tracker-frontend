import React, { useState } from 'react'

function Cohorts() {
  const [cards] = useState([
    {
      title: 'card 1'
    }
  ])
  return (
    <div>
      <section>
        <div classname="container">
          <h1>Explore projects by different cohorts</h1>
          <div classname="cards">
            <div classname="cards">
              <h3>card 1</h3>
              <p>
                Name: SD59-63
                Date: Nov 2020-Dec 2021

              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Cohorts