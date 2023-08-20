import React from 'react';
import { Routes, Route } from "react-router-dom"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigationbar from './components/Navigationbar';
import LogIn from './Pages/LogIn/LogIn';
import SiignUp from './Pages/SignUp/SiignUp';

const  App = () => {
  return (
    <>
    <Navigationbar/>
      <Routes>
      <Route path='/' element={<LogIn/>}/>
        <Route path='/Login' element={<LogIn/>}/>
        <Route path='/SignUp' element={<SiignUp/>}/>
      </Routes>
    </>
  );
}

export default App;
