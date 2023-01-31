import React, { useState, useEffect } from 'react';
import people from '../../assets/images/people.png';
import percentage from '../../assets/images/percentage1.png';
import percentage2 from '../../assets/images/percentage2.png';
import lessThanHalf from '../../assets/images/lessthanhalf.png';
import thirtyfive from '../../assets/images/thirtyfive.png';
import { BsArrowUpRight } from 'react-icons/bs';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { motion } from 'framer-motion';

function About(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    //const [ info, setInfo ] = useState('about-content1-hidden');
    const [ button, setButton ] = useState('about-links-container')
    const [ icon, setIcon ] = useState('about-links-icon')

    const draggable = () => {
        //setInfo('about-content1');  
    }

    const handleClick = () => {
        console.log('button clicked')
        setButton('about-button-hide')
        setIcon('about-icon-reverse')
    }
    const [isOpen, setIsOpen] = useState(false)

    const variants = {
        open: { 
            opacity: 1, 
            y: 0, 
            position:'absolute', 
            width: '100%',
            height: '100%',
            zIndex: '1',
            //backgroundColor:'white',
            //color: 'black',
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
                        <div style={{backgroundColor: 'transparent', width: '40px'}}>
                            <BsArrowUpRight className={icon}/>
                        </div>
                    Why test early?
            </button>
            <motion.div style={{ height: '0px'}}
            animate={isOpen ? 'open' : 'closed'}
            variants = {variants}
            //fill="transparent"
            //strokeWidth="3"
            //stroke="hsl(0, 0%, 18%)"
           // strokeLinecap="round"
            >
                
           <h3>Reasons for cognitive impairment testing in adults:</h3>
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
                
            </motion.div>

            
            <button disabled={false} className={button} style={{position: 'relative', width: '100%', backgrondColor: 'transparent'}}>
                        <div style={{backgroundColor: 'transparent', width: '40px'}}>
                            <BsArrowUpRight className={icon}/>
                        </div>
                    Warning Signs
            </button>
            <button disabled={false} className={button}  style={{position: 'relative', width: '100%', backgrondColor: 'transparent'}}>
                        <div style={{backgroundColor: 'transparent', width: '40px'}}>
                            <BsArrowUpRight className={icon}/>
                        </div>
                    By the Numbers
            </button>


                
            </div>

            <div>
                <h3>Reasons for medical professionals to use our services:</h3>
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
            <h3>Learn More About Cognitive Impairment in the United States</h3>
            </div>

{/*
            <Offcanvas show={show} onHide={handleClose} backdrop="static" placement={'bottom'} 
                style={{
                    
                }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <h3>Reasons for cognitive impairment testing in adults:</h3>
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
              </Offcanvas.Body>
            </Offcanvas>

*/}
           

        
               
        </div>
 


                /* 
                <button className='about-links-container' >
                    <BsArrowUpRight className='about-links-icon'/>
                    Daily Activities
                </button>
                <button className='about-links-container' >
                    <BsArrowUpRight className='about-links-icon'/>
                    Medical Care
                </button>
                <button className='about-links-container' >
                    <BsArrowUpRight className='about-links-icon'/>
                    Diagnosis
                </button>
                <button className='about-links-container'>
                    <BsArrowUpRight className='about-links-icon'/>
                    Awareness
                </button>
            </div>
            */

            /* 

<div className='about-content'>
            <div className={info}>

                <div className='about-content1'>
                    <div className='about-image-container'>
                        <img src={people} className='people-icon'></img>
                    </div>
                    <h3 className='about-text-title'>1 in 10 Adults 45 and Older Are affected by Subjective Cognitive Decline (SCD)</h3>
                    <p><span className='scd-text'><em>Subjective Cognitive Decline</em></span> is characterized by self-reported memory problems that are getting worse over the past year.</p>
                    </div>
                </div>
            
           
            <div className='about-content2'>
                <div className='about-image-container'>
                    <img src={percentage} className='percentage-icon'></img>
                </div>
                <h3 className='about-text-title'>41% of Adults with <abr>SCD</abr> Have Given Up Daily Activities</h3>
            </div>
            
            
            <div className='about-content3'>
                <div className='about-image-container'>
                    <img src={percentage2} className='percentage-icon2'></img>
                </div>
                <h3 className='about-text-title'>42% of Adults with SCD Have Discussed Symptoms With a Doctor</h3>
            </div>

            
            <div className='about-content4'>
                <div className='about-image-container'>
                    <img src={lessThanHalf} className='lessthanhalf-icon'></img>
                </div>
                <h3 className='about-text-title'>Less Than Half of Adults with Dementia Have Been Diagnosed</h3>
            </div>

           
            <div className='about-content5'>
            <div className='about-image-container'>
                <img src={thirtyfive} className='thirtyfive-icon'></img>
            </div>
            <h3 className='about-text-title'>Yet Only 35% Know They Have the Disease</h3>
            </div>
</div>
        </div>
        */
   ) }

export default About;