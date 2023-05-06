import React from 'react'
import { Nav } from 'react-bootstrap'

const Navs = () => {
  return (
    <>
        <Nav defaultActiveKey="/home" as="ul">
            <Nav.Item as="li">
                <Nav.Link href='/link-1'>Sign up</Nav.Link>
            </Nav.Item>
            <Nav.Item as='li'>
                <Nav.Link href='/link2'>login</Nav.Link>
            </Nav.Item>
        </Nav>
    </>
  )
}

export default Navs