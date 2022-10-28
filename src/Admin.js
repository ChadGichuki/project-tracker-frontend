import {useNavigate} from "react-router-dom";
import React, {useState} from 'react';
// import {Context} from './Context/Context'
import Slider from "./Slider";
import{
MDBInput,
MDBIcon,
MDBBtn,
MDBContainer,
MDBCard,
MDBCardBody,
MDBCol,
MDBRow
} 
from 'mdb-react-ui-kit';


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
        <MDBContainer className="my-5">
    
          <MDBCard style={{   }}>
            <MDBRow className='g-0'>
    
              <MDBCol md='5'>
                <Slider />
              </MDBCol>
    
              <MDBCol md='5' >
                <MDBCardBody className='d-flex flex-column' >
    
                  <div className='d-flex flex-row mt-2'>
                    <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                    <span className="h1 fw-bold mb-0">Project Tracker</span>
                  </div>
    
                  <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>
    
                    <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" name='email' value={formData.email} />
                    <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" name='password' value={formData.password} />
    
                  <MDBBtn className="mb-4 px-5"  size='lg' style={{ borderRadius:'20px',border:"none", backgroundColor:'#d24e01' }} onClick={handleSubmit}>Login</MDBBtn>
                  <a className="small text-muted" href="#!">Forgot password?</a>
                  <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="/signup" style={{color: '#393f81'}}>Register here</a></p>
    
                
                </MDBCardBody>
              </MDBCol>
    
            </MDBRow>
          </MDBCard>
    
        </MDBContainer>
      );
    }
    
    export default Admin;