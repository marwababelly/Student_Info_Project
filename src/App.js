import React from 'react';
import { Routes, Route } from "react-router-dom"
import style from './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigationbar from './components/Navigationbar';
import LogIn from './Pages/LogIn/LogIn';
import SiignUp from './Pages/SignUp/SiignUp';

const  App = () => {
  return (
    <>
    {/* Dont work above div for background color */}
    <div className={style.AppContainer}>
    <Navigationbar/>
      <Routes>
      <Route path='/' element={<LogIn/>}/>
        <Route path='/Login' element={<LogIn/>}/>
        <Route path='/SignUp' element={<SiignUp/>}/>
      </Routes>
      </div>
    </>
  );
}

export default App;
