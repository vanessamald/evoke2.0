import React from "react";
import {  motion, useInView } from 'framer-motion';
import useThemeStorage from '../themeStorage';

function WarningSigns() {
    const [theme, toggleTheme, componentMounted] = useThemeStorage();
    return (

    <div className={theme} style={{width: '100%', height: '100%'}}>
        
        <div className='warning-signs-container'>
            
            <h3 className='warning-signs-title heading-xl text-center'>Cognitive Decline Warning Signs</h3>
           
            <div className='warning-signs-content'>
            <div>
                <p>Changes in memory or thinking acuity</p>    
            </div>
            
            <div>
                <p>Difficulty performing daily tasks</p>
            </div>
            <div>
                <p>Confusion or disorientation</p>
            </div>
            <div>
                <p>Speech problems</p>
            </div>
            <div>
                <p>Mood swings or depression</p>
            </div>
            <div>
                <p>Withdrawal from social activities</p>
            </div>
            <div>
                <p>Loss of initiative or motivation</p>
            </div>
            <div>
                <p>Decreased ability to handle finances or make decisions</p>
            </div>
            <div>
                <p>Suspected neurological disorders (e.g. Alzheimer's, dementia)</p>
            </div>
</div>
        </div>
        <div>
            <p className=''>Source: Alzheimer's Disease and Healthy Aging. https://www.cdc.gov/aging/dementia/index.html. 2023  </p>
        </div>
    </div>
)}

export default WarningSigns;