import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import Privacy from './components/Privacy';
import Numbers from './components/Numbers';
import 'bootstrap/dist/css/bootstrap.min.css';
import useThemeStorage from './components/themeStorage';
import Contact from './components/Contact';

function App() {
  const [data, setData] = React.useState(null);
  const [theme, toggleTheme, componentMounted] = useThemeStorage();

  if (!componentMounted) {
    return <div/>
  }
  
  return (
    <div className={theme}>
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
