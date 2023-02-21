import React, { useRef } from 'react';
import { useInView,motion } from 'framer-motion';

function Footer () {

    // transition styling 
    const ref = useRef(null)
    const isInView = useInView(ref)
    const transitions = {
        animationName: isInView ? 'slideUp' : 'none',
        animationDuration: '2s',
       //animationTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)',
        animationTimingFunction: 'ease-in',
        display: 'block',
        }

        const variants = {
            animate: {
              transition: {
                delayChildren: 0.4,
                staggerChildren: 0.1,
              },
            },
          };

    return (
        <div className='footer-container' ref={ref}>
            <motion.div className='footer-content' variants={variants} initial='hidden' animate='animate'>
                <a  style={transitions} className='footer-links' href='/privacypolicy'>Privacy Policy</a> 
                <a  style={transitions} className='footer-links' href='https://www.sweetsongmarketing.com/' target='_blank'> Sweet Song Marketing </a>
                <a  style={transitions} className='footer-links' href='https://vanessamald.github.io/portfolio' target='_blank'>Website Design by Revivir Studio</a>  
                <a  style={transitions} className='footer-links'>Evoke LLC &copy;2023</a>
            </motion.div>
        </div>
    )
}

export default Footer;