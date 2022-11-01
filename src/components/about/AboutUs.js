import React from 'react';
import OurMembers from './Members';
function AboutUs() {
  
  return (
    
    <div className="bg-secondary md-5">
    <div>
       
    <section className="about" id="about">

    <h1>PROJECT TRACKER</h1>
    <p><b>PROJECT TRACKER</b> is a project created by enthusaistic developers as a response to need especially in Moringa school</p>
    <p>Many students come do projects and leave with no way of ever knowing who they were or what they did. This platform will create a room for all students to keep a  record of future and past projects.</p>
    </section>
    </div>
    <section className="footer">
        
    </section>
    
    <section className="container">
      
          <div className="row">
            <div lg="12" className=" col mb-5 text-center">
            
              <h2 className="section__title">BOARD MEMBERS</h2>
            </div>
             <div className="row justify-content-md-center">
            {< OurMembers /> }
          </div>
        </div>
      
    </section>
    {/* <Footer /> */}
    </div>

  )
}

export default AboutUs