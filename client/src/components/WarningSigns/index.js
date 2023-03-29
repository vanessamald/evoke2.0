import React from "react";
import {  motion, useInView } from 'framer-motion';
import useThemeStorage from '../themeStorage';
import patient1 from '../../assets/images/patient1.png';
import neurons from '../../assets/images/neurons.png';

function WarningSigns() {
    const [theme, toggleTheme, componentMounted] = useThemeStorage();
    return (

    <div className={theme} style={{width: '100%', height: '100%'}}>
        
        <div className='warning-signs-container'>
            <div className='warning-signs-title-container'>
                <h3 className='warning-signs-title heading-xl text-center'>Cognitive Decline</h3>
                <h3 className='warning-signs-title heading-xl text-center' style={{}}>Warning Signs</h3>
                {/*<img src={patient1}></img>*/}
                <div className='providers-image12'>
                <img src={neurons}></img>
    </div>
            </div>
            <div className='motion-div-container'>
            <div className='motion-div-p'>
                <p>Changes in memory or thinking acuity</p>    
            </div>
            
            <div className='motion-div-p'>
                <p>Difficulty performing daily tasks</p>
            </div>
            <div className='motion-div-p'>
                <p>Confusion or disorientation</p>
            </div>
            <div className='motion-div-p'>
                <p>Speech problems</p>
            </div>
            <div className='motion-div-p'>
                <p>Mood swings or depression</p>
            </div>
            <div className='motion-div-p'>
                <p>Withdrawal from social activities</p>
            </div>
            <div className='motion-div-p'>
                <p>Loss of initiative or motivation</p>
            </div>
            <div className='motion-div-p'>
                <p>Decreased ability to handle finances or make decisions</p>
            </div>
            <div className='motion-div-p'>
                <p>Suspected neurological disorders (e.g. Alzheimer's, dementia)</p>
            </div>
        </div>
        </div>
        <div className='motion-div-source'>
            <p className='motion-div-source-link'>Source: Alzheimer's Disease and Healthy Aging. <a className='motion-div-source-link' href='https://www.cdc.gov/aging/dementia/index.html' style={{backgroundColor: 'transparent'}}>https://www.cdc.gov/aging/dementia/index.html</a>. 2023  </p>
        </div>
    </div>
)}

export default WarningSigns;