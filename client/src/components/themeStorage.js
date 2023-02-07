import React, { useEffect, useState } from "react";

function useThemeStorage () {
    const [ isOn, setIsOn ] = useState(false);

    const [ theme, setTheme ] = useState('dark');
    const [ componentMounted, setComponentMounted ] = useState(false);

    
const themeToggler = () => {
    console.log('THEME TOGGLER');
    setIsOn(!isOn);
    if (theme === 'dark') {
        window.localStorage.setItem('theme', 'light');
        setTheme('light');
        console.log('theme is LIGHT')
    } else { 
        window.localStorage.setItem('theme', 'dark');
        setTheme('dark');
        console.log('theme is DARK')
    } 
}


// set local storage for theme
useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
        setTheme(localTheme);

    } else {
        setTheme('light')
        window.localStorage.setItem('theme', 'light')
    } 
    setComponentMounted(true);
},
[])

return [ theme, themeToggler, componentMounted, isOn ]
};

export default useThemeStorage;