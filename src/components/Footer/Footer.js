import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className='footer_logo-box'>
                            <img className='footer-logo' src='./img/logo.png' alt='footer-logo'/>
                            <h5>SiteHack</h5>
                        </div>    
                        <p className='mt-3'>SiteHack is a private virtual network that has unique features and <br/> has high security.</p>
                        <div className='footer_socialIcon-box mt-4 mb-4'>
                            <a target="_blank" href='https://www.facebook.com/'><i class="fab fa-facebook-f"></i></a>
                            <a target="_blank" href='https://www.twitter.com/'><i class="fab fa-twitter"></i></a>   
                            <a target="_blank" href='https://www.instagram.com/'><i class="fab fa-instagram"></i></a>
                        </div>
                    </Col>  
                    <Col lg={6}>
                        <Row>
                            <Col className='footer_links-box'>
                                <h5><Link to='/blog'>Blog</Link></h5>
                                <h5><Link to='/tools'>Tools</Link></h5>
                                <h5><Link to='/about'>About Us</Link></h5>
                            </Col>
                            <Col className='footer_links-box'>
                                <p><Link to='/tools'>Email Checker</Link></p>
                                <p><Link to='/tools'>Password Checker</Link></p>
                                <p><Link to='/tools'>Ip Checker</Link></p>
                            </Col>    
                        </Row>
                    </Col>    
                </Row>
            </Container>        
        </footer>
    )
}

export default Footer
