import React, { useEffect, useState } from "react";

function useThemeStorage () {
    const [ isOn, setIsOn ] = useState('purple');
    const [ theme, setTheme ] = useState('dark');
    const [ componentMounted, setComponentMounted ] = useState(false);

// set localstorage for theme and setTheme/toggler class    
const themeToggler = () => {
    console.log('THEME TOGGLER');
    
    if (theme === 'dark') {
        window.localStorage.setItem('theme', 'light');
        window.localStorage.setItem('toggler', 'blue');
        setTheme('light');
        setIsOn('blue');
        console.log('theme is LIGHT')
    } else { 
        window.localStorage.setItem('theme', 'dark');
        window.localStorage.setItem('toggler', 'purple');
        setTheme('dark');
        setIsOn('purple');
        console.log('theme is DARK')
    } 
}

// get local storage for theme
useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    const localToggler = window.localStorage.getItem('toggler');
    if (localTheme) {
        setTheme(localTheme);
        setIsOn(localToggler);
        console.log(localToggler);
    } else {
        setTheme('dark')
        setIsOn('purple');
        window.localStorage.setItem('theme', 'dark')
    } 
    setComponentMounted(true);
},
[])
return [ theme, themeToggler, componentMounted, isOn ]
};

export default useThemeStorage;