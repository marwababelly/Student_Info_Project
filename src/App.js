import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigationbar from './components/Navigationbar';
import LogIn from './components/LogIn/LogIn';

const  App = () => {
  return (
    <>
    <Navigationbar/>
    <LogIn/>
    </>
  );
}

export default App;
