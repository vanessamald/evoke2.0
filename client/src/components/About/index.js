import React from 'react';
import people from '../../assets/images/people.png';
import percentage from '../../assets/images/percentage1.png';
import percentage2 from '../../assets/images/percentage2.png';

function About(){
    return (
        <div id={'about'} className='about-container'>
            <h2 className='about-title'>About Evoke Neurodiagnostics</h2>
            <img src={people} className='people-icon'></img>
            <h3>1 in 10 Adults 45 and Older</h3>
            <h4>Are affected by Subjective Cognitive Decline (SCD)</h4>
            <img src={percentage} className='percentage-icon'></img>
            <h3>Of Adults with SCD Have Given Up Daily Activities</h3>
            <p>Subjective Cognitive Decline is characterized by self-reported memory problems that are getting worse over the past year.</p>
            <img src={percentage2} className='percentage-icon2'></img>
            <h3>Of Adults with SCD Have Discussed Symptoms With a Doctor</h3>
        </div>
    )
}

export default About;