import React from 'react';

function Navigation() {
    return (
        <div className='navigation-container'>
            <div className='navigation-links-container'>
                <a className='navigation-links' href='/'>About</a>
                <div className='line'></div>
                <a className='navigation-links' href='/'>Services</a>
                <div className='line'></div>
                <a className='navigation-links' href='/'>The Team</a>
                <div className='line'></div>
                <a className='navigation-links' href='/'>Contact Us</a>
                <div className='line'></div>
            </div>
        </div>
    )
}

export default Navigation;