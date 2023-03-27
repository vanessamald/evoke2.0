import React, { useState, useEffect, useRef } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {  motion, useInView } from 'framer-motion';
import Numbers from '../Numbers/index';
import TestEarly from '../TestEarly/index';
import useThemeStorage from '../themeStorage';
import WarningSigns from '../WarningSigns';

function About(){
    // theme style
    const [ theme, toggleTheme, componentMounted] = useThemeStorage();

    // offcanvas 
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

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
        animationDuration: '4s',
        animationTimingFunction: 'ease-in',
        display: 'block'
    }
 
    return (
        <div style={{position:'relative',}}>
             
        <div id={'about'} className='about-container' ref={ref}>
        <div className='title-container'> 
                <h2 className='titles' style={transitions}>About</h2>
                <div className='title-borders'></div>
            </div>
           
            {/*<h2 className='about-container-title' style={transitions}>About</h2>*/}
            <div className='about-content'>
            <p>
                Evoke Neurodiagnostics offers cognitive impairment testing services designed to assess the biomarkers of <a href='#learn-more'> cognitive decline</a>. 
                <em className='about-em'> Memory loss and other cognitive disorders can occur at any age for a variety of reasons, including: stress, dementia, head injury, sleep disorders, and pain. </em>
                With a focus on preventative care and early detection, our testing services aim to provide individuals with the information and support they need to maintain their cognitive health and independence. 
                Our testing process is non-invasive, confidential, and tailored to the unique needs of each individual. 
                We believe that everyone deserves access to the information that can help maintain their cognitive health throughout the lifespan.
            </p>
            <h3>What We Do?</h3>
            <p>
                At the primary care level, current testing lacks the sensitivity and specificity to make accurate patient assessments. Until recently, it has been difficult to objectively assess patients for cognitive impairment due to the lack of specificity.
                Evoke Neurodiagnostics partners with providers to offer neurologic assessment summaries for their patients with our BrainView system.
            </p>
            <h3>What is BrainView?</h3>
            <p>
                BrainView is FDA-approved, pain-free, non-invasive and can be completed in about 25-45 minutes.
                BrainView captures the electroencephalogram activity of the brain (EEG), electrocardiogram activity of the heart (ECG), visual and auditory processing speeds, also known as: <em className='about-emphasize'>evoked potentials</em>, and a subjective neuropsychological survey. 
                The BrainView system aids in making an accurate diagnosis sooner, differentiating between diseases such as Dementia and Depression and avoiding misdiagnosis, delayed diagnosis, or under-diagnosis. BrainView can also be used in certain disease states to ensure patients receive the right dose for their medication.
            </p>
            </div>
            <div className='title-container'> 
                <h2 className='titles' id='learn-more' style={transitions}>Learn More About Cognitive Decline</h2>
                <div className='title-borders'></div>
            </div>
            <div style={{}} className='content-padding'>
                <button onClick={handleShow1} disabled={false} className={button}  style={{position: 'relative', width: '100%', backgrondColor: 'transparent'}}>
                    <BsArrowUpRight className={icon} style={{backgroundColor: 'transparent', width: '40px'}}/>
                    Why test early?
                </button> 
                <Offcanvas 
                    show={show1} 
                    onHide={handleClose1}
                    placement={'bottom'}
                    style={{
                        height: '100%',
                        opacity: '1'
                    }}
                    >
                        <Offcanvas.Body style={{backgroundColor: 'var(--body-bg-color)', padding: '0px'}}>
                        <Offcanvas.Header  style={{backgroundColor: 'var(--body-bg-color)',opacity: '1', padding: ''}} closeButton></Offcanvas.Header>
                            <TestEarly/>
                        </Offcanvas.Body>
                </Offcanvas>
                <button onClick={handleShow2} disabled={false} className={button}  style={{position: 'relative', width: '100%', backgrondColor: 'transparent'}}>
                    <BsArrowUpRight className={icon} style={{backgroundColor: 'transparent', width: '40px'}}/>
                    Warning Signs
                </button> 
                <Offcanvas 
                    show={show2} 
                    onHide={handleClose2}
                    placement={'bottom'}
                    style={{
                        height: '100%',
                        opacity: '1'
                    }}
                >
                    <Offcanvas.Body style={{backgroundColor: 'var(--body-bg-color)', padding: '0px'}}>
                        <Offcanvas.Header  style={{backgroundColor: 'var(--body-bg-color)',opacity: '1', padding: ''}} closeButton></Offcanvas.Header>
                            <WarningSigns/>
                    </Offcanvas.Body>
                </Offcanvas>
                <button onClick={handleShow} disabled={false} className={button}  style={{position: 'relative', width: '100%', backgrondColor: 'transparent'}}>
                    <BsArrowUpRight className={icon} style={{backgroundColor: 'transparent', width: '40px'}}/>
                    By the Numbers
                </button>   
            </div>
        </div>
            <Offcanvas  show={show} onHide={handleClose}  placement={'bottom'}
                style={{
                    height: '100%', 
                    opacity: '1'
                }} 
            > 
                <Offcanvas.Body style={{backgroundColor: 'var(--body-bg-color)', padding: '0px'}} >    
                    <Offcanvas.Header  id='numbers' style={{backgroundColor: 'var(--body-bg-color)', opacity: '1', padding: ''}} closeButton>
                    </Offcanvas.Header>
                    <Numbers/>
                </Offcanvas.Body>
            </Offcanvas>  
        </div>
   )}

export default About;