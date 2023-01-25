import React from 'react';
import { FiCheckSquare } from "react-icons/fi";

function Vision(){
    return (
        <div id={'ourvision'} className='vision-container'>
            <h2 className='vision-title'>Our Vision</h2>
            <h3>Early Detection</h3>
            <p>The Brainview can help identify:</p>
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
        </div>
    )
}

export default Vision;