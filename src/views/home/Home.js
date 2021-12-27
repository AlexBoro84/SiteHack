import React,{useState, useEffect} from 'react'
import { Container} from 'react-bootstrap'
import ButtonMain from '../../components/Buttons/ButtonMain'
import Lottie from 'react-lottie';
import {useDispatch, useSelector} from 'react-redux'
import animationData from '../../lottie/data.json';
import './Home.css'
import { emailHackCheckAction, resetStateAction } from '../../redux/actions/emailHackCheckAction';
import Loader from '../../utils/Loader/Loader';

const Home = () => {

    const dispatch = useDispatch()

    const emailInfo = useSelector(state => state.emailCheck)

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
        dispatch(emailHackCheckAction(email))
      }

      const formateDate = (date) => {
        return date.split('T')[0]
      }

      window.onresize = function() {
        setWindowScreenWidth(window.screen.width)
      }

    
    
    return (
        <>
            <Container>
                <section className='hero-section'>
                        <div className='mt-10'>
                            <h1>Have I <br/> been Hacked</h1>
                            <p className='hero_p mt-4 mb-5'>
                                Discover the platform that gives you the freedom to create, 
                                design, manage and develop your web presence exactly the way you want.
                            </p>
                            <ButtonMain clickEvent={scrollToForm} btn_style='btn-main' >
                                Check Email
                            </ButtonMain>
                        </div>
                        <div className='lottieHero-img'>
                            <Lottie 
                                options={defaultOptions}
                                height={windowScreenWidth > 992 ? 600 : 450}
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
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email"/>
                    </form>
                        <div className='d-flex mt-4'>
                            <div className='me-3'>
                                <ButtonMain btn_style='btn-blue' clickEvent={handleEmailForm}>Check</ButtonMain>
                            </div>
                            <div>
                                <ButtonMain btn_style='btn-border-white'>More Tools</ButtonMain>
                            </div>
                        </div>  
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
                                            <p  dangerouslySetInnerHTML={{__html: item.description}} />
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

