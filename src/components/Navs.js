import React from 'react';
import { Nav } from 'react-bootstrap';
import style from './Navs.module.css';

const Navs = () => {
  return (
    <>
        <Nav defaultActiveKey="/home" as="ul">
            <Nav.Item as="li">
                <Nav.Link href='/link-1' className={style.textNav}>Sign up</Nav.Link>
            </Nav.Item>
            <Nav.Item as='li'>
                <Nav.Link href='/link2' className={style.textNav}>login</Nav.Link>
            </Nav.Item>
        </Nav>
    </>
  )
}

export default Navs