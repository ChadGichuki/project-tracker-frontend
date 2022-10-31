import React from 'react'
import '../Dashboard/dashboard.css'
import '../Dashboard/NewProjModal.css'

function NewProjModal({closeModal}) {

  
  return (
    <div className='newProjModal'>
       
         <form action="" className='newProjModalContainer'>
          <h2 className='modalProjDetails'>Project Details</h2>
            <label htmlFor="Title">Title</label>
            <br />
            <input type="text" placeholder='Name'/>
            <br />
            <label htmlFor="Description">Description</label>
            <br />
           <textarea name="description" id="" cols="25" rows="5"></textarea>
           <br />
           <label htmlFor="link">Github Link</label>
           <br />
           <input type="url" placeholder='github link' />
           <br />
           <label htmlFor="Cohort ">Cohort</label>
           <br />
           <select name="cohort" id="">
            <option value="">SD 59</option>
            <option value="">SD 60</option>
           </select>
           <br />
           <label htmlFor="category">Project Category</label>
           <br />
           <select name="category" id="category">
            <option value="Fullstack">Fullstack</option>
            <option value="Android">Android</option>
           </select>
           <br />
           <br />
           <button className='projBtn'>Add New Project</button>
           <button className='projBtn' id='projBtn1' onClick={()=>{closeModal(false)}}>Close</button>
        </form> 
        
    </div>
  )
}

export default NewProjModal