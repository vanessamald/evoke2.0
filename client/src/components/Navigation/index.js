import React, { useState } from 'react';

function Navigation() {
    // set state styling for button and toggle and hidden navbar
    const [style, setStyle] = useState("hidden-nav");
    const [ button, setButton] = useState("lines-container")
    const [ toggle, setToggle ] = useState(false);
    
    const changeStyle = () => {
        if (!toggle) {
        setStyle("navigation-container");
        setButton("change");
        }
        if (toggle) {
            setButton("lines-container");
        }
    };

    const handleClick = () => {
        setToggle(!toggle);
        changeStyle();
    }

    return (
    <div> 
        <div className='home-nav-btn'>    
        <button className='menu-btn' onClick={handleClick} aria-label="Menu">
        <div className={button}>
            <div className='menu-line1'></div>
            <div className='menu-line2'></div>
            <div className='menu-line3'></div>
        </div>
        </button>
        </div> 
        {toggle ?
        <div className='navigation-container' >
            <div className='navigation-links-container'>
                <a className='navigation-links' href='/#about'>About</a>
                <div className='line'></div>
                <a className='navigation-links' href='/#services'>Services</a>
                <div className='line'></div>
                <a className='navigation-links' href='/#ourvision'>Our Vision</a>
                <div className='line'></div>
                <a className='navigation-links' href='/#providers'>Providers</a>
                <div className='line'></div>
                <a className='navigation-links' href='/#contact'>Contact Us</a>
            </div>
        </div>
        : 
        <></>
        }
    </div>
    )
}

export default Navigation;