import React from 'react'
import './Navigation.css'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container className='mt-4'>
                <Link to="/">
                    <img className='logo' src='./img/logo.png' alt='logo'/>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav"  className="justify-content-end">
                    <Nav>
                        <Link to="/">HOME</Link>
                        <Link to="/tools" className='px-lg-4'>TOOLS</Link>
                        <Link to="/blog" >BLOG</Link>
                        <Link to="/about" className='ps-lg-4'>ABOUT US</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
    </Navbar>
    )
}

export default Navigation
