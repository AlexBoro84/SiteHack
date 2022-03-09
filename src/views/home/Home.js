import React,{useState, useEffect} from 'react'
import { Container} from 'react-bootstrap'
import ButtonMain from '../../components/Buttons/ButtonMain'
import Lottie from 'react-lottie';
import {useDispatch, useSelector} from 'react-redux'
import animationData from '../../lottie/data.json';
import './Home.css'
import { emailHackCheckAction, resetStateAction } from '../../redux/actions/emailHackCheckAction';
import Loader from '../../utils/Loader/Loader';
import { Link } from 'react-router-dom'


const Home = () => {

    const dispatch = useDispatch()
    
    const emailInfo = useSelector(state => state.emailCheck)
    const [emailError, setEmailError] = useState('')

    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {
            dispatch(resetStateAction())
        };
      }, []);


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

      const scrollToForm = () => {
          document.querySelector('.section-hacked_form').scrollIntoView({ 
            behavior: 'smooth' 
          });
      }

      const [email, setEmail] = useState('');
      
      const [windowScreenWidth, setWindowScreenWidth] = useState(window.screen.width);

    

      const handleEmailForm = (e) => {
        e.preventDefault()
        if(email === ''){
            setEmailError('Please enter email')
        }else{
            dispatch(emailHackCheckAction(email))
        }
      }

      const formateDate = (date) => {
        return date.split('T')[0]
      }

      window.onresize = function() {
        setWindowScreenWidth(window.screen.width)
      }

      const handleEmailChange = (e) => {
        let inValid = String(e.target.value).toLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        if(inValid === null){
            if(e.target.value === ''){
                setEmailError('')
            }else{
                setEmailError('Invalid Email')
            }
        }else{
            setEmailError('')    
        }
        setEmail(e.target.value)
      }


    
    
    return (
        <>
            <Container>
                <section className='hero-section'>
                        <div className='mt-10'>
                            <h1>Have I <br/> been Hacked</h1>
                            <p className='hero_p mt-4 mb-5'>
                                Discover the platform that gives you the freedom to 
                                check if your email or phone is in a data breach.
                            </p>
                            <ButtonMain clickEvent={scrollToForm} btn_style='btn-main' >
                                Check Email
                            </ButtonMain>
                        </div>
                        <div className='lottieHero-img'>
                            <Lottie 
                                options={defaultOptions}
                                height={windowScreenWidth > 992 ? 600 : 250}
                                width={windowScreenWidth > 992 ? 600 : 450}/>
                        </div>
                </section>
                <section className='section-info' style= {{backgroundImage: "url(./img/planet.png)"}}>
                    <div className='section-info_textBox'>
                        <p>Cybercrime is the greatest threat to every company in the world.</p> 
                    </div>
                    <div className='section-info_textBox'>
                        <p>Hackers create 300000 new piece of malware daily.</p>
                    </div>
                    <div className='section-info_textBox'>
                        <p>According to a study on an average every 39 seconds there is an web attack made by hackers.</p>
                    </div>
                </section>
                <section className='section-hacked_form'>
                    
                    <h3 className='text-center mb-5'>Has my mail been Hacked ?</h3> 
                    <form className='form_main'>
                        <input className={`email-input ${emailError ? 'input-error' : ''}`} type="text" value={email} onChange={(e) => handleEmailChange(e)} placeholder="email" required/>
                        <p className='error-text'>{emailError}</p>
                        <div className='d-flex mt-4'>
                            <div className='me-3'>
                                <ButtonMain btn_style='btn-blue' clickEvent={handleEmailForm}>Check</ButtonMain>
                            </div>
                            <div>
                                <Link to='/tools'>
                                    <ButtonMain btn_style='btn-border-white'> More Tools</ButtonMain>    
                                </Link> 
                            </div>
                        </div>  
                    </form>
                </section>
                        <div className='leakedData'>
                            {emailInfo.loading ? <div className='text-center my-5'><Loader/></div> : 
                                 emailInfo.isLeaked === null ? null : 
                                <>
                                    {
                                        emailInfo.isLeaked ? <h4 className='mt-5 text-center mb-5'>Oh no — Your Email Has Been Leaked</h4> : 
                                        <h4 className='mt-5 text-center mb-5'>Your Email Is Safe</h4> } 
                                    {emailInfo.breaches ? emailInfo.breaches.map(item => (
                                        
                                        <div className='mb-5'>
                                            <div className='leakedData-container'>
                                                <img src={item.logo}/>
                                                <div className='ms-4 pt-1'>
                                                    <a rel={'external'} target="_blank" href={`https://www.${item.domain}`}>{item.domain}</a>
                                                    <p> Breach Date: {formateDate(item.breachDate)}</p>
                                                </div>
                                            </div>
                                            <p dangerouslySetInnerHTML={{__html: item.description}} />
                                        </div>
                                    )): null}

                                </>
                            }
                        </div> 
            
                </Container>
        </>
    )
}


export default Home;

