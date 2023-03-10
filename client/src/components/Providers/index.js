import React, {useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {  motion, useInView } from 'framer-motion';
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import useThemeStorage from '../themeStorage';
import useCursorPosition from '../useCursorPosition';
import brainViewImage from '../../assets/images/brainview-test.jpg'

function Providers(){
    // import theme
    const [theme, toggleTheme, componentMounted] = useThemeStorage();

    // modal state
    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);

    // page transitions
    const ref = useRef(null)
    const isInView = useInView(ref)
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

    // title animation
    const text = 'Why BrainView?';
    const SplitText = () => {
        return (
           <span >
           {text.split("").map(function(char, index){
   
               const style = {"animationDelay": (0.5 + index / 10) + "s", "fontSize": "8vw"};
              
               return <span key={index} id={index} className='' style={style}>{char}</span>
               ;
           })}
           </span>
           );
        }

    // subtitle animation
    const subText = "Rapidly, Inexpensively, and Reliably measure the brain's functional health"
    
    const SplitSubText = () => {
        return (
            <span>
               {subText.split(" ").map(function(char, index) {
                
                const style = { "animationDelay": (0.5 + index / 10) + "s", "animation": "slideUp 3s forwards"}
                return <span key={index} id={index} className='' style={style}>{char}</span>
               })}    
            </span>
        )
    }

    // cursor settings
    const [cursorText, setCursorText] = useState("");
    const [cursorVariant, setCursorVariant] = useState("default");
    const [ imageSize, setImageSize ] = useState("imageDefault");
    const { clientX, clientY, pageX, pageY } = useCursorPosition();
       
    //console.log(clientX, clientY);
    const zoomX = clientX * 2;
    const zoomY = clientY * 2;

    const variants = {
            default: {
            opacity: 1,
            height: 30,
            width: 30,
            borderRadius: '50px',
            fontSize: "16px",
            backgroundColor: "transparent",
            border: '2px solid white',
            x: clientX,
            y: clientY,
            transition: {
                type: "spring",
                mass: 0.6
            }
            },
            hover: {
                zIndex: 9999,
                //position: 'fixed',
                borderRadius: '50px',
                opacity: 1,
                
                backgroundColor: "var(--font-color)",
                height: 60,
                width: 60,
                fontSize: "14px",
                x: clientX,
                y: clientY,
                //transform: "translate(-50%, -50%)",
            },
            imageDefault: {
                height: '700px',
                width: 'auto'
            },
            imageHover: {
                backgroundPositionX: `${zoomX}px`,
                backgroundPositionY: `${zoomY}px`
            }
          };

    const spring = {
        type: "spring",
        stiffness: 500,
        damping: 28
        };

        function hoverEnter(event) {
            setCursorText("View");
            setCursorVariant("hover");
            console.log('CURSOR WORKS')
            
          }
        
          function hoverLeave(event) {
            setCursorText("");
            setCursorVariant("default");
            console.log('CURSOR OUT')
          }

          function zoomImage(event) {
            setImageSize("imageHover");
            console.log('IMAGE IN')
          }

          function zoomOut(event) {
            setImageSize("imageDefault");
            console.log('IMAGE OUT');
          }
    
    const [isHoveringText, setIsHoveringText] = useState(false);

    const hoverText = () => {
        hoverEnter();
        setIsHoveringText(true);
    }

    const hoverTextOut = () => {
        hoverLeave();
        setIsHoveringText(false);
    }

    return (
        <div>
            <div id={'providers'} className='providers-container' ref={ref} >
                <h2 className='' style={transitions}>Providers</h2>
                <p>
                At the primary care level, current testing lacks the sensitivity and specificity to make accurate patient assessments. 
                Until recently, it has been difficult to objectively assess patients for cognitive impairment due to the lack of specificity.
                There is an increased need for physician to test neuro-function due to the aging population, the prevalence of stress and pain, and increased awareness of the impact of head injuries on cognition.
                Memory loss and cognitive symptoms can occur outside of normal age-associated memory loss. 
                </p>
                <button className='providers-button' onClick={() => setShow(true)}>More Information</button>
            </div>
            <Modal 
                className={theme}
                show={show}
                onHide={() => setShow(false)}
                fullscreen={fullscreen}
                //style={{backgroundColor: 'var(--body-bg-color)'}}
            >
                <Modal.Header  className='providers-modal' 
                //style={{backgroundColor: 'var(--body-bg-color)'}} 
                closeButton>
                <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body className='providers-modal' style={{}}>
                    <div className='providers-span' id={'providers-info'}>
                        <h1><SplitText/></h1>
                    </div>
                    <div  className='providers-content-container'>
                    <div className='providers-content2'>
                    <div>

                        <div 
                            onMouseEnter={hoverText} 
                            onMouseLeave={hoverTextOut} 
                            className='providers-subtext'
                            >
                            <h3><SplitSubText/></h3><br/>
                            {/*<h3 className='providers-largetext'>The ability to rapidly, inexpensively, and reliably measure the brain’s functional health</h3>*/}
                        </div>
                    
                        {isHoveringText && (
                        <div className='providers-hidden-text'>
                            <motion.p style={transitions2}>
                                Before the BrainView system, the only brain assessment technology available that used EEG was not portable, used complicated accompanying software and was not practical to use in a busy medical practice.
                                <em className='providers-em'> BrainView was developed from necessity to create a wireless, automated, rapidly deploying brain function measurement and treatment system that was also non-intrusive and low-cost.</em>
                            </motion.p>
                        </div>
                        )}
                   <div style={{paddingTop: '400px'}}>
                    <p >
                    Due to the test length of 25-45 minutes, the BrainView is ideal for primary care and specialty physicians caring for patients within their offices.
                    </p>
                    <p>
                    BrainView is backed by over 30 years of globally celebrated, peer-reviewed scientific research.
                    </p>
                    <p>
                    BrainView system combines electrophysiological biomarkers associated with numerous cognitive conditions.
                    It details known clinical correlation based on over 600 scientific publications and defines electroencephalography-derived metrics. 
                    Recommended medical interventions are based on these clinical correlations.
                    </p>
                    <h3 style={transitions}>Practical Benefits:</h3>
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
                    <h3>Technology Benefits</h3>
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
        </div>
        </div>

        <h3 style={transitions}>BrainView focuses on multiple core cognitive functions to support:</h3>
                    <ul>
                        <li>proactive brain health</li>
                        <li>informed clinical decision-making</li>
                        <li>customized patient care</li>
                    </ul>
                    </div>

                    <p>
                    Healthy cognitive function is essential to your patient’s overall quality of life. 
                    BrainView promotes brain health by analyzing the electrical activity of the brain, and scoring the brain’s cognitive performance in information processing, memory, attention and concentration.
                    </p>
                    <p>
                    The BrainView System quantifies and qualifies electrical impulses and patterns in the brain. We identify how the brain performs. Scored areas include processing abilities, memory, concentration, and attention span. 
                    It is vital to understand how your brain performs so that you can live your best life. Prompt treatment is available to ensure that you have a healthy brain for years to come.
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

                    
                        <div className='providers-content1-container'>
                        
                            <div className='providers-content1'>
                            <h3>More About BrainView</h3>
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
                                <motion.div
                                    style={{ 
                                        position: "fixed",
                                        top: 0,
                                        ottom: 0,
                                        left: 0,
                                        right: 0,
                                        zIndex: 9999,
                                        pointerEvents: "none"
                                    }}
                                    variants={variants}
                                    className="circle"
                                    animate={cursorVariant}
                                    transition={spring}
                                >
                                    <span className="cursor-text">{cursorText}</span>
                                </motion.div>
                            </div>
                            <div
                                className="brainview-demo-container"
                                onMouseEnter={hoverEnter}
                                onMouseLeave={hoverLeave}
                            >
                                <img onMouseEnter={zoomImage} onMouseLeave={zoomOut}
                                    className='brainview-demo' src={brainViewImage} alt='BrainView test preview'></img>
                            </div>
                        </div>
                            
                   
                    <div className='arrowup-icon-container'>
                        <a href='/#providers-info'>
                        <BsFillArrowUpCircleFill className='arrowup-icon'/>
                        </a>
                    </div>

                   </div>         
                </Modal.Body>  
            </Modal>
        </div>
    )
}

export default Providers;