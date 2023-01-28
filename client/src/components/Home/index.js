import React, { useState } from 'react';
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

function Home() {
    
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
    

    return (
        <div className={theme}>
            
       

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
                    backgroundImage: isOn ? 'radial-gradient(circle farthest-corner at 10% 20%, rgba(253,203,50,1) 0%, rgba(244,56,98,1) 100.2%)' : 'linear-gradient(109.8deg, rgba(62,5,116,1) -5.2%, rgba(41,14,151,1) -5.2%, rgba(216,68,148,1) 103.3%)',
                    
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



            <div className='logo-container'>
                <img className='logo' src={logoTransparent} alt='evoke neurodiagnostics logo'></img>
            </div>
            
            </div>
            <About/>
           <Services/>
           <Vision/>
           <Contact/>
           <div>
            <a href="/#">
                <BsFillArrowUpCircleFill className="arrowup-icon"/>
            </a>
           </div>
        </div>
    )
}

export default Home;