import React, { useEffect, useContext, useState } from 'react';
import {Context} from './Context/Context'
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';

function Login() {
  const [formData, setFormData] = useState({})
  const [errors,setErrors] = useState([]);
  const navigate = useNavigate();

  const [context, setContext] = useContext(Context);
  useEffect(() => {
    console.log(context)
    const token = window.localStorage.getItem('token')
    console.log(token)
  }, [context])

  function handleChange(e){
    const name = e.target.name
    const value = e.target.value

    formData[name] = value
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch("http://127.0.0.1:3001/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r)=>{
      if (r.ok){
        r.json().then((data)=>{
          setContext(data.user)
          window.localStorage.setItem('token', data.jwt)
        })
        navigate("/");
      }else {
        r.json().then((error)=>setErrors(error.errors))
      }
    })
  }

  return (
    <MDBContainer className="my-5">

      <MDBCard >
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0">Project Tracker</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" name='email' value={formData.email} onChange={handleChange}/>
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" name='password' value={formData.password} onChange={handleChange}/>

              <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={handleSubmit}>Login</MDBBtn>
              <a className="small text-muted" href="#!">Forgot password?</a>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="/signup" style={{color: '#393f81'}}>Register here</a></p>

              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default Login;