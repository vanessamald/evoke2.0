import React, {useRef, useState } from 'react';
import {  motion, useInView } from 'framer-motion';
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import useThemeStorage from '../themeStorage';
import brainViewImage from '../../assets/images/brainview-test.jpg'
import Accordion from 'react-bootstrap/Accordion';
import neurons from '../../assets/images/neurons.png';
import brainviewCaptures from '../../assets/images/BrainView Captures.png';
import brainviewCaptures2 from '../../assets/images/BrainView Captures2.png';
import brainviewCaptures3 from '../../assets/images/BrainView Captures3.png';
import brainviewCaptures5 from '../../assets/images/BrainView Captures5.png';

function ProvidersInfo() {
    // import theme
    const [theme, toggleTheme, componentMounted] = useThemeStorage();
    
    // page transitions
    const ref = useRef(null);
    const isInView = useInView(ref);
    const transitions = {
        animationName: isInView ? 'slideUp' : 'none',
        animationDuration: '4s',
        animationTimingFunction: 'ease-in',
        display: 'block'
        }
    
    const transitions2 = {
        animationName: isInView ? 'fadeIn' : 'none',
        animationDuration: '3s',
        animationTimingFunction: 'ease-in',
        display: 'block'
        }
        
    const drawlineBottom = {
        opacity: isInView ? 1 : 0,
        animation: isInView ? 'draw-line-bottom2 4s' : 'none',
        animationFillMode: isInView ? 'forwards' : 'backwards',  
        animationDelay: isInView ? '2s' : '0',
        backgroundColor: 'transparent',
        width: '100%' 
        }
    
    // title animation
    const text = 'Why BrainView?';
    const SplitText = () => {
        return (
            <span >
                {text.split("").map(function(char, index){
                const style = {"animationDelay": (0.5 + index / 10) + "s", "backgroundColor": 'transparent'};
                return <span key={index} id={index} className='providers-span1' style={style}>{char}</span>
                ;
               })}
               </span>
               );
            }
    
    // subtitle animation
    const subText = "Rapidly Inexpensively and Reliably measure the brain's functional health"
    const SplitSubText = () => {
        return (
            <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', backgroundColor: 'transparent'}}>
                {subText.split(" ").map(function(char, index) {
                    const style = { "animationDelay": (0.5 + index / 2) + "s", "backgroundColor": 'transparent'}
                    return <span key={index} id={index} className='providers-span2' style={style}>{char}</span>
                    })}    
                </div>
            )
        }
    
    // subtitle animation // slideUp2 animation
    const newText = "non intrusive and low cost"
    const SplitNewText = () => {
        return (
            <div>
                {newText.split(" ").map(function(char, index) {
                    const style = { "animationDelay": (0.5 + index / 5) + "s"}
                    return <span key={index} id={index} className='providers-span-text' style={style}>{char}</span>
                    })}    
                </div>
            )
        }
    
    // hidden info div
    const [ isDiv, setDiv ] = useState(false);
    
    const showDiv = () => {
        setDiv(true);
    }

    const closeDiv = () => {
        setDiv(false)
    }
    
        if (!componentMounted) {
            return <div/>
          }

    return (
        <div className={theme}>
            <div className='providers-span'>
                <h1><SplitText/></h1>
            </div>
            <div className='providers-content-container'>
                <div className=''>   
                    {isDiv && (
                        <div className='providers-hidden-text-container' ref={ref}>
                            <div style={transitions2} className='providers-hidden-text'>
                                Before the BrainView system, the only brain assessment technology available that used EEG was not portable, used complicated accompanying software and was not practical to use in a busy medical practice.
                                BrainView was developed from necessity to create a wireless, automated, rapidly deploying brain function measurement and treatment system that was also:
                            <div className='providers-span3' ref={ref}>
                                <h3><SplitNewText/></h3> 
                                
                            </div>
                        </div>
                        <div className='providers-accordion-container'>
                            <div className={theme} ref={ref}>    
                                <div id="content" className="main">
                                    <section className="section s-hero s-hero-versions">
                                        <div className="section-radius"></div>
                                            <h2 className="heading-xl text-center numbers-title">How BrainView Works</h2>
                                            <h3 className='numbers-subheading1 providers-title4'>BrainView Captures</h3>
                                            <img className='providers-image2' src={brainviewCaptures}></img>
                                            <h3 className='providers-title3 heading-xl'>FDA-approved, Pain-free and can be completed in about 25-45 minutes</h3>
                                            <div style={drawlineBottom} className='providers-drawline'/>
                                            {/*<p>
                                                The BrainView system is the cutting-edge hardware and software that allows for objective cognitive functional assessment. 
                                                BrainView is designed to aid physicians in diagnosis by effectively measuring biomarkers related to seizures, to memory loss, concussion, cognitive impairment, and other stress-related neurological conditions.
                    </p>*/}
                                            <p className='providers-content'>
                                    
                                    BrainView promotes brain health by analyzing the electrical activity of the brain, and scoring the brain’s cognitive performance in information processing, memory, attention and concentration.
                                    The BrainView System quantifies and qualifies electrical impulses and patterns in the brain. 
                                    We identify how the brain performs. Scored areas include processing abilities, memory, concentration, and attention span. 
                                    It is vital to understand how your brain performs so that you can live your best life. 
                                    Prompt treatment is available to ensure that you have a healthy brain for years to come.
                                    When assessing a head injury, physician must be sure to accurately assess brain function to avoid legal repercussions.
                                    Without proper diagnosis, a head injury can have a severe negative impact on patient outcomes. Patients that are cognitively impaired can present with symptoms of confusion, forgetfulness, “brain fog,” and functional impairment.
                                </p>
                                            <div className="container-max">
                                                <div className='about-image-container' style={{width: '100%', height: 'auto'}}>
                                                    <img  className='people-icon'></img>
                                                </div>
                                                
                                        <div>
                                            
                                            
                                            </div>
                                        </div>
                                    </section>
                <div className="section s-heading-first background-blurple z-9"> 
                    <h2 className='providers-title heading-xl'>In Practice</h2>
                    <div className=''>
                    <div style={drawlineBottom} className=''/>
                        <div className='' >
                            
                           
                               
                                    
                               
                            </div>
                      
                            <div className='providers-in-practice' ref={ref}>
                               
                                <img className='providers-image3 ' src={brainviewCaptures3}></img>
                                <p className='transparent-bkg'>
                                    BrainView provides physicians with highly-sensitive, objective data on brain function. 
                                    This feature makes BrainView an excellent complimentary assessment tool to traditional subjective clinical questionnaires for long-term patient management. In essence, BrainView can detect subtle variations in brain function that other tests may miss.
                                    The system may be especially adept at illuminating patients’ responses to therapy in the beginning stages of the disease. 
                                </p>
                                <h2 className='providers-title3 heading-xl'>Early Detection Leads to Early Intervention</h2>
                                <img className='providers-image2' src={brainviewCaptures2}></img>
                                
                            
                                <h2 className='providers-title2'>The BrainView system can help assess patients’ biomarkers to aid in diagnosis up to 15 years prior to the onset of symptoms.</h2> 
                            </div>
                           
                        </div>
                    </div>
                    <section className="section s-radius sr-large background-blurple z-9">
                        <div className="container-max">
                            <div className="card-content2 numbers-section3 r"></div>
                        </div>
                    </section>
                    <div className="section s-heading background-white z-7">
                        <div className="section-head-bg-extension background-white padding-top"></div>
                        <h2 className='heading-xl transparent-bkg title-large-white'>Technology Benefits</h2>
                        <h3 className='transparent-bkg title-sub-white center-content'>qEEG testing is useful for improving care for cognitive conditions and mental health in patients who may be experiencing:</h3>
                            <div className="background-white center-content">
                               
                                
                                <img className='transparent-bkg img-size img-center' src={brainviewCaptures5}></img>
                            </div>
                        </div>
                        <section className="section s-radius sr-large background-white z-9" style={{backgroundColor: 'var(--font-color)'}}>
                            <div className="container-max">
                                <div className="card-content2">
                                    <div className='about-image-container'></div>
                                </div>
                            </div>
                        </section>
                        <div className='numbers-last-div'>
                            <div className='about-image-container' >
                                <img  className='thirtyfive-icon'></img>
                            </div>
                            <h2  className="heading-xl text-center">And Only 35% Know They Have the Disease</h2>
                            <h3  className='numbers-last-heading'>Healthy aging starts with <em style={{fontSize: '8vw'}}>Cognitive Health</em><a> Contact us today</a> and learn more about our testing services.</h3>
                        </div>
                        
                       
                </div>
                <p style={transitions} className=''></p>
        </div>


                            <Accordion defaultActiveKey="" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>About</Accordion.Header>
                                    <Accordion.Body>
                                        <p style={transitions2}>
                                            BrainView technology is a scientific breakthrough in brain health management and diagnostics.
                                            BrainView allows medical professionals, to see more and know more than ever before.
                                        </p>
                                        <p style={transitions2}>
                                            BrainView helps clinicians with objective data on a patient’s core brain functions like: memory, attention, information processing, and executive function. 
                                            BrainView can identify symptoms of cognitive dysfunction such as fatigue, memory loss or brain fog, in some cases several years before they manifest.
                                        </p>
                                        <p style={transitions2}>
                                            The BrainView system is the cutting-edge hardware and software that allows for objective cognitive functional assessment. 
                                            BrainView is designed to aid physicians in diagnosis by effectively measuring biomarkers related to seizures, to memory loss, concussion, cognitive impairment, and other stress-related neurological conditions.
                                        </p>
                                        <p style={transitions2}>
                                            BrainView captures the electroencephalogram activity of the brain (EEG), electrocardiogram activity of the heart (ECG), visual and auditory processing speeds (evoked potentials), and a subjective neuropsychological survey.
                                            In addition, the system provides a comprehensive neuro-functional physiology report of the results, data summary, raw data, and images.
                                        </p>
                                        <p style={transitions2}>
                                            The BrainView system enables physicians to obtain specific neurophysiological biomarkers, which profile the patient’s neurological function. 
                                            Biomarkers allow the treating physician to gain additional clinical information vital to making a well-informed patient-care decision.
                                        </p>
                                        <p style={transitions2}>
                                            BrainView is designed for accessibility across specialties, including primary care and internal medicine physicians. Data provided by the system facilitates the understanding of cognitive changes. 
                                            In addition, results help direct nutritional, medicinal, and biofeedback treatment courses. 
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Practical Benefits</Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <li>Improves clinical outcomes through early, objective assessment</li>
                                            <li>Detects declines in memory markers up to 15 years prior to the manifestation of symptoms</li>
                                            <li>Detects head injuries that a CT or MRI may be unable to detect</li>
                                            <li>A quick and easy functional assessment in the office</li>
                                            <li>Uses qEEG, ERP, and eLoRETA imaging, EEG, and ERP as reliable measures for head injury</li>
                                            <li>Empowers physicians to initiate the necessary treatment early on</li>
                                            <li>Allows initiation of effective treatment options, altering the path of the disease state</li>
                                            <li>Offers innovative diagnostic and treatment methods to patients</li>
                                            <li>Also uses ANS/HRV, ECG biomarkers</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Technology Benefits</Accordion.Header>
                                    <Accordion.Body>
                                        <h4>qEEG testing is useful for improving care for cognitive conditions and mental health in patients who may be experiencing:</h4>
                                        <ul>
                                            <li>Mild Cognitive Impairment</li>
                                            <li>Dementia</li>
                                            <li>Alzheimer’s Disease</li>
                                            <li>ADD & ADHD</li>
                                            <li>Traumatic Brain Injury</li>
                                            <li>Depression</li>
                                            <li>Anxiety</li>
                                            <li>Post-Traumatic Stress Disorder</li>
                                            <li>Insomnia or Sleep Apnea</li>
                                            <li>Dizziness</li>
                                            <li>Changes in Vision</li>
                                            <li>Changes in Hearing</li>
                                            <li>Fatigue</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Test Preview</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="brainview-demo-container">
                                            <img className='brainview-demo' src={brainViewImage} alt='BrainView test preview'></img>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>In Practice</Accordion.Header>
                                    <Accordion.Body>
                                        <p>Due to the test length of 25-45 minutes, the BrainView is ideal for primary care and specialty physicians caring for patients within their offices.</p>
                                        <p>BrainView is backed by over 30 years of globally celebrated, peer-reviewed scientific research.</p>
                                        <p>
                                            BrainView system combines electrophysiological biomarkers associated with numerous cognitive conditions.
                                            It details known clinical correlation based on over 600 scientific publications and defines electroencephalography-derived metrics. 
                                            Recommended medical interventions are based on these clinical correlations.
                                        </p>
                                        <h3 style={transitions}>BrainView focuses on multiple core cognitive functions to support:</h3>
                                        <ul>
                                            <li>proactive brain health</li>
                                            <li>informed clinical decision-making</li>
                                            <li>customized patient care</li>
                                        </ul>
                                        <p>
                                            Healthy cognitive function is essential to your patient’s overall quality of life. 
                                            BrainView promotes brain health by analyzing the electrical activity of the brain, and scoring the brain’s cognitive performance in information processing, memory, attention and concentration.
                                        </p>
                                        <p>
                                            The BrainView System quantifies and qualifies electrical impulses and patterns in the brain. 
                                            We identify how the brain performs. Scored areas include processing abilities, memory, concentration, and attention span.  
                                        </p>
                                        <p>
                                            When assessing a head injury, physician must be sure to accurately assess brain function to avoid legal repercussions. Without proper diagnosis, a head injury can have a severe negative impact on patient outcomes. 
                                            Patients that are cognitively impaired can present with symptoms of confusion, forgetfulness, “brain fog,” and functional impairment.
                                        </p>
                                        <h3>BrainView helps clinicians to Identify:</h3>
                                        <ul>
                                            <li>Cognitive function and impairment</li>
                                            <li> Biomarkers associated with cognitive impairment and memory loss</li>
                                            <li> Autonomic nervous system function</li>
                                            <li>Physiologic functions associated with sleep disorders, memory loss, anxiety disorders and attention difficulties</li>
                                        </ul>
                                        <h3>BrainView helps clinicians to Assess:</h3>
                                        <ul>
                                            <li>The degree of cognitive impairment</li>
                                            <li>Physiologic changes in cognitive function over time</li>
                                            <li>Cognitive function response to clinical therapies</li>
                                            <li>Objectively Manage Cognitive Function and Memory Loss Over Time</li>
                                        </ul>
                                        <p>
                                            BrainView provides physicians with highly-sensitive, objective data on brain function. 
                                            This feature makes BrainView an excellent complimentary assessment tool to traditional subjective clinical questionnaires for long-term patient management.
                                            In essence, BrainView can detect subtle variations in brain function that other tests may miss.
                                        </p>
                                        <p>
                                            The system may be especially adept at illuminating patients’ responses to therapy in the beginning stages of the disease. 
                                            Early detection leads to early intervention, addressing pathologies more effectively and optimizing patient outcomes. 
                                            Specifically, physicians can obtain meaningful, objective data on patient response to:
                                        </p>
                                        <ul>
                                            <li>Pharmacologic therapy</li>
                                            <li>Nutritional supplementation</li>
                                            <li>Behavioral therapy</li>
                                            <li>Diet and exercise</li>
                                            <li>Neurotherapy</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div> 
                        <div className='arrowup-icon-container' style={{paddingTop: '100px'}}>
                            <a href='/#providers-info' onClick={closeDiv}>
                                <BsFillArrowUpCircleFill className='arrowup-icon2'/>
                            </a>
                        </div>
                    </div>
                )}
                <div className='providers-subtext-container providers-image1-container'>
                    <div style={{position: 'relative'}} className='providers-subtext'>
                        <h3><SplitSubText/></h3>
                        
                            {/*<h3 className='providers-subtext'>The ability to rapidly, inexpensively, and reliably measure the brain’s functional health</h3>*/}
                    </div>
                    <button onClick={showDiv} style={{border: 'none', zIndex: '8', backgroundColor: 'transparent'}}>
                        <div className="providers-hover" style={{}}>Learn More</div>
                    </button>
                </div>
            </div>
        </div> 
    </div>
)}

export default ProvidersInfo;