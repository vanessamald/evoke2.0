import React from 'react';
import { FiCheckSquare } from "react-icons/fi";
import { motion, useTransform, whileInView, useScroll } from 'framer-motion';
import neurons from '../../assets/images/moritz-kindler-G66K_ERZRhM-unsplash.jpg';

function Services(){

    const { scrollYProgress } = useScroll()
    const scale = useTransform(scrollYProgress, [0, 2], [0.2, 2]);

    return (
        <motion.div 
            initial= 'hidden'
            whileInView='visible'
            style={{ scale }}
        >
        <div id={'services'} className='services-container'>
            <h2 className='services-title'>Our Services</h2>
            <h3>Testing for Cognitive Impairment</h3>

            <motion.div style={{ scaleY: scrollYProgress}}>
            <div className='early-detection-container'>
                <img className='neurons-image' src={neurons}></img>
            </div>
            <p>   
                Each test is processed into an easily understandable report that includes brain health biomarkers. 
                Along with the biomarkers and relevant medical history, a better informed decision can be made
                regarding a patients health and an individualized treatment plan can be reached.
            </p>
            <p>Our Services can help identify:</p>
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
                </motion.div>
            </div>
            
        </motion.div>
    )
}

export default Services;