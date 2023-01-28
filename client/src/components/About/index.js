import React, { useState, useEffect } from 'react';
import people from '../../assets/images/people.png';
import percentage from '../../assets/images/percentage1.png';
import percentage2 from '../../assets/images/percentage2.png';
import lessThanHalf from '../../assets/images/lessthanhalf.png';
import thirtyfive from '../../assets/images/thirtyfive.png';
import {
    AnimatePresence,
    motion,
    useInView,
    cubicBezier,
    useScroll,
    useSpring,
    useTransform,
    MotionValue,
    Variants,
    whileInView,
    whileHover
  } from "framer-motion";
import { BsTranslate } from 'react-icons/bs';
import { InView,  inView, ref } from 'react-intersection-observer';


function About(){

   


    const container = {
        show: {
            transition: {
                staggerChildren: 0.50,
            },
        },
    };

    const item = {
        hidden: {
            opacity: 1,
            y: 200
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                ease: [0.1, 0.7, 1.0, 0.1],
                //ease: [ 0.6, 0.01, -0.05, 0.95],
                duration: 1.6
            },
        },
        exit: {
            opacity: 1,
            y: -200,
            transition: {
                ease: 'easeInOut',
                duration: 0.8,
            },
        },
    };

    const banner = {
        animate: {
          transition: {
            delayChildren: 0.4,
            staggerChildren: 0.3,
          },
        },
      };
      
      const letterAni = {
        initial: { y: 400 },
        animate: {
          y: 0,
          transition: {
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
            //ease: [0.1, 0.7, 1.0, 0.1],
            //ease: [0.6, 0.01, -0.05, 0.95],
            //delay: 1,
            //duration: 1,
            //repeat: Infinity
            //ease: [cubicBezier(0.17, 0.67, 0.83, 0.67)] 
          },
        
        },
        
      };

      /*
      const AnimatedLetters = ({ title, disabled }) => (
        <motion.span 
            variants={disabled ? null : banner}
            initial='initial'
            animate='animate'
        >
          {[...title].map((letter) => (
            <motion.span variants={disabled ? null : letterAni}>{letter}</motion.span>
          ))}
        </motion.span>
      );
*/
      const BannerRowTop = ({ title }) => {
        return (
            <div className="">
              <motion.span variants={letterAni} title={title} ></motion.span>
            </div>
            )}
     
    const Banner = () => {
        const [playMarquee, setPlayMarquee] = useState(false);

        useEffect(() => {
            setPlayMarquee(true);
        }, []);
        return (
        <motion.div variants={banner} playMarquee={playMarquee} >
        <BannerRowTop title={"1 in 10 Adults 45 and Older Are affected by Subjective Cognitive Decline (SCD)"} />
        </motion.div>
        );
    };


    /*
    
    //const { scrollY } = useScroll()
   
    const { scrollYProgress } = useScroll()
    const scrollX = useTransform(scrollYProgress, [0, 2], [0.2, 2]);

   // const scrollX = useTransform(scrollYProgress, [0,1], [0, -800]) 
   const x = useTransform(scrollYProgress, [0, 1], [1, -500]);
   const y = useTransform(scrollYProgress, [1, 0.2], [1.5, 500 ])
    
    const scrollStyles1 = {
        //useTransform: (0, scrollYProgress, 0),
        transform: `translateZ(${scrollYProgress})`,
        opacity: 1
    } 
    

    const scrollStyles ={
        transform: `translate3d(0px, ${scrollYProgress}px, 0px)`,
        //opacity: 1,
        //transform: 'rotate(45deg)'
      }

    const styles = {
        y: 50,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8
        }
    }
    */

    const Loader = ({ setLoading }) => {
        useEffect(() => {
          const timer = setTimeout(() => {
            setLoading(false);
          }, 4000);
          return () => clearTimeout(timer);
    })
};



    return (
        <div>
        
        
   
        <motion.div 
        variants={container}
        
        initial='hidden'
        whileInView='show'
        //animate='show'
        exit='exit'
        
        >
        <div id={'about'} className='about-container'>
            <h2 className='about-title'>About</h2>
           
           


            <ImageBlock id='people' variants={item}/>
            <ImageBlock id='percentage1' variants={item}/>
            <ImageBlock id='percentage2' variants={item}/>

           

     

            {/* 
            <div className='about-image-container'>
                
                <motion.img variants={item}  src={people} className='people-icon'></motion.img>
                
            </div>
            <h3 className='about-text-title'>1 in 10 Adults 45 and Older Are affected by Subjective Cognitive Decline (SCD)</h3>
            <p><span className='scd-text'><em>Subjective Cognitive Decline</em></span> is characterized by self-reported memory problems that are getting worse over the past year.</p>
            
            
            
            <div className='about-image-container'>
                <motion.img variants={item} src={percentage} className='percentage-icon'></motion.img>
            </div>
            
            <h3 className='about-text-title'>41% of Adults with <abr>SCD</abr> Have Given Up Daily Activities</h3>
            
            
            <div className='about-image-container'>
                <motion.img variants={item} src={percentage2} className='percentage-icon2'></motion.img>
            </div>
            <h3 className='about-text-title'>42% of Adults with SCD Have Discussed Symptoms With a Doctor</h3>
            
            <div className='about-image-container'>
                <motion.img variants={item} src={lessThanHalf} className='lessthanhalf-icon'></motion.img>
            </div>
            <h3 className='about-text-title'>Less Than Half of Adults with Dementia Have Been Diagnosed</h3>
          
            <div className='about-image-container'>
                <motion.img variants={item} src={thirtyfive} className='thirtyfive-icon'></motion.img>
            </div>
            <h3 className='about-text-title'>Yet Only 35% Know They Have the Disease</h3>
            
        */}
        </div>
        </motion.div>

        <motion.div variants={banner} initial='initial' animate='animate'>
            
            <BannerRowTop variants={letterAni} title={"1 in 10 Adults 45 and Older Are affected by Subjective Cognitive Decline (SCD)"} />
            </motion.div>
       
        </div>
    )
}


export const ImageBlock = ({ id, variants }) => {
    return (
      <motion.div
        //className={`image-block ${id}`}
        variants={variants}>
        <motion.img
          src={people}
          //fallback={`../../assets/images/${id}.jpg`}
          //alt={id}
        />
      </motion.div>
    );
  };

export default About;