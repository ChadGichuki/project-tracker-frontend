import React, {useContext, useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom';
import '../components/SignUp.css'
import {Context} from './Context/Context'

 

 

function SignUp() {
const [context, setContext] = useContext(Context)
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword] = useState("");
const [passwordConfirmation,setPasswordConfirmation] = useState("");

const [image,setImage] = useState("");
const [errors,setErrors] = useState([]);
const navigate = useNavigate();
const [cohorts, setCohorts] = useState([])
const [cohort_id, setCohort_id]=useState(null);


useEffect(()=> {
  fetch("https://project-tracker-phase5.herokuapp.com/cohorts")
  .then((res) => res.json())
  .then((data) => {
    setCohorts(data)
    setCohort_id(cohorts[0].id)
  })
}, [])

function handleSubmit(e){
  e.preventDefault();
  fetch("https://project-tracker-phase5.herokuapp.com/signup",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
      password_confirmation:passwordConfirmation,
      cohort_id,
      image,
    }),
  }).then((r)=>{
    if (r.ok){
      r.json().then((data)=>{
        setContext(data.user)
        localStorage.setItem('token', data.jwt)
      })
      navigate("/cohorts");
    }else {
      r.json().then((error)=>setErrors(error.errors))
    }
  })
}





  return (
   <div className="container1">
    
   
      <br />
      <br />
      <br />
  
   <form className="signUpForm" action=""  onSubmit={handleSubmit}>
    <div className='formheadingContainer'>
    <p className="formheading">Student Sign Up Form</p>
    </div>
    <label htmlFor="name">Your Name</label>
    <br />
    <input type="text" id="name" name="name" onChange={(e)=> setName(e.target.value)} value={name}/>
    <br />
    <label htmlFor="email">Your Email</label>
    <br />
    <input type="email" id="email" name="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
    <br />
    <label htmlFor="Password">Your Password</label>
    <br />
    <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)} value={password} />
    <br />
    <label htmlFor="password">Password Confirmation</label>
    <br />
    <input type="password" id="password-confirmation" name="password-confirmation" onChange={(e)=>setPasswordConfirmation(e.target.value)} value={passwordConfirmation} />
    <br />
    <label htmlFor="cohort">Cohort Type</label>
    <br />
    <select name="selected" id="selected" onChange={(e)=>setCohort_id(e.target.value)}>
      {cohorts.map(cohort=>(
        <option key={cohort.id} value={cohort.id}>{cohort.name}</option>
      ))}
    </select>
    <br />
    <label htmlFor="profile">Your Profile Image</label>
    <br />
    <input type="url" id="image" name="image" onChange={(e)=>setImage(e.target.value)}/>
    <br />
    <br />
    <div>
    <input type="submit" />
    </div>
  
    
   </form>
   <br />
   <br />
   </div>
  )
}

export default App;