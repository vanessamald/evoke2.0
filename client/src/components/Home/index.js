import React from 'react';
import logo from '../../assets/images/EVOKE_Official_Logo.png'
import Navigation from '../Navigation';
import About from '../About';
import Services from '../Services';
import Contact from '../Contact';
import Vision from '../Vision';
import logo1 from '../../assets/images/logo1.png';

function Home() {
    return (
        <div >
        <div className='home-container'
        style ={{ 
        }}
        >
        <Navigation/>  
            <div className='logo-container'>
                <img className='logo' src={logo} alt='evoke neurodiagnostics logo'></img>
            </div>
            
            </div>
            <About/>
           <Services/>
           <Vision/>
           <Contact/>
        </div>
    )
}

export default Home;