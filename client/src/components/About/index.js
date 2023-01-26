import React from 'react';
import people from '../../assets/images/people.png';
import percentage from '../../assets/images/percentage1.png';
import percentage2 from '../../assets/images/percentage2.png';
import lessThanHalf from '../../assets/images/lessthanhalf.png';
import thirtyfive from '../../assets/images/thirtyfive.png';

function About(){
    return (
        <div id={'about'} className='about-container'>
            <h2 className='about-title'>About</h2>
            <div className='about-image-container'>
                <img src={people} className='people-icon'></img>
            </div>
            
            <h3 className='about-text-title'>1 in 10 Adults 45 and Older Are affected by Subjective Cognitive Decline (SCD)</h3>
            <h4></h4>

            <p><span className='scd-text'>Subjective Cognitive Decline</span> is characterized by self-reported memory problems that are getting worse over the past year.</p>
            <div className='about-image-container'>
                <img src={percentage} className='percentage-icon'></img>
            </div>
            
            <h3 className='about-text-title'>41% of Adults with SCD Have Given Up Daily Activities</h3>
            <div className='about-image-container'>
                <img src={percentage2} className='percentage-icon2'></img>
            </div>
            
            <h3 className='about-text-title'>42% of Adults with SCD Have Discussed Symptoms With a Doctor</h3>
            <div className='about-image-container'>
                <img src={lessThanHalf} className='lessthanhalf-icon'></img>
            </div>
            
            <h3 className='about-text-title'>Less Than Half of Adults with Dementia Have Been Diagnosed</h3>
            <div className='about-image-container'>
                <img src={thirtyfive} className='thirtyfive-icon'></img>
            </div>
            
            <h3 className='about-text-title'>Yet Only 35% Know They Have the Disease</h3>
        </div>
    )
}

export default About;