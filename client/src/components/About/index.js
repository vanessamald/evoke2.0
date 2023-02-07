import React, { useState, useEffect } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { motion } from 'framer-motion';
import Numbers from '../Numbers/index';

function About(){
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

    const variants = {
        open: { 
            opacity: 1, 
            y: 0, 
            position:'absolute', 
            zIndex: '1',
            textAlign: 'center',
            height: '100%',
            padding: '50px',
            transition: {
                y: { 
                    stiffness: 1000, 
                    velocity: -100 ,
                }
          } },
        closed: { 
            opacity: 0, 
            y: "-100%" 
        },
    }
 
    return (
        
        <div style={{position:'relative',}}>
        <div id={'about'} className='about-container' style={{}}>
            <h2 className='about-container-title'>About</h2>
            <p>
            Evoke Neurodiagnostics offers cognitive impairment testing services designed to assess the biomarkers of cognitive decline. With a focus on preventative care and early detection, our testing services aim to provide individuals with the information and support they need to maintain their cognitive health and independence. Our testing process is non-invasive, confidential, and tailored to the unique needs of each individual.
            We believe that everyone deserves access to the information that can help maintain their cognitive health throughout the lifespan.
            </p>

            <div style={{marginTop: '50px'}}>
            <button disabled={false} className={button} onClick={() => setIsOpen(isOpen => !isOpen)} style={{position: 'relative', width: '100%', backgrondColor: 'transparent'}}>
                    <BsArrowUpRight className={icon} style={{backgroundColor: 'transparent', width: '40px'}}/>
                    Why test early?
            </button>
            <motion.div style={{ height: '0px', width: '80%'}}
                animate={isOpen ? 'open' : 'closed'}
                variants = {variants}
                fill="transparent"
                strokeWidth="3"
                stroke="hsl(0, 0%, 18%)"
                strokeLinecap="round"
            >
                <div className='motion-div' variants={variants}> 
                    <h3>Reasons for cognitive impairment testing in adults:</h3>
                
                <ol>
                    <li>To identify early signs of cognitive decline</li>
                    <li>To facilitate early diagnosis and treatment of potential causes</li>
                    <li>To track changes over time</li>
                    <li>To provide personalized interventions to maintain or improve cognitive function</li>
                    <li>To provide reassurance and support to patients and their families</li>
                    <li>To inform advance care planning and decision-making</li>
                    <li>To promote healthy lifestyle choices and habits that support brain health.</li>
                </ol>
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
                //strokeLinecap="round"
            >
            <div variants={variants}>
           <h3>Warning Signs</h3>
                <ol>
                    <li>Changes in memory or thinking ability</li>
                    <li>Difficulty performing daily tasks</li>
                    <li>Confusion or disorientation</li>
                    <li>Mood swings or depression</li>
                    <li>Withdrawal from social activities</li>
                    <li>Loss of initiative or motivation</li>
                    <li>Speech problems</li>
                    <li>Decreased ability to handle finances or make decisions</li>
                    <li>Suspected neurological disorders (e.g. Alzheimer's, dementia)</li>
                    <li>To determine appropriate medical or support interventions.</li>
                </ol>
                </div>
            </motion.div>
            
            <button onClick={handleShow} disabled={false} className={button}  style={{position: 'relative', width: '100%', backgrondColor: 'transparent'}}>
                    <BsArrowUpRight className={icon} style={{backgroundColor: 'transparent', width: '40px'}}/>
                    By the Numbers
            </button>   
            </div>
            
            </div>
            <Offcanvas show={show} onHide={handleClose} backdrop="static" placement={'bottom'}
                style={{
                    height: '100%'
                }}
            >
              <Offcanvas.Body  style={{padding: '0px', backgroundColor: 'black'}}>
                <button onClick={handleClose} style={{}} className='close-offcanvas'>
                    <div style={{padding: '5px', marginBottom: '5px'}}>
                        <div className='close-line1'></div>
                        <div className='close-line2'></div>
                    </div>
                </button>
                <Numbers/>
              </Offcanvas.Body>
            </Offcanvas>      
        </div>
   ) }

export default About;