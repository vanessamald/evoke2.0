import React, { useState } from 'react';

function Navigation() {
    const [style, setStyle] = useState("hidden-nav");
    const [ button, setButton] = useState("lines-container")
    
    const changeStyle = () => {
        console.log("you just clicked");
        setStyle("navigation-container");

        setButton("change");
    };


    return (
    <div style={{
        width: '100%',
        
    }}>
        
        <button className='menu-btn' onClick={changeStyle}>
        
        <div className={button} style={{
            
            
        }}>
            <div className='menu-line1'></div>
            <div className='menu-line2'></div>
            <div className='menu-line3'></div>
            
        </div>
        
        </button>
        
        

        
        <div className={style} >
            <div className='navigation-links-container'>
                <a className='navigation-links' href='/#about'>About</a>
                <div className='line'></div>
                <a className='navigation-links' href='/#services'>Services</a>
                <div className='line'></div>
                <a className='navigation-links' href='/#theteam'>The Team</a>
                <div className='line'></div>
                <a className='navigation-links' href='/#contact'>Contact Us</a>
                <div className='line'></div>
            </div>
        </div>
        
    </div>
    )
}

export default Navigation;