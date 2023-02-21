import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../Navigation';
import About from '../About';
import Contact from '../Contact';
import Vision from '../Vision';
import logoTransparent from '../../assets/images/EVOKE Official Logo Transparent.png'
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import Footer from '../Footer';
import Services from '../Services';
import useThemeStorage from '../themeStorage';

function Home() {
    // set theme
    const [ theme, themeToggler, componentMounted, isOn, setIsOn] = useThemeStorage();
    
    //console.log(theme);
    
    // set scrolling 
    const [scroll, setScroll] = useState(0);
    const [ arrow, setArrow] = useState('arrowup-icon-hide');
    
    const scrollingArrow = (event) => {
        setScroll(event.currentTarget.scroll);
        setArrow('arrowup-icon');
    }

    return (
        <div className={theme} onScroll={scrollingArrow}>
            <div>
                <div className='home-nav'>
                    
                        <Navigation className={theme}/>
                    
                 
                    <div className="theme-togg-container">
                        <div 
                            data-darkmode={isOn}
                            onClick={themeToggler}
                            className={isOn}
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
                    </div>

                <div className='logo-container' >
                    <img className='logo' src={logoTransparent} alt='evoke neurodiagnostics logo'></img>
                </div>
            </div>
            <About/>
            <Services/>
            <Vision/>
            <Contact/>
            <div className='arrowup-icon-container'>
                <a href="/#">
                    <BsFillArrowUpCircleFill className='arrowup-icon'/>
                </a>
            </div>
            <Footer/> 
        </div>
    )
}

export default Home;