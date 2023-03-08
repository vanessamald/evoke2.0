import React, { useRef, useState } from 'react';
import { FiCheckSquare } from "react-icons/fi";
import { useInView } from 'framer-motion';
import servicesImage from '../../assets/images/brainview-test.jpg'

function Services(){
    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);
    // transition styling 
    const ref = useRef(null)
    const isInView = useInView(ref)
    const transitions = {
        animationName: isInView ? 'slideUp' : 'none',
        animationDuration: '2s',
        animationTimingFunction: 'ease-in',
        display: 'block'
       }
/*
    
    cursor.addEventListener("mousemove", (e) => {
    const image = document.querySelector('services-preview')
    e.target.style.zIndex = 99
    image.setAttribute('src', servicesImage)
    }) */
/*
    var textLink = document.querySelector(".services-preview-link");
    const image = document.querySelector('services-preview')  
    document.addEventListener("mousemove", (e) => { 
       
        const x = e.clientX;
        const y = e.clientY;
        */
        /*
        image.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        textLink.style.setProperty('--x',(x)+'px');
        textLink.style.setProperty('--y',(y)+'px');
        */
/*
        textLink.style.left = `${x}px`;
        textLink.style.top = `${y}px`;
    })
    */
    

      
      
    return (
        <div>
        <div id={'services'} className='services-container' ref={ref}>
            <h2 className='services-title' style={transitions}>Our Services</h2>
            <h3 className='services-subtitle'>Testing for Cognitive Impairment</h3>
            <div className=''>
            <p className=''>   
                Each Evoke Diagnostics test is processed into an easily understandable report that includes brain health biomarkers. 
                Along with the biomarkers and relevant medical history, a better informed decision can be made
                regarding a patient's health and an individualized treatment plan can be reached.
            </p>
            
            <br/>
            <br/>
            <p className=''>Our Services can help identify:</p>
                 <ul className='services-list'>
                    <li>
                        <FiCheckSquare/> Warning signs years in advance of disease onset of Memory Loss or Dementia
                    </li>
                    <li>
                        <FiCheckSquare/> Traumatic brain injury
                    </li>
                    <li>
                        <FiCheckSquare/> Depression
                    </li>
                    <li>
                        <FiCheckSquare/> Chronic Pain
                    </li>
                    <li>
                        <FiCheckSquare/> ADD/ADHD
                    </li>
                    <li>
                        <FiCheckSquare/> PTSD
                    </li>
                    <li>
                        <FiCheckSquare/> Sleep apnea and more!
                    </li>
                </ul>
                </div>
                <button className='services-preview-link'>BrainView Report Preview</button>
                
            </div>

        </div>
    )
}

export default Services;