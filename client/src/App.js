import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Privacy from './components/Privacy';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  
  return (
    <div>
      <main>
        
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/privacypolicy' element ={<Privacy/>}></Route>
        </Routes> 
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
