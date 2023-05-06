import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../components/Logo";
import Navs from "./Navs";

const Navigationbar = () => {
  return (
    <>
      <Navbar bg="light">
        <Container>
            <Logo/>
            <Navs/>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigationbar;
