import React from 'react';
import logo from '../../assets/images/EVOKE_Official_Logo.png'
import Navigation from '../Navigation';
import About from '../About';
import Services from '../Services';
import Contact from '../Contact';
import Team from '../Team';

function Home() {
    return (
        <div>
        <div className='home-container'>
        <Navigation/>  
            <div className='logo-container'>
                <img className='logo' src={logo} alt='evoke neurodiagnostics logo'></img>
            </div>
            
            </div>
            <About/>
           <Services/>
           <Team/>
           <Contact/>
        </div>
    )
}

export default Home;