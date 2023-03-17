import React, { useRef } from 'react';
import { useInView } from 'framer-motion';

function Vision() {

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
        <div id={'ourvision'} className='vision-container'>
            <div className='vision-text-container' ref={ref}>
                <div className='title-container'> 
                    <h2 className='titles' style={transitions}>Our Vision</h2>
                    <div className='title-borders'></div>
                </div>
            <h3>Early Detection</h3>
                <p>
                Our mission is to provide comprehensive and compassionate cognitive impairment testing for older adults, 
                helping to diagnose age-related cognitive decline and related conditions. We are dedicated to delivering high-quality, 
                evidence-based testing services, using state-of-the-art technology by empowering older adults and their families with 
                the knowledge and resources they need to maintain their cognitive health and well-being. Through our commitment to excellence 
                and continuous improvement, we aim to advance the field of cognitive impairment testing in older adults and to improve the 
                lives of seniors everywhere.
                </p>
            </div>
        </div>
    )
}

export default Vision;