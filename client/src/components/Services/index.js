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
        <div id={'services'} className='vision-container'>
            <h2 className='vision-title'>Our Services</h2>
            <h3>Testing for Cognitive Impairment</h3>

            <motion.div style={{ scaleY: scrollYProgress}}>
            <div className='early-detection-container'>
                <img className='neurons-image' src={neurons}></img>
            </div>
            
            
            <p>Our Services can help identify:</p>
                 <ul className='vision-list'>
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