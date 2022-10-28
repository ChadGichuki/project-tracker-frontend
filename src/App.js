import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Homepage from './components/Homepage';
import Cohorts from './components/Cohorts';
import AboutUs from './components/about/AboutUs';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Context} from '../src/components/Context/Context'
import Projects from './components/Projects';
import Admin from './Admin';
function App() {
  const [context, setContext] = useState(null)

  return (
    <Context.Provider value={[context, setContext]}>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/cohorts" element={<Cohorts />}></Route> 
          <Route path="/aboutus" element ={<AboutUs />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/cohorts/:id" element={<Projects />}></Route>

        </Routes> 
        <br /><br /><br /><br /><br /><br /><br /><br />
        <Footer/>   
      </div>
    </Context.Provider>
  );
}

export default App;
