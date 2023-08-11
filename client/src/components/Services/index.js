import React, { useRef } from 'react';
import { FiCheckSquare } from "react-icons/fi";
import { useInView } from 'framer-motion';

function Services(){
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
        <div>
        <div id={'services'} className='services-container' ref={ref}>
            <div className='title-container'> 
                <h2 className='titles' style={transitions}>Our Services</h2>
                <div className='title-borders'></div>
            </div>
            <div className='content-padding'>
            <h3 className='services-subtitle'>Testing for Cognitive Impairment</h3>
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
            </div>
        </div>
    )
}

export default Services;