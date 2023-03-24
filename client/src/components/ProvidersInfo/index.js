import React, {useRef, useState } from 'react';
import {  motion, useInView } from 'framer-motion';
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import useThemeStorage from '../themeStorage';
import brainViewImage from '../../assets/images/brainview-test.jpg'
import Accordion from 'react-bootstrap/Accordion';
import neurons from '../../assets/images/neurons.png';
import brainviewCaptures from '../../assets/images/BrainView Captures.png';
import brainviewCaptures3 from '../../assets/images/BrainView Captures3.png';
import brainviewCaptures9 from '../../assets/images/BrainView Captures9.png';
import brainviewCaptures11 from '../../assets/images/BrainView Captures11.png';
import Contact from '../Contact';

function ProvidersInfo() {
    // import theme
    const [theme, toggleTheme, componentMounted] = useThemeStorage();
    
    // transitions
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
    
    // subtitle animation 
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
                                            <h3 className='numbers-subheading1 providers-title4'>BrainView Captures</h3>
                                            <img className='providers-image2' src={brainviewCaptures}></img>
                                            <p className='providers-content'>
                                                BrainView promotes brain health by analyzing the electrical activity of the brain, and scoring the brain’s cognitive performance in information processing, memory, attention and concentration.
                                                The BrainView System quantifies and qualifies electrical impulses and patterns in the brain. 
                                                We identify how the brain performs. <em>Scored areas include processing abilities, memory, concentration, and attention span.</em>
                                            </p>
                                            <p>
                                                In addition, the system provides a comprehensive neuro-functional physiology report of the results, data summary, raw data, and images.
                                            </p>  
                                            <p>
                                                The BrainView system enables physicians to obtain specific neurophysiological biomarkers, which profile the patient’s neurological function. 
                                                Biomarkers allow the treating physician to gain additional clinical information vital to making a well-informed patient-care decision.
                                            </p>   
                                            <div style={drawlineBottom} className='providers-drawline'/>
                                            {/*<p>
                                                The BrainView system is the cutting-edge hardware and software that allows for objective cognitive functional assessment. 
                                                BrainView is designed to aid physicians in diagnosis by effectively measuring biomarkers related to seizures, to memory loss, concussion, cognitive impairment, and other stress-related neurological conditions.
                                            </p>*/}     
                                    </section>
                                    <div className="section s-heading-first background-blurple z-9"> 
                                        <h2 className='providers-title heading-xl'>In Practice</h2>
                                        <div className='providers-in-practice' ref={ref}>
                                            <img className='providers-image2' src={brainviewCaptures9}></img>
                                            {/*<p className='transparent-bkg'>
                                                BrainView provides physicians with highly-sensitive, objective data on brain function. 
                                                This feature makes BrainView an excellent complimentary assessment tool to traditional subjective clinical questionnaires for long-term patient management. In essence, BrainView can detect subtle variations in brain function that other tests may miss.
                                                The system may be especially adept at illuminating patients’ responses to therapy in the beginning stages of the disease. 
                                            </p>*/}
                                            <h2 className='providers-title2'>The BrainView system can help assess patients’ biomarkers to aid in diagnosis up to 15 years prior to the onset of symptoms.</h2> 
                                            <div style={drawlineBottom} className='providers-drawline'/>
                                                <img className='providers-image3 ' src={brainviewCaptures3}></img>
                                            </div>
                                        </div>
                                        <section className="section s-radius sr-large background-blurple z-9">
                                            <div className="container-max">
                                                <div className="card-content2 numbers-section3 r"></div>
                                                    </div>
                                        </section>
                                        <div className="section s-heading background-white z-7" style={{flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
                                            <div className="section-head-bg-extension background-white padding-top"></div>
                                                <img className='providers-image4' src={brainviewCaptures11}></img>
                                            </div>
                                            <section className="section s-radius sr-large background-white z-9" style={{backgroundColor: 'var(--font-color)'}}>
                                                <div className="container-max"></div>
                                                <h2 className="heading-xl text-center" style={{backgroundColor: 'transparent', color: 'var(--body-bg-color)'}}>Preview the Test Below</h2>
                                                <Accordion>
                                                    <Accordion.Item eventKey="3">
                                                        <Accordion.Header>Test Preview</Accordion.Header>
                                                        <Accordion.Body>
                                                            <div className="brainview-demo-container">
                                                                <img className='brainview-demo' src={brainViewImage} alt='BrainView test preview'></img>
                                                            </div>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>
                                            </section>
                                            <div className='numbers-last-div'>
                                                <h3  className='numbers-last-heading'>Early Detection Leads to <em style={{fontSize: '8vw'}}>Early Intervention</em><a> Contact us today</a> and learn more about our testing services.</h3>
                                            </div>
                                            <Contact/>
                                        </div>
                                    </div>
                                </div> 
                                <div className='arrowup-icon-container' style={{paddingTop: '100px', marginRight: '25px'}}>
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