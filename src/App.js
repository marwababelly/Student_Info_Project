import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigationbar from './components/Navigationbar';
import LogIn from './components/LogIn/LogIn';
import SiignUp from './components/SignUp/SiignUp';

const  App = () => {
  return (
    <>
    <Navigationbar/>
    <LogIn/>
    <SiignUp/>
    </>
  );
}

export default App;
