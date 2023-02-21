import React, { useState, useEffect, useRef } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {  motion, useInView } from 'framer-motion';
import Numbers from '../Numbers/index';
import useThemeStorage from '../themeStorage';

function About(){
    // theme style
    const [ theme, toggleTheme, componentMounted] = useThemeStorage();

    // offcanvas 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // set button and icon styling
    const [ button, setButton ] = useState('about-links-container')
    const [ icon, setIcon ] = useState('about-links-icon')

    // motion div open/close
    const [ isOpen, setIsOpen ] = useState(false)
    const [ isOpen1, setIsOpen1 ] = useState(false);

    const closeMotion = () => {
        setIsOpen(false);
    }

    const closeMotion1 = () => {
        setIsOpen1(false);
    }
    // motion div styling
    const variants = {
        open: {
            opacity: 1, 
            y: 0,
            position:'absolute', 
            zIndex: '1',
            textAlign: 'center',
            transition: {
                y: { stiffness: 100, velocity: -100 }
            }
         },
        closed: { 
            opacity: 0, 
            y: "0",
            
            transition: {
                y: { stiffness: 1000 }
            }  
        } 
    }
    // motion div p styling
    const item = {
        transition: {
            staggerChildren: 1
        },
        animation: 'slideDown 3s linear'
    }

    // transition styling 
    const ref = useRef(null)
    const isInView = useInView(ref)
    const transitions = {
        animationName: isInView ? 'slideUp' : 'none',
        animationDuration: '2s',
        animationTimingFunction: 'ease-in',
        display: 'block'
    }
 
    return (
        
        <div style={{position:'relative',}}>
        <div id={'about'} className='about-container' ref={ref}>
            <h2 className='about-container-title' style={transitions}>About</h2>
            <p>
            Evoke Neurodiagnostics offers cognitive impairment testing services designed to assess the biomarkers of cognitive decline. With a focus on preventative care and early detection, our testing services aim to provide individuals with the information and support they need to maintain their cognitive health and independence. Our testing process is non-invasive, confidential, and tailored to the unique needs of each individual.
            We believe that everyone deserves access to the information that can help maintain their cognitive health throughout the lifespan.
            </p>
            <h2 style={transitions}>Learn More About Cognitive Decline Below</h2>
            <div style={{marginTop: '50px'}}>
            <button disabled={false} className={button} onClick={() => setIsOpen(isOpen => !isOpen)} style={{position: 'relative', width: '100%', backgrondColor: 'transparent'}}>
                    <BsArrowUpRight className={icon} style={{backgroundColor: 'transparent', width: '40px'}}/>
                    Why test early?
            </button>
            
            <motion.div style={{ height: '0px'}}
                animate={isOpen ? 'open' : 'closed'}
                variants = {variants}
            >
                <div className='motion-div' variants={variants} style={{}}>
                    <div className='motion-div-top motion-close-container'>
                        <button onClick={closeMotion} style={{}} className='close-offcanvas'>
                            <div className='close-line1'></div>
                            <div className='close-line2'></div>
                        </button>
                    </div>
                    <h3 className='motion-div-title'>Reasons To Test Early</h3>
                    <motion.div className='motion-div-p' 
                        initial= 'hidden'
                        style={item}
                        whileHover={{ scale: 1.2, transition: { duration: 0.5 }}}
                        viewport={{ once: true }}
                        >
                        <p>To identify early signs of cognitive decline</p>
                    </motion.div>
                    <motion.div className='motion-div-p'
                        initial= 'hidden'
                        whileInView={item}
                        whileHover={{ scale: 1.2, transition: { duration: 0.5 }}}
                        viewport={{ once: true }}
                    >
                        <p>To facilitate early diagnosis and treatment of potential causes</p>
                    </motion.div>
                    <motion.div className='motion-div-p'
                        initial='hidden'
                        whileInView={item}
                        whileHover={{ scale: 1.2, transition: { duration: 0.5 }}}
                        viewport={{ once: true }}
                    >
                        <p>To track changes over time</p>
                    </motion.div>
                    <motion.div className='motion-div-p'
                        initial= 'hidden'
                        whileInView={item}
                        whileHover={{ scale: 1.2, transition: { duration: 0.5 }}}
                        viewport={{ once: true }}
                    >
                        <p>To provide personalized interventions to maintain or improve cognitive function</p>
                    </motion.div>
                    <motion.div className='motion-div-p'
                        initial='hidden'
                        whileInView={item}
                        whileHover={{ scale: 1.2, transition: { duration: 0.5 }}}
                        viewport={{ once: true }}
                    >
                        <p>To provide reassurance and support to patients and their families</p>
                    </motion.div>
                    <motion.div className='motion-div-p'
                        initial='hidden'
                        whileInView={item}
                        whileHover={{ scale: 1.2, transition: { duration: 0.5 }}}
                        viewport={{ once: true }}
                    >
                        <p>To inform advanced care planning and decision-making</p>
                    </motion.div>
                    <motion.div className='motion-div-p'
                        initial='hidden'
                        whileInView={item}
                        whileHover={{ scale: 1.2, transition: { duration: 0.5 }}}
                        viewport={{ once: true }}
                    >
                        <p>To promote healthy lifestyle choices and habits that support brain health.</p>
                    </motion.div>
                    
                </div> 
            </motion.div>
            <button disabled={false} onClick={() => setIsOpen1(isOpen1 => !isOpen1)} className={button} style={{position: 'relative', width: '100%', backgrondColor: 'transparent'}}>
                <BsArrowUpRight className={icon} style={{backgroundColor: 'transparent', width: '40px'}}/>
                Warning Signs
            </button>
            <motion.div style={{ height: '0px'}}
                animate={isOpen1 ? 'open' : 'closed'}
                variants = {variants}
            >
                  
                <div className='motion-div' variants={variants}>
                    <div className='motion-div-top motion-close-container'>
                    <button onClick={closeMotion1} style={{}} className='close-offcanvas'>
                            
                                <div className='close-line1'></div>
                                <div className='close-line2'></div>
                            
                    </button>
                    </div>
                    <h3 className='motion-div-title'>Cognitive Decline Warning Signs</h3>
                    <motion.div className='motion-div-p' 
                        initial= 'hidden'
                        whileInView={item}
                        whileHover={{ scale: 1.2, transition: { duration: 0.5 }}}
                        viewport={{ once: true }}
                        >
                        <p>Changes in memory or thinking acuity</p>    
                    </motion.div>
                    <motion.div className='motion-div-p' 
                        initial= 'hidden'
                        whileInView={item}
                        whileHover={{ scale: 1.2, transition: { duration: 0.5 }}}
                        viewport={{ once: true }}
                        >
                        <p>Difficulty performing daily tasks</p>
                    </motion.div>
                    <motion.div className='motion-div-p' 
                        initial= 'hidden'
                        whileInView={item}
                        whileHover={{ scale: 1.2, transition: { duration: 0.5 }}}
                        viewport={{ once: true }}
                        >
                        <p>Confusion or disorientation</p>
                    </motion.div>
                    <motion.div className='motion-div-p' 
                        initial= 'hidden'
                        whileInView={item}
                        whileHover={{ scale: 1.2, transition: { duration: 0.5 }}}
                        viewport={{ once: true }}
                        >
                        <p>Speech problems</p>
                    </motion.div>
                    <motion.div className='motion-div-p' 
                        initial= 'hidden'
                        whileInView={item}
                        whileHover={{ scale: 1.2, transition: { duration: 0.5 }}}
                        viewport={{ once: true }}
                        >
                        <p>Mood swings or depression</p>
                    </motion.div>
                    <motion.div className='motion-div-p' 
                        initial= 'hidden'
                        whileInView={item}
                        whileHover={{ scale: 1.2, transition: { duration: 0.5 }}}
                        viewport={{ once: true }}
                        >
                        <p>Withdrawal from social activities</p>
                    </motion.div>
                    <motion.div className='motion-div-p' 
                        initial= 'hidden'
                        whileInView={item}
                        whileHover={{ scale: 1.2, transition: { duration: 0.5 }}}
                        viewport={{ once: true }}
                        >
                        <p>Loss of initiative or motivation</p>
                    </motion.div>
                    <motion.div className='motion-div-p' 
                        initial= 'hidden'
                        whileInView={item}
                        whileHover={{ scale: 1.2, transition: { duration: 0.5 }}}
                        viewport={{ once: true }}
                        >
                        <p>Decreased ability to handle finances or make decisions</p>
                    </motion.div>
                    <motion.div className='motion-div-p' 
                        initial= 'hidden'
                        whileInView={item}
                        whileHover={{ scale: 1.2, transition: { duration: 0.5 }}}
                        viewport={{ once: true }}
                        >
                        <p>Suspected neurological disorders (e.g. Alzheimer's, dementia)</p>
                    </motion.div>
                    <motion.div className='motion-div-p' 
                        initial= 'hidden'
                        whileInView={item}
                        whileHover={{ scale: 1.2, transition: { duration: 0.5 }}}
                        viewport={{ once: true }}
                        >
                        <p>To determine appropriate medical or support interventions.</p>
                    </motion.div>
                    <p className='motion-div-source'>Source: Alzheimer's Disease and Healthy Aging. https://www.cdc.gov/aging/dementia/index.html. 2023  </p>
                </div>
            </motion.div>
            <button onClick={handleShow} disabled={false} className={button}  style={{position: 'relative', width: '100%', backgrondColor: 'transparent'}}>
                    <BsArrowUpRight className={icon} style={{backgroundColor: 'transparent', width: '40px'}}/>
                    By the Numbers
            </button>   
            </div>
            </div>
            <Offcanvas  show={show} onHide={handleClose}  placement={'bottom'}
                style={{
                    height: '100%', 
                    //backgroundColor: 'var(--body-bg-color)',
                    opacity: '1'
                }} 
            > 
                <Offcanvas.Body style={{backgroundColor: 'var(--body-bg-color)', padding: '0px'}}>    
                    <Offcanvas.Header  style={{opacity: '1', backgroundColor: 'var(--body-bg-color)', padding: ''}} closeButton>
                    </Offcanvas.Header>
                    <Numbers/>
                </Offcanvas.Body>
            </Offcanvas>  
        </div>
   ) }

export default About;