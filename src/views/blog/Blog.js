import React, {useEffect} from 'react'
import './Blog.css'
import { Container, Col, Row } from 'react-bootstrap'

const Blog = () => {

    useEffect(() => {
        window.scrollTo(0, 0);   
    })

    return (
        <Container>
            <section className='section-blog_header'>
                <div className='d-flex align-items-center mb-3'>
                    <h2 className='me-4'>Blog</h2> 
                    <div className='h-bar'></div>
                </div>
                <h4>Database Breaching In Modern Securit</h4>
                <img className='blog_img-hero' src='./img/blog_Img-1.png'/>   
            </section>
            <section className='section-blog_content'>
                <Row>
                    <Col md={4}>
                        <div className='blog_content-img'>
                            <img  src='./img/blog_Img-2.png' alt='blogImg-4'/>     
                        </div>
                    </Col>    
                    <Col md={8} className='blog-text ps-md-5'>
                        <p>In the modern era, where technology circulates every aspect of our lives starting from our daily to daily basic activities from waking up to setting schedule for the entire day to watching recipes for cooking our breakfast. I think it'd be out of question to even undermine the importance of technology in our lives but the bigger question that often arises in our minds is "Is our data safe?".</p>   
                         <p> Throughout the course of an entire day, we install several apps, access several websites and even freely give them our data access without even knowing leading to data breaches and our personal data being sold across the markets.</p>   
                         <p>Data breach is the intentional or unintentional release of secure or private/confidential information to an untrusted environment, more often that not data breaches are mostly unintentional because honestly who would like to handover their personal data knowingly to an unknown environment.</p>
                    </Col>
                </Row>
                <Row className='mt-md-5'>
                    <Col md={8} className='blog-text pe-md-5'>
                        <p>Data breach is a very common phenomena which happens to millions of unsuspecting users throughout the world, throughout the 21st century prominent companies with big names in the market such as Adobe,Canva,Dubsmash have gotten massive breaches resulting in leakage of sensitive user information such as login IDS, accounts and even credential information.</p>   
                         <p> Remember Yahoo?, yes the massive search engine no one uses anymore but in 2016 when it was in acquisition talks with Verizon, Yahoo revealed that in 2014, 500 million user email addresses, passwords, phone numbers, real names and dates of of birth were compromised in the world's largest database breach ever.</p>   
                         <p>If 500 million was not enough, Yahoo clearly outdid itself by revealing that the actual no was 3 billion making it one of the largest database breach in the 21st century.</p>
                    </Col>
                    <Col md={4}>
                        <div className='blog_content-img'>
                            <img  src='./img/blog_Img-3.png' alt='blogImg-4'/>     
                        </div>   
                    </Col>    
                </Row>
                <div className='blog-text'>
                    <p className='mt-md-5'>Sadly enough, there seems to be no solution to the increasing problem of database breaches except for us as users closely monitoring the permissions that we give to our app, cross checking the authentication and visiting only secured websites or an extreme alternative would be to become an environmentalist and live in close contact with nature which to be very honest many of us be willing to do considering the amount of time we have spent with our gadgets this year. </p>
                </div>
            </section>
            <div className='blog_img-footer'>
                <div className='blog_content-img'>
                    <img  src='./img/blog_Img-4.png' alt='blogImg-4'/>     
                </div>
            </div>
        </Container>
    )
}

export default Blog
