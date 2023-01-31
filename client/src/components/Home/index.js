import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/images/EVOKE_Official_Logo.png';
import Navigation from '../Navigation';
import About from '../About';
import Services from '../Services';
import Contact from '../Contact';
import Vision from '../Vision';
import logo1 from '../../assets/images/logo1.png';
import logoTransparent from '../../assets/images/EVOKE Official Logo Transparent.png'
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import Footer from '../Footer';

function Home() {
    // theme and toggler
    const [ isOn, setIsOn ] = useState(false);
    const [ theme, setTheme ] = useState('dark');

    const themeToggler = () => {
        console.log('THEME TOGGLER');

        setIsOn(!isOn);
        if (theme === 'dark') {
            
            setTheme('light');
            console.log('theme is LIGHT')
        } else { 
            setTheme('dark');
            console.log('theme is DARK')
        } 
    }
    // set scrolling 
    const [scroll, setScroll] = useState(0);
    const [ arrow, setArrow] = useState('arrowup-icon-hide');
    
    const scrollingArrow = (event) => {
        setScroll(event.currentTarget.scroll);
        
        setArrow('arrowup-icon');
    }

    return (
        <div className={theme} onScroll={scrollingArrow}>
        <div 
        style ={{ 
        }}
        >
        <Navigation className={theme}/> 
        <div className="theme-togg-container">
        <div 
                className='toggle-container'
                data-darkmode={isOn}
                onClick={themeToggler}
                style={{ 
                    justifyContent: isOn ? 'flex-end' : 'flex-start',
                    backgroundImage: isOn ? 'radial-gradient(circle farthest-corner at 10% 20%, rgba(33, 129, 193, 1) 0%, rgba(108, 229, 232, 1) 100.2%)' : 'linear-gradient(109.8deg, rgba(62,5,116,1) -5.2%, rgba(41,14,151,1) -5.2%, rgba(216,68,148,1) 103.3%)',
                    
                }}  
            >
                <motion.div layout className='handle'>
                    <AnimatePresence exitBeforeEnter initial={false}>
                        <motion.i
                            className={`icon far fa-${isOn ? 'moon' : 'sun' }`}
                            key={isOn? 'moon' : 'sun'}
                            initial={{y: -30, opacity: 0}}
                            animate={{y:0, opacity:1}}
                            exit={{y: 30, opacity: 0}}
                            transition={{duration: 2}}
                        ></motion.i>
                    </AnimatePresence>
                </motion.div>
            </div>
            </div>



            <div className='logo-container' >
                <img className='logo' src={logoTransparent} alt='evoke neurodiagnostics logo'></img>
            </div>
            
            </div>
            <About/>
            
           
           <Vision/>
           
           <Contact/>
           
                <a href="/#">
                    <BsFillArrowUpCircleFill className='arrowup-icon'/>
                </a>
            
            <Footer/> 
        </div>
    )
}

export default Home;