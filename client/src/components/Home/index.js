import React from 'react';
import logo from '../../assets/images/EVOKE_Official_Logo.png'
import Navigation from '../Navigation';
import About from '../About';
import Services from '../Services';
import Contact from '../Contact';
import Vision from '../Vision';
import logo1 from '../../assets/images/logo1.png';
import logoTransparent from '../../assets/images/EVOKE Official Logo Transparent.png'
import { BsFillArrowUpCircleFill } from "react-icons/bs";

function Home() {
    return (
        <div >
        <div className='home-container'
        style ={{ 
        }}
        >
        <Navigation/>  
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