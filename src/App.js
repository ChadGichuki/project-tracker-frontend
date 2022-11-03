import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Homepage from './components/Homepage';
import Cohorts from './components/Cohorts';
import AboutUs from './components/about/AboutUs';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import {Context} from '../src/components/Context/Context'
import Projects from './components/Projects';
import Dashboard from './components/Dashboard/Dashboard'
import Admin from './Admin';
import AdminPanel from './components/AdminPanel';
import NavbarLoggedOut from './components/NavbarLoggedOut';
import Logout from './components/Logout';

function App() {
  const [context, setContext] = useState(null)

  function getUser(){
    const token = localStorage.getItem('token')

    if (token){
      fetch('https://project-tracker-phase5.herokuapp.com/me', {
        method: "GET",
        headers: {
            Authorization:`Bearer ${token}`,
        }
      })
      .then((res) => {
        if (res.ok){
          res.json()
          .then(data => setContext(data))
        } else{
          setContext('')
        }
      })
    } else{
      setContext('')
    }

  }

  useEffect(() => {
    const currentUser = getUser()
  }, [])


  return (
    <Context.Provider value={[context, setContext]}>
      {context !== null && 
        <Router>
        {context !== '' ?
        <div className="App">
            <NavBar/>
            <Routes>
              <Route path="*" element={<Navigate to="/" replace/>}></Route>
              <Route exact path="/" element={<Homepage/>}></Route>
              <Route exact path="/cohorts" element={<Cohorts />}></Route> 
              <Route exact path="/aboutus" element ={<AboutUs />}></Route>
              <Route exact path="/signup" element={<SignUp />}></Route>
              <Route exact path="/login" element={<Login />}></Route>
              <Route exact path="/logout" element={<Logout />}></Route>
              <Route exact path="/admin" element={<AdminPanel />}></Route>
              <Route exact path="/cohorts/:id" element={<Projects />}></Route>
              <Route exact path="/dashboard" element={<Dashboard/>}></Route>
            </Routes>   
          <Footer/>   
        </div>
        :
        <div className="App">
        <NavbarLoggedOut/>
        <Routes>
          <Route path="*" element={<Navigate to="/" replace/>}></Route>
          <Route exact path="/" element={<Homepage/>}></Route>
          <Route exact path="/aboutus" element ={<AboutUs />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/admin" element={<AdminPanel />}></Route>
        </Routes>   
      <Footer/>   
    </div>
          }
          </Router>
      }
      
    </Context.Provider>
  );
}

export default App;
