import React, { useState, useEffect } from 'react';
import people from '../../assets/images/people.png';
import percentage from '../../assets/images/percentage1.png';
import percentage2 from '../../assets/images/percentage2.png';
import lessThanHalf from '../../assets/images/lessthanhalf.png';
import thirtyfive from '../../assets/images/thirtyfive.png';
import { BsArrowUpRight } from 'react-icons/bs';
import { InView,  inView, ref } from 'react-intersection-observer';
import { motion } from 'framer-motion';


function About(){
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
 
    return (
        <div style={{position:'relative',}}>
        <div id={'about'} className='about-container' style={{marginBottom:'500px'}}>
            <h2 className='about-container-title'>About</h2>
            <p>
            Our company offers cognitive impairment testing services designed to assess the biomarkers of cognitive decline. With a focus on preventative care and early detection, our testing services aim to provide individuals with the information and support they need to maintain their cognitive health and independence. Our testing process is non-invasive, confidential, and tailored to the unique needs of each individual.
            We believe that everyone deserves access to the information that can help maintain their cognitive health throughout the lifespan.
            </p>

            <h3>Reasons to test for cognitive impairment in older adults:</h3>
            <p>
            1.	Changes in memory or thinking ability
            2.	Difficulty performing daily tasks
            3.	Confusion or disorientation
            4.	Mood swings or depression
            5.	Withdrawal from social activities
            6.	Loss of initiative or motivation
            7.	Speech problems
            8.	Decreased ability to handle finances or make decisions
            9.	Suspected neurological disorders (e.g. Alzheimer's, dementia)
            10.	To determine appropriate medical or support interventions.
            </p>

            <h3>Reasons for medical professionals to use our services:</h3>
            <p>1.	To identify early signs of cognitive decline
            2.	To facilitate early diagnosis and treatment of potential causes
            3.	To track changes over time
            4.	To provide personalized interventions to maintain or improve cognitive function
            5.	To provide reassurance and support to patients and their families
            6.	To inform advance care planning and decision-making
            7.	To promote healthy lifestyle choices and habits that support brain health.
            </p>
            <div style={{position:'relative'}}>
                <div style={{position: 'relative', borderRadius: '100px', marginLeft: '50px'}}>
                    <h3 style={{position: 'relative', paddingTop: '30px', zIndex: '0', fontSize: '2vw'}}>1 in 10 Adults 45 and Older Are affected by Subjective Cognitive Decline (SCD)</h3>
                    <img src={people} className='' style={{height: '100px', width: 'auto'}}></img>
                </div>        
                <button disabled={false} className={button} onClick={handleClick} style={{position: 'absolute', width: '100%', marginTop: '-150px', backgrondColor: 'transparent'}}>
                        <div style={{backgroundColor: 'transparent', width: '40px'}}>
                            <BsArrowUpRight className={icon}/>
                        </div>
                    Subjective Cognitive Decline
                </button>
                <button disabled={false} className={button} onClick={handleClick} style={{position: 'absolute', width: '100%', marginTop: '0px', backgrondColor: 'transparent'}}>
                        <div style={{backgroundColor: 'transparent', width: '40px'}}>
                            <BsArrowUpRight className={icon}/>
                        </div>
                    Daily Activities
                </button>
                <button disabled={false} className={button} onClick={handleClick} style={{position: 'absolute', width: '100%', marginTop: '150px', backgrondColor: 'transparent'}}>
                        <div style={{backgroundColor: 'transparent', width: '40px'}}>
                            <BsArrowUpRight className={icon}/>
                        </div>
                    Medical Care
                </button>
                <button disabled={false} className={button} onClick={handleClick} style={{position: 'absolute', width: '100%', marginTop: '300px', backgrondColor: 'transparent'}}>
                        <div style={{backgroundColor: 'transparent', width: '40px'}}>
                            <BsArrowUpRight className={icon}/>
                        </div>
                    Diagnosis
                </button>
                <button disabled={false} className={button} onClick={handleClick} style={{position: 'absolute', width: '100%', marginTop: '450px', backgrondColor: 'transparent'}}>
                        <div style={{backgroundColor: 'transparent', width: '40px'}}>
                            <BsArrowUpRight className={icon}/>
                        </div>
                    Awareness
                </button>

            </div>
        </div>
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