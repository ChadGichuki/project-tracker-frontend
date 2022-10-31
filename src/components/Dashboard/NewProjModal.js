// import React,{useState,useEffect,useContext} from 'react'
// import {Context} from '../Context/Context'
// import '../Dashboard/dashboard.css'
// import '../Dashboard/NewProjModal.css'

// function NewProjModal({closeModal, onAddingProjects}) {

//  const [context, setContext] = useContext(Context)
//   const token = localStorage.getItem('token')
  

// // const [cohort_id,setCohort_id] = useState(null)
// // const [name,setName]=useState("")
// // const [description,setDescription]=useState("")
// // const [category,setCategory]=useState("")
// // const [github_link,setGithub_link]=useState("")
// //  const [cohorts,setCohorts] =useState([])
// // const [errors, setErrors] = useState([]);

// const [formData,setFormData] = useState(
//   {
//    name: " ",
//    description: " ",
//    category: " ",
//    github_link: " ",
//    cohort_id: " ",
//   }
// )

// // useEffect(()=>{
// //   fetch("https://project-tracker-phase5.herokuapp.com/cohorts")
// //   .then((res)=>res.json())
// //   .then((data)=>{
// //     setCohorts(data)
// //     setCohort_id(data[0].id)
   
// //     console.log("From Modal:",data)
// //   })
// // },[])

// console.log("hello")
// console.log(context)


// //posting projects
// const handleSubmit = (e)=> {
//   e.preventDefault();
//   const cohort_id = context.cohort_id
//   fetch("https://project-tracker-phase5.herokuapp.com/projects", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
       
//       Authorization:`Bearer ${token}`,
            
      
//     },
//     body: JSON.stringify({
//       name: formData.name,
//       description: formData.description,
//       category: formData.category,
//       cohort_id: cohort_id,
//       github_link: formData.github_link,
//     }),
//   }).then((res)=>res.json())
//   .then((newProject)=>{
//     onAddingProjects(newProject);
//     setFormData({
//       ...formData,
//       name: " ",
//    description: " ",
//    category: " ",
//    github_link: " ",
//    cohort_id: " ",
//     })
    
//   })

//   function handleChange(event) {
//     const key = event.target.id;
//     setFormData({ ...formData, [key]: event.target.value });
//   }

  
//   return (
//     <div className='newProjModal'>
       
//          <form action=""  className='newProjModalContainer' onSubmit={handleSubmit} >
//           <h2 className='modalProjDetails'>Project Details</h2>
//             <label htmlFor="Title">Title</label>
//             <br />
//             <input type="text" placeholder='Name'  id="name" value={formData.name} onChange={handleChange}/>
//             <br />
//             <label htmlFor="Description">Description</label>
//             <br />
//            <textarea id="description" value={formData.description} onChange={handleChange} cols="25" rows="5"></textarea>
//            <br />
//            <label htmlFor="link">Github Link</label>
//            <br />
//            <input type="url" placeholder='github link' id='github_link' value={formData.github_link} onChange={handleChange}/>
//            <br />
          
        
//            <br />
//            <label htmlFor="category">Project Category</label>
//            <br />
//            <select name="category" id="category" onChange={handleChange}>
//             <option value="Fullstack">Fullstack</option>
//             <option value="Android">Android</option>
//            </select>
//            <br />
//            <br />
//            <button className='projBtn'>Add New Project</button>
//            <button className='projBtn' id='projBtn1' onClick={()=>{closeModal(false)}}>Close</button>
//         </form> 
        
//     </div>
//   )
// }}

// export default NewProjModal