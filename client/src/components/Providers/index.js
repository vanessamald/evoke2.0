import React, {useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {  motion, useInView } from 'framer-motion';
import useThemeStorage from '../themeStorage';
import ProvidersInfo from '../ProvidersInfo';

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

    return (
        <div>
            <div id={'providers'} className='providers-container' ref={ref} >
                <div className='title-container'> 
                    <h2 className='titles' style={transitions}>Providers</h2>
                    <div className='title-borders'></div>
                </div>
                <div className='content-padding'>
                    <p>
                    Evoke Neurodiagnostics is committed to serving providers by providing convenient access to early detection technology for their cognitively impaired patients while improving revenue for their practice. 
                    Our goal is to improve the way providers can quickly and conveniently test patients and receive immediate, actionable reporting thereby improving their patient outcomes.
                    </p>
                    <button className='providers-button' onClick={() => setShow(true)}>More Information</button>
                </div>
            </div>
            <Modal show={show} onHide={() => setShow(false)} fullscreen={fullscreen} style={{paddingLeft: '0px'}}>
                <Modal.Header  id='providers-info' closeButton></Modal.Header>
                <ProvidersInfo/>      
            </Modal>
        </div>
    )
}

export default Providers;