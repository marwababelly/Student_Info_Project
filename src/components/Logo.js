import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logoImage from '../assets/logo.png';

const Logo = () => {
  return (
    <Navbar.Brand href="/Login">
        <img
          src={logoImage}
          width="40"
          height="40"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
    </Navbar.Brand>  )
}

export default Logo