import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import people from '../../assets/images/people.png';
import percentage from '../../assets/images/percentage1.png';
import percentage2 from '../../assets/images/percentage2.png';
import lessThanHalf from '../../assets/images/lessthanhalf.png';
import thirtyfive from '../../assets/images/thirtyfive.png';
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import useThemeStorage from '../themeStorage';

function Numbers() {
    const [theme, toggleTheme, componentMounted] = useThemeStorage();

    const [ offset, setOffset ] = useState(0);
    const [ visible, setVisible ] = useState(true);
    const [height, setHeight] = useState(0)

    const [ animation, setAnimation ] = useState();
    
    useEffect(() => {
        setOffset(window.pageYOffset);
        window.addEventListener('scroll', scrollTrigger, {passive: true});
        return () => window.removeEventListener('scroll', scrollTrigger);
    },
    
    []);

    const scrollTrigger = () => {

        window.addEventListener('scroll', () => {
            document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
          }, false);


        let scrollHeight = 1000;
        const winScroll = document.body.scrollTop || 
        document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > scrollHeight) {  
         visible && setVisible(false);
        
         //const scrollingText = {animation: 'rotateText' + ' ' + `${offset/100 *2}` +'s' + ' ' + 'linear infinite'};
        
            //console.log(scrollingText);
            //setAnimation(scrollingText);
    } else {
        setVisible(true);
        const slideInText = { animation: 'slideIn' + ' ' + '3s' };
        console.log(slideInText);
        setAnimation(slideInText);
    }
    }
    console.log(offset);

    // scrolling text span
    const text = 'scrolldown';
    const SplitText = () => {
        return (
        <span >
        {text.split("").map(function(char, index){

            const style = {"animation-delay": (0.5 + index / 10) + "s"};
            
            //const rotateText = {"transform": "rotate(5deg)"}
            const rotateText = {
                transform: 'rotate' +  `(${index * 35}deg)`,
               // animation: 'rotateText 10s linear infinite',
            };
            return <span key={index} id={index} className='scrolling-letters' style={rotateText}>{char}</span>
            ;
        })}
        </span>
        );
    }

    return (

        <div className={theme}>
                
             
        <div id="content" className="main">
          <section className="section s-hero s-hero-versions">
            <div className="section-radius"></div>
            <h1 className="heading-xl text-center numbers-title">Cognitive Decline in the U.S.</h1>

            <BsFillArrowDownCircleFill style={{ color:'var(--font-color)', top:'40px', display: 'flex', justifyContent: 'center', width: '60px', height: '60px', position: 'relative', alignItems: 'center', justifyContent: 'center'}}/>
            <div className='scroll-down-container'>
                <div className='scroll-text'>
                    <SplitText/> 
                </div>
            </div>
            
              
            {/* 
            <ReactCurvedText className='scroll-text'
                        width={370}
                        height={40}
                        cx={190}
                        cy={120}
                        rx={100}
                        ry={100}
                        startOffset={100}
                        reversed={true}
                        text={text}
                        textProps={{ style: {animation: 'moveText 10s linear infinite', position:'absolute'} }}
                    />
                    */}
            {
        visible 
         && 
            <div className="container-max">
                    <div className='about-image-container' style={{width: '100%', height: 'auto'}}>
                        <img src={people} className='people-icon'></img>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <h2 className='text-center heading-xl' style={animation}>1 in 9 Adults 45 and Older </h2>
                        <h3>Are affected by Subjective Cognitive Decline (SCD)</h3>
                        <p><span className='scd-text'><em>Subjective Cognitive Decline (SCD)</em></span> is characterized by self-reported memory problems that are getting worse over the past year.</p>
                        <p>SCD is a form of cognitive impairment and an early sign of dementia*</p>
                    </div>
                  
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    
                <div style={{display: 'flex', flexDirection: 'column', padding: '30px', borderTop:'3px solid var(--font-color)', borderBottom: '3px solid var(--font-color)'}}>
                        <h3 className='' style={{marginRight: '', fontSize: '48px'}}>41% </h3>
                        <h3 style={{fontSize: '24px'}}>of Adults with SCD Have Given Up Daily Activities</h3>
                </div>
                <div className='about-image-container'>
                        <img src={percentage} className='percentage-icon'></img>
                    </div>
                </div>
            </div>
}
          </section>
            
          <div className="section s-heading-first background-blurple z-9"> 
            <div className='numbers-section3' style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <div className='numbers-section3' style={{display: 'flex', flexDirection: 'column', padding: '30px', borderTop:'3px solid var(--body-bg-color)', borderBottom: '3px solid var(--body-bg-color)'}}>
                        <h3 className='numbers-section3' style={{marginRight: '', fontSize: '48px'}}>Only 42% </h3>
                        <h3 className='numbers-section3' style={{fontSize: '24px'}}>of Adults with SCD Have Discussed Symptoms With a Doctor</h3>
                </div>
                <div className='numbers-section3'>
                    <img src={percentage2} className='percentage-icon2'></img>
                </div>
            </div>

        <div className='numbers-section3-div numbers-section3'>            
            <div className='numbers-section3-container numbers-section3'>
                
                <h3 className='numbers-section3' style={{fontSize: '48px'}}>One third</h3>
                <p className='numbers-section3 numbers-p'>of Audults with SCD say it has interfered with social activities</p>
                
            </div>
        </div>
            

          </div>
          <section className="section s-radius sr-large background-blurple z-9">
            <div className="container-max">
              <div className="card-content2 numbers-section3 r">

                
                  
                
               
                
                

               
              </div>
            </div>
          </section>

      
    
          <div className="section s-heading background-white z-7">
            <div className="section-head-bg-extension background-white"></div>
            <div className="container-max background-white">
              
            <div className='about-image-container background-white'>
                <img src={lessThanHalf} className='lessthanhalf-icon background-white'></img>
            </div>
                <h2 className="heading-xl text-center background-white">Less Than Half of Adults</h2>
                <h2 className="text-center background-white">With Dementia Have Been Diagnosed</h2>


            </div>
          </div>

          <section className="section s-radius sr-large background-white z-9" style={{backgroundColor: 'var(--font-color)'}}>
            <div className="container-max">
              <div className="card-content2">
                
               
                

                <div className='about-image-container'>
                   </div>
              </div>
            </div>
          </section>
            
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
           


                <div className='about-image-container'>
                    <img src={thirtyfive} className='thirtyfive-icon'></img>
                </div>
                <h2 className="heading-xl text-center">And Only 35% Know They Have the Disease</h2>
                <h3 className=''></h3>
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
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>

      </div>


    )
}


export default Numbers;