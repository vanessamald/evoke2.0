import React, { useEffect, useState } from "react";

function useThemeStorage () {
    // set theme styles
    const [ isOn, setIsOn ] = useState('purple');
    const [ theme, setTheme ] = useState('dark');
    const [ cursor, setCursor ] = useState('cursor-dark');
    const [ componentMounted, setComponentMounted ] = useState(false);

// set localstorage for theme and setTheme/toggler class    
const themeToggler = () => {
    
    if (theme === 'dark') {
        window.localStorage.setItem('theme', 'light');
        window.localStorage.setItem('toggler', 'blue');
        setTheme('light');
        setIsOn('blue');
        //console.log('THEME IS LIGHT');
    } 
    else { 
        window.localStorage.setItem('theme', 'dark');
        window.localStorage.setItem('toggler', 'purple');
        window.localStorage.setItem('cursor', 'dark');
        setTheme('dark');
        setIsOn('purple');
    } 
}

// get local storage for theme, toggler, and cursor
useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    const localToggler = window.localStorage.getItem('toggler');
    if (localTheme) {
        setTheme(localTheme);
        setIsOn(localToggler);
    } else {
        setTheme('dark')
        setIsOn('purple');
        setCursor('cursor-dark');
        window.localStorage.setItem('theme', 'dark');
        window.localStorage.setItem('toggler', 'purple');
    } 
    setComponentMounted(true);
},
[])
return [ theme, themeToggler, componentMounted, isOn  ]
};

export default useThemeStorage;