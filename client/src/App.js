import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import Privacy from './components/Privacy';
import 'bootstrap/dist/css/bootstrap.min.css';
import useThemeStorage from './components/themeStorage';
import Contact from './components/Contact';
import { motion, useMotionValue, useSpring } from "framer-motion"

function App() {
  //const [data, setData] = React.useState(null);
  const [theme, toggleTheme, componentMounted] = useThemeStorage();

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 500 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  if (!componentMounted) {
    return <div/>
  }
  
  return (
    <div className={theme}>
      <motion.div className='cursor' style={{translateX: cursorXSpring, translateY: cursorYSpring}}/>
      <main className={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/privacypolicy' element ={<Privacy/>}></Route>
          <Route path='/#contact-form' element={<Contact/>}></Route>
        </Routes> 
        </BrowserRouter>
      </main>
    </div>
   
  );
}

export default App;
