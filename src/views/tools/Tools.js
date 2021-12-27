import React, { useState, useEffect } from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import ButtonMain from '../../components/Buttons/ButtonMain'
import PopupModal from '../../components/Modal/PopupModal'
import ToolCard from '../../components/ToolCard/ToolCard'
import './Tools.css'
import { emailHackCheckAction, resetStateAction } from '../../redux/actions/emailHackCheckAction'
import Loader from '../../utils/Loader/Loader'

const Tools = () => {

    const dispatch = useDispatch()

    const emailInfo = useSelector(state => state.emailCheck)

     useEffect(() => {
            window.scrollTo(0, 0);
    return () => {
      dispatch(resetStateAction())
    };
  }, []);


    const openModal = () => {
        setIsOpen(true)
    }

    const formateDate = (date) => {
        return date.split('T')[0]
    }

    const [isOpen, setIsOpen] = useState(false)

    const [email, setEmail] = useState('');

      const handleEmailForm = (e) => {
        e.preventDefault()
        dispatch(emailHackCheckAction(email));
      }

    return (
        <Container>
            <PopupModal open={isOpen} onClose={() => setIsOpen(false)}>
                <div className='checkEmail_modal'>
                    <h3 className='text-center mb-4'>Has my mail been Hacked ?</h3> 
                    <form className='form_main' >
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text"  placeholder="email"/>
                    </form>
                    <div className='d-flex mt-4'>
                        <div className='me-3'>
                            <ButtonMain clickEvent={handleEmailForm} btn_style='btn-blue' >Check</ButtonMain>
                        </div>
                    </div>
                    <div>
                            {emailInfo.loading ? <div className='text-center my-5'><Loader/></div> : 
                                 emailInfo.isLeaked === null ? null : 
                                <>
                                    {
                                        emailInfo.isLeaked ? <h4 className='mt-4 text-center mb-5'>Oh no — Your Email Has Been Leaked</h4> : 
                                        <h4 className='mt-5 text-center mb-5'>Your Email Is Safe</h4> 
                                    } 
                                    <div className='scroll px-4'>
                                        {emailInfo.breaches ? emailInfo.breaches.map(item => (
                                            
                                            <div className='mb-5'>
                                                <div className='leakedData-container'>
                                                    <img src={item.logo}/>
                                                    <div className='ms-4 pt-1'>
                                                        <a rel={'external'} target="_blank" href={`https://www.${item.domain}`}>{item.domain}</a>
                                                        <p> Breach Date: {formateDate(item.breachDate)}</p>
                                                    </div>
                                                </div>
                                                <p  dangerouslySetInnerHTML={{__html: item.description}} />
                                            </div>
                                        )): null}

                                    </div>
                                </>
                            }
                        </div> 
                </div>
            </PopupModal>
            <section className='section_tools-header'>
                <Row>
                    <Col md={8} className='mt-4'>
                        <h2>Tools</h2>
                        <p className='hero_p pe-5'>Discover the platform that gives you the freedom to create, design, manage and develop your web presence exactly the way you want. Discover the platform that gives you the freedom to create, design.</p>
                    </Col>
                    <Col md={3} className='ps-lg-5 section_tools-headerImg'>
                        <img src='./img/tools_img-hero.png' alt='tools_hero-img'/>
                    </Col>    
                </Row>    
            </section>
            <section className='section_tools-cards'>
                <Row>
                    <Col md={4}>
                        <ToolCard clicked={openModal} image='./img/tools_img-1.png' toolName='Email Hack Check'/>
                    </Col>
                    <Col md={4} className='px-md-2 px-lg-4 py-sm-5 py-md-0'>
                        <ToolCard image='./img/tools_img-2.png' toolName='Password Hack Check'/>
                    </Col>
                    <Col md={4}>
                        <ToolCard image='./img/tools_img-3.png' toolName='What Is My IP'/>
                    </Col>
                </Row>
            </section>
        </Container>
    )
}


export default (Tools)
