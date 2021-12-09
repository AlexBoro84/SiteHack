import React, {useEffect} from 'react'
import { Container } from 'react-bootstrap'
import './About.css'

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);   
    })

    return (
        <>
            <Container>
                <section className='section-about'>
                    <h3>About Us</h3>

                    <div className='mt-5'>
                        <h4>What is the site all about?</h4>
                        <p className='mt-3'>
                        This site came about after what was, at the time, the largest ever single breach of customer accounts — Adobe. I often did post-breach analysis of user credentials and kept finding the same accounts exposed over and over again, often with the same passwords which then put the victims at further risk of their other accounts being compromised.
                        </p>
                    </div>
                    <div className='mt-5'>
                        <h4 >Why build the site?</h4>
                        <p className='mt-3'>
                            This site serves two primary purposes for me: firstly, it obviously provides a service to the public. Data breaches are rampant and many people don't appreciate the scale or frequency with which they occur. By aggregating the data here I hope that it not only helps victims learn of compromises of their accounts, but also highlights the severity of the risks of online attacks on today's internet.

                            Secondly, the site provided me with an excellent use case for putting a number of technologies through their paces and keeping my hands-on skills somewhat current. Projects like this are an excellent way of staying relevant as my day job increasingly focuses more on software management and less on actually building things (which I happen to love doing!) It's been an enormously fulfilling journey that I've invited others to join me on by way of often blogging in depth about the process, something I intend to keep up as the site inevitably evolves over time.
                        </p>
                    </div>
                </section> 
            </Container>
        </>
    )
}

export default About
