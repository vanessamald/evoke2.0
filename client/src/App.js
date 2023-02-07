import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Privacy from './components/Privacy';
import 'bootstrap/dist/css/bootstrap.min.css';
import useThemeStorage from './components/themeStorage';

function App() {
  const [data, setData] = React.useState(null);
  const [theme, toggleTheme, componentMounted] = useThemeStorage();

  console.log(theme);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  
  if (!componentMounted) {
    return <div/>
  }
  
  
  
  return (
    <div className={theme}>
      <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/privacypolicy' element ={<Privacy/>}></Route>
        </Routes> 
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
