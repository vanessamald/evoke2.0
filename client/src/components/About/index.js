import React, { useState, useEffect } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { motion, useScroll } from 'framer-motion';
import Numbers from '../Numbers/index';
import useThemeStorage from '../themeStorage';

function About(){
    const [theme, toggleTheme, componentMounted] = useThemeStorage();
    // offcanvas 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //const [ info, setInfo ] = useState('about-content1-hidden');
    const [ button, setButton ] = useState('about-links-container')
    const [ icon, setIcon ] = useState('about-links-icon')

    // motion div
    const [ isOpen, setIsOpen ] = useState(false)
    const [ isOpen1, setIsOpen1 ] = useState(false);

    const closeMotion = () => {
        setIsOpen(false);
    }

    const closeMotion1 = () => {
        setIsOpen1(false);
    }

    const variants = {
        open: { 
            opacity: 1, 
            x: 0,
            y: 'auto', 
            position:'absolute', 
            zIndex: '1',
            textAlign: 'center',
            width: '100%',
            //height: '100%',
            //padding: '50px',
            transition: {
                y: { 
                    stiffness: 1000, 
                    velocity: -10000 ,
                },
                x: {
                    velocity: -10000
                }
          } },
        closed: { 
            opacity: 0, 
            x: "-100%" 
        },
        offscreen: {
            y: 300
          },
          onscreen: {
            y: 50,
            rotate: -10,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 0.8
            }
        }
    }
 
    return (
        
        <div style={{position:'relative',}}>
        <div id={'about'} className='about-container' style={{}}>
            <h2 className='about-container-title'>About</h2>
            <p>
            Evoke Neurodiagnostics offers cognitive impairment testing services designed to assess the biomarkers of cognitive decline. With a focus on preventative care and early detection, our testing services aim to provide individuals with the information and support they need to maintain their cognitive health and independence. Our testing process is non-invasive, confidential, and tailored to the unique needs of each individual.
            We believe that everyone deserves access to the information that can help maintain their cognitive health throughout the lifespan.
            </p>
            <h2 id={'learnmore'}>Learn More</h2>
            <div style={{marginTop: '50px'}}>
            <button disabled={false} className={button} onClick={() => setIsOpen(isOpen => !isOpen)} style={{position: 'relative', width: '100%', backgrondColor: 'transparent'}}>
                    <BsArrowUpRight className={icon} style={{backgroundColor: 'transparent', width: '40px'}}/>
                    Why test early?
            </button>
            <motion.div style={{ height: '0px', width: '80%'}}
                animate={isOpen ? 'open' : 'closed'}
                variants = {variants}
                //fill="transparent"
                //strokeWidth="3"
                //stroke="hsl(0, 0%, 18%)"
                //strokeLinecap="round"
            >
                <div className='motion-div' variants={variants}> 
                    <button onClick={closeMotion} style={{}} className='close-offcanvas'>
                            <div style={{padding: '5px', marginBottom: '5px'}}>
                                <div className='close-line1'></div>
                                <div className='close-line2'></div>
                            </div>
                    </button>
                
                    <motion.p 
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    >To identify early signs of cognitive decline</motion.p>
                    <p>To facilitate early diagnosis and treatment of potential causes</p>
                    <p>To track changes over time</p>
                    <p>To provide personalized interventions to maintain or improve cognitive function</p>
                    <p>To provide reassurance and support to patients and their families</p>
                    <p>To inform advanced care planning and decision-making</p>
                    <p>To promote healthy lifestyle choices and habits that support brain health.</p>
                
                </div> 
            </motion.div>

            <button disabled={false} onClick={() => setIsOpen1(isOpen1 => !isOpen1)} className={button} style={{position: 'relative', width: '100%', backgrondColor: 'transparent'}}>
                    <BsArrowUpRight className={icon} style={{backgroundColor: 'transparent', width: '40px'}}/>
                    Warning Signs
            </button>
            <motion.div style={{ height: '0px', width: '80%'}}
                animate={isOpen1 ? 'open' : 'closed'}
                variants = {variants}
                //fill="transparent"
                //strokeWidth="3"
                //stroke="hsl(0, 0%, 18%)"
                //strokepnecap="round"
            >
                  
                <div className='motion-div' variants={variants}>
                    <button onClick={closeMotion1} style={{}} className='close-offcanvas'>
                            <div style={{padding: '5px', marginBottom: '5px'}}>
                                <div className='close-line1'></div>
                                <div className='close-line2'></div>
                            </div>
                    </button>
                    <p>Changes in memory or thinking acuity</p>
                    <p>Difficulty performing daily tasks</p>
                    <p>Confusion or disorientation</p>
                    <p>Mood swings or depression</p>
                    <p>Withdrawal from social activities</p>
                    <p>Loss of initiative or motivation</p>
                    <p>Speech problems</p>
                    <p>Decreased ability to handle finances or make decisions</p>
                    <p>Suspected neurological disorders (e.g. Alzheimer's, dementia)</p>
                    <p>To determine appropriate medical or support interventions.</p>
                </div>
            </motion.div>
            
            <button onClick={handleShow} disabled={false} className={button}  style={{position: 'relative', width: '100%', backgrondColor: 'transparent'}}>
                    <BsArrowUpRight className={icon} style={{backgroundColor: 'transparent', width: '40px'}}/>
                    By the Numbers
            </button>   
            </div>
            
            </div>
            
            <Offcanvas  show={show} onHide={handleClose} backdrop="static" placement={'bottom'}
                style={{
                    height: '100%', 
                    backgroundColor: 'var(--body-bg-color)',
                    opacity: '1'
                }} 
            > 
                <Offcanvas.Body style={{backgroundColor: '', padding: '0px'}}>
                    <Offcanvas.Header  style={{opacity: '1', backgroundColor: 'white', padding: ''}} closeButton>
                        {/* 
                        <button onClick={handleClose} style={{}} className='close-offcanvas'>
                            <div style={{padding: '5px', marginBottom: '5px'}}>
                                <div className='close-line1'></div>
                                <div className='close-line2'></div>
                            </div>
                        </button>
                        */}
                    </Offcanvas.Header>
                <Numbers/>
                </Offcanvas.Body>
            </Offcanvas>  
        </div>
   ) }

export default About;