import React, {useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {  motion, useInView } from 'framer-motion';
import Offcanvas from 'react-bootstrap/Offcanvas';
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
                <h2 className='' style={transitions}>Providers</h2>
                <p>
                At the primary care level, current testing lacks the sensitivity and specificity to make accurate patient assessments. 
                Until recently, it has been difficult to objectively assess patients for cognitive impairment due to the lack of specificity.
                There is an increased need for physician to test neuro-function due to the aging population, the prevalence of stress and pain, and increased awareness of the impact of head injuries on cognition.
                Memory loss and cognitive symptoms can occur outside of normal age-associated memory loss. 
                </p>
                <button className='providers-button' onClick={() => setShow(true)}>More Information</button>
            </div>
            <Modal show={show} onHide={() => setShow(false)} fullscreen={fullscreen}>

            <Offcanvas.Header  id='numbers' style={{backgroundColor: 'var(--body-bg-color)',opacity: '1', display: 'flex',
                 alignItems: 'center', justifyContent: 'space-between', padding: '1rem'}} closeButton >
                    </Offcanvas.Header>
                {/*<Modal.Header closeButton><Modal.Title></Modal.Title></Modal.Header>*/}
                <ProvidersInfo/>      
            </Modal>
        </div>
    )
}

export default Providers;