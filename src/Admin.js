import {useNavigate} from "react-router-dom";
import React, {useState} from 'react';
// import {Context} from './Context/Context'

const Admin = () => {
	const navigate = useNavigate()
    const [formData, setFormData] = useState({})
    const [errors,setErrors] = useState([]);
     const [context, setContext] = useState([]);;

	//ADMIN
	//USER

	const login = () => {
		localStorage.setItem("user", JSON.stringify({role: "ADMIN"}))
		navigate("/dashboard")
	}
    function handleSubmit(e){
        e.preventDefault()
        fetch("https://project-tracker-phase5.herokuapp.com/users",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }).then((r)=>{
          if (r.ok){
            r.json().then((data)=>{
              setContext(data.user)
              localStorage.setItem('token', data.jwt)
            })
            navigate("/dashboard");
          }else {
            r.json().then((error)=>setErrors(error.errors))
          }
        })
      }

	return (
		<div className="login">
			<h2>Welcome to login page! </h2>
			<p>Please loging to continue</p>
            <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className="btn btn-primary"onClick={handleSubmit}> Login</button>
</form>
			
		</div>
	)
}

export default Admin