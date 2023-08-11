import React, { useRef } from 'react';
import people from '../../assets/images/people.png';
import lessThanHalf from '../../assets/images/lessthanhalf.png';
import thirtyfive from '../../assets/images/thirtyfive.png';
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import useThemeStorage from '../themeStorage';
import { useInView } from "framer-motion";
import Contact from '../Contact';

function Numbers() {
    const [ theme ] = useThemeStorage();

    // scrolling text span
    const text = 'scrolldown';
    const SplitText = () => {
        return (
        <span >
        {text.split("").map(function(char, index){
            
            const rotateText = {
                // eslint-disable-next-line
                transform: 'rotate' + `(${index * 35}deg)`,
            };
            return <span key={index} id={index} className='scrolling-letters' style={rotateText}>{char}</span>
            ;
        })}
        </span>
        );
    }

        // inView animations
        const ref = useRef(null);
        const isInView = useInView(ref);

        const drawline = { 
            opacity: isInView ? 1 : 0,
            animation: isInView ? 'draw-line2 5s' : 'none',
            animationFillMode: isInView ? 'forwards' : 'backwards', 
            animationDelay: isInView ? '1s' : '0', 
            width: '75%' 
         };

        const drawline3 = {
            opacity: isInView ? 1 : 0,
            animation: isInView ? 'draw-line3 5s' : 'none',
            animationFillMode: isInView ? 'forwards' : 'backwards', 
            backgroundColor: 'transparent',
            animationDelay: isInView ? '2s' : '0' ,
            width: '75%' 
        };

        const drawlineBottom = {
            opacity: isInView ? 1 : 0,
            animation: isInView ? 'draw-line-bottom 5s' : 'none',
            animationFillMode: isInView ? 'forwards' : 'backwards', 
            animationDelay: isInView ? '3s' : '0',
            backgroundColor: 'transparent',
            width: '75%' 
        }

        // transition styling 
        const transitions = {
            animationName: isInView ? 'slideUp' : 'none',
            animationDuration: '2s',
            animationTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)',
            display: 'block'
        }
    
    return (
        <div className={theme} ref={ref}>    
            <div id="content" className="main">
                <section className="section s-hero s-hero-versions">
                    <div className="section-radius"></div>
                        <h1 className="heading-xl text-center numbers-title">Cognitive Decline in the U.S.</h1>
                        <BsFillArrowDownCircleFill style={{ color:'var(--font-color)', top:'40px', display: 'flex', width: '60px', height: '60px', position: 'relative', alignItems: 'center', justifyContent: 'center'}}/>
                        <div className='scroll-down-container'>
                            <div className='scroll-text'>
                                <SplitText/> 
                            </div>
                        </div>
                        <div className="container-max">
                            <div className='about-image-container' style={{width: '100%', height: 'auto'}}>
                                <img src={people} alt='1 out of 10 Adults icon' className='people-icon' loading="lazy"></img>
                            </div>
                            <div className='numbers-section1'>
                                <h2 className='text-center heading-xl' style={transitions}>1 in 10 Adults 45 and Older </h2>
                                <h3 className='numbers-subheading1'>Are affected by Subjective Cognitive Decline (SCD)</h3>
                                <div className='numbers-content1'>
                                    <p className='z1-transparent'>SCD is a form of cognitive impairment and an early sign of dementia</p>
                                    <p className='z1-transparent'><span className='scd-text z1-transparent'><em>Subjective Cognitive Decline (SCD)</em></span> is characterized by self-reported memory problems that are getting worse over the past year.</p>
                                </div>
                            </div>
                        <div>
                            <div ref={ref} className='numbers-div1'>
                                <div style={drawline} className='numbers-div1'>
                                    <div className='numbers-circle1'><h3 className='numbers-circle1-text' style={{marginRight: '', fontSize: '48px'}}>41% </h3></div>
                                    <h3 className='numbers-text z1-transparent' style={{fontSize: '24px'}}>of Adults with SCD Have Given Up <p className='numbers-em z1-transparent'>Daily Activities</p></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="section s-heading-first background-blurple z-9"> 
                    <div className='numbers-section3'>
                        <div className='numbers-section3-container numbers-section3' ref={ref}>
                            <div style={drawline3} className='numbers-div2-content'>
                                <div className='numbers-circle1'><h3 className='numbers-circle1-text' style={{fontSize: '48px'}}>1 out of 3</h3></div>
                                    <h4 style={transitions} className='numbers-section3 numbers-p'>Adults with SCD say it has interfered with<p className='numbers-em1'>social activities</p></h4>
                                </div>  
                            </div>
                        <div className='numbers-section3-div numbers-section3'>   
                            <div className='numbers-section3' ref={ref}>
                                <div style={drawlineBottom} className='numbers-div2-content'>
                                    <div className='numbers-circle2'><h3 className='numbers-circle2-text text-center' style={{fontSize: '48px'}}>Only 42% </h3></div>
                                        <h3 style={transitions} className='numbers-div2-text'>of Adults with SCD Have Discussed Symptoms With a Doctor</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="section s-radius sr-large background-blurple z-9">
                        <div className="container-max">
                            <div className="card-content2 numbers-section3 r"></div>
                        </div>
                    </section>
                    <div className="section s-heading background-white z-7">
                        <div className="section-head-bg-extension background-white"></div>
                            <div className="container-max background-white">
                                <div className='about-image-container background-white' ref={ref}>
                                    <img src={lessThanHalf} alt='less than half icon' className='lessthanhalf-icon background-white' loading="lazy"></img>
                                </div>
                                <h2 style={transitions} className="heading-xl text-center background-white">Less Than Half of Adults</h2>
                                <h2 style={transitions} className="text-center background-white">With Dementia Have Been Diagnosed</h2>
                            </div>
                        </div>
                        <section className="section s-radius sr-large background-white z-9" style={{backgroundColor: 'var(--font-color)'}}>
                            <div className="container-max">
                                <div className="card-content2">
                                    <div className='about-image-container'></div>
                                </div>
                            </div>
                        </section>
                        <div className='numbers-last-div'>
                            <div className='about-image-container' >
                                <img ref={ref} src={thirtyfive} alt='thirty-five percent icon' className='thirtyfive-icon' loading="lazy"></img>
                            </div>
                            <h2 style={transitions} className="heading-xl text-center">And Only 35% Know They Have the Disease</h2>
                            <h3 style={transitions} className='numbers-last-heading'>Healthy aging starts with <em style={{fontSize: '8vw'}}>Cognitive Health</em> Contact us today and learn more about our testing services.</h3>
                        </div>
                        <Contact/>
                        <div className='arrowup-icon-container' ref={ref}>
                        <a href="#numbers" style={{border: 'none'}}>
                            <BsFillArrowUpCircleFill className='arrowup-icon'/>
                        </a>
                    </div>
                </div>
                <p style={transitions} className='numbers-source'>Source: Division of Population Health, National Center for Chronic Disease Prevention and Health Promotion. https://www.cdc.gov/aging/index.html. 2023</p>
        </div>
    )
}

export default Numbers ;
