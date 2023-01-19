import React from 'react';

function Navigation() {
    return (
        <div className='navigation-container'>
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
    )
}

export default Navigation;