import './App.css';
import LandingPage from './Components/Landing';
import SignUpPage from './Components/SignUp';
import LogInPage from './Components/LogIn';
import DashboardPage from './Components/Dashboard';
import React from 'react';
import { Routes, Route } from 'react-router-dom';


window.React1 = require('react');

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/NewUser' element={<SignUpPage/>}/>
        <Route path='/Login' element={<LogInPage/>}/>
        <Route path='/dashboard' element={<DashboardPage/>}/>

        
      </Routes>
    </>
    
  );
}

export default App;