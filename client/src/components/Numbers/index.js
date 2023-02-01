import React, { useState, useEffect } from 'react';
import people from '../../assets/images/people.png';
import percentage from '../../assets/images/percentage1.png';
import percentage2 from '../../assets/images/percentage2.png';
import lessThanHalf from '../../assets/images/lessthanhalf.png';
import thirtyfive from '../../assets/images/thirtyfive.png';
import { BsFillArrowDownCircleFill } from "react-icons/bs";

function Numbers() {

    const text = 'Scroll Down';
    const SplitText = () => {
        return (
        <span >
        {text.split("").map(function(char, index){
            return <span key={index} style={{transform:`'rotate(${index * 5}deg)`, position: 'absolute', fontSize:'1.2em', left: '50%', transformOrigin: '0 100px'}}>{char}</span>;
        })}
        </span>
        );
    }
 
    return (

        <div class="page">
        <div id="content" class="main">
          <section class="section s-hero s-hero-versions">
            <div class="section-radius"></div>
            <h1 class="heading-xl text-center" style={{fontSize: '7rem'}}>Cognitive Decline in the U.S.</h1>


            <BsFillArrowDownCircleFill style={{display: 'flex', justifyContent: 'center', width: '60px', height: '60px', position: 'relative', alignItems: 'center'}}/>
            <div style={{marginBottom: '100px'}}>
                <div style={{position: 'absolute', animation: 'rotateText 10s linear infinite'}}>
                    <SplitText style={{}}/>
                </div>
            </div>
            
           
            
            
            
            

            <div class="container-max">
                    <div className='about-image-container' style={{width: '100%', height: 'auto'}}>
                        <img src={people} className='people-icon'></img>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <h2 class="heading-xl text-center">1 in 10 Adults 45 and Older </h2>
                        <h3>Are affected by Subjective Cognitive Decline (SCD)</h3>
                        <p><span className='scd-text'><em>Subjective Cognitive Decline</em></span> is characterized by self-reported memory problems that are getting worse over the past year.</p>
                    </div>
                  
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    
                <div style={{display: 'flex', flexDirection: 'column', padding: '30px', borderTop:'3px solid white', borderBottom: '5px solid white'}}>
                        <h3 className='' style={{marginRight: '', fontSize: '48px'}}>41% </h3>
                        <h3 style={{fontSize: '24px'}}>of Adults with <abr>SCD</abr> Have Given Up Daily Activities</h3>
                </div>
                <div className='about-image-container'>
                        <img src={percentage} className='percentage-icon'></img>
                    </div>
                </div>
            </div>
          </section>
          <div class="section s-heading-first background-blurple z-9"> 
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'column', padding: '30px', borderTop:'3px solid black', borderBottom: '3px solid black'}}>
                        <h3 className='' style={{marginRight: '', fontSize: '48px'}}>Only 42% </h3>
                        <h3 style={{fontSize: '24px'}}>of Adults with SCD Have Discussed Symptoms With a Doctor</h3>
                    </div>
                    <div className='about-image-container'>
                        <img src={percentage2} className='percentage-icon2'></img>
                    </div>
                </div>
          </div>
          <section class="section s-radius sr-large background-blurple z-9">
            <div class="container-max">
              <div class="card-content2">
                
               
                

                <div className='about-image-container'>
                    <img src={lessThanHalf} className='lessthanhalf-icon'></img>
                </div>
                <h2 class="heading-xl text-center">Less Than Half of Adults</h2>
                <h2 class="text-center">With Dementia Have Been Diagnosed</h2>
              </div>
            </div>
          </section>

      
    
          <div class="section s-heading background-white z-7">
            <div class="section-head-bg-extension background-white"></div>
            <div class="container-max">
              
            <div className='about-image-container'>
                    <img src={thirtyfive} className='thirtyfive-icon'></img>
                </div>
            <h2 class="heading-xl text-center">Yet Only 35% Know They Have the Disease</h2>
            <h3 className=''></h3>
            </div>
          </div>
    
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>

        /*
        <div>
            <div className='numbers-stack'>
                <div>

                <div className='numbers-card' id='numbers1'>
                    <div className='about-image-container'>
                        <img src={people} className='people-icon'></img>
                    </div>
                    <h3 className='about-text-title'>1 in 10 Adults 45 and Older Are affected by Subjective Cognitive Decline (SCD)</h3>
                    <p><span className='scd-text'><em>Subjective Cognitive Decline</em></span> is characterized by self-reported memory problems that are getting worse over the past year.</p>
                    </div>
                </div>
            
          

            <div className='numbers-card' id='numbers2'>
                <div className='about-image-container'>
                    <img src={percentage} className='percentage-icon'></img>
                </div>
                <h3 className=''>41% of Adults with <abr>SCD</abr> Have Given Up Daily Activities</h3>
            </div>
      
            {
        isVisible 
         && 
            <div className='numbers-card' id='numbers3'>
                <div className='about-image-container'>
                    <img src={percentage2} className='percentage-icon2'></img>
                </div>
                <h3 className=''>42% of Adults with SCD Have Discussed Symptoms With a Doctor</h3>
            </div>
}
            <div className='numbers-card' id='numbers3'>
                <div className='about-image-container'>
                    <img src={lessThanHalf} className='lessthanhalf-icon'></img>
                </div>
                <h3 className=''>Less Than Half of Adults with Dementia Have Been Diagnosed</h3>
            </div>

            {
        isVisible 
         && 
            <div className='numbers-card' id='numbers4'>
                <div className='about-image-container'>
                    <img src={thirtyfive} className='thirtyfive-icon'></img>
                </div>
            <h3 className=''>Yet Only 35% Know They Have the Disease</h3>
            </div>
}
</div>
        </div>
        
      */ 
    )
}


export default Numbers;