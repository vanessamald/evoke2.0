import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../Navigation';
import About from '../About';
import Contact from '../Contact';
import Vision from '../Vision';
import logoTransparent from '../../assets/images/EVOKE Official Logo Transparent.png'
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import Footer from '../Footer';
import Services from '../Services';
import Providers from '../Providers';
import useThemeStorage from '../themeStorage';
import { BsSun } from "react-icons/bs";
import { BsMoonStarsFill } from "react-icons/bs";

function Home() {
    // set theme
    const [ theme, themeToggler, isOn ] = useThemeStorage();
    
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
                                {theme === 'dark' ? <BsMoonStarsFill/> : <BsSun/> }  
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
            <Providers/>
            <Contact/>
            <div className='arrowup-icon-container'>
                <a href="/#" aria-label="Scroll back to top of page">
                    <BsFillArrowUpCircleFill className='arrowup-icon'/>
                </a>
            </div>
            <Footer/> 
        </div> 
    )
}

export default Home;