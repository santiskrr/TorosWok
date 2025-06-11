import Navbar from './componentes/navbar.jsx';
import { Routes, Route } from 'react-router';
import China from './pages/China.jsx';
import Japon from './pages/Japon.jsx';
import Corea from './pages/Corea.jsx';
import Home from './pages/Home.jsx';
import Carrito from './pages/Carrito.jsx';
import './App.css'
import React from 'react';
import Footer from './componentes/Footer.jsx';



function App() {
  return (
    <>
    <Navbar/>
    
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/Japon" element={<Japon />} />
        <Route path="/China" element={<China />} />
        <Route path="/Corea" element={<Corea />} />
        <Route path="/Carrito" element={<Carrito />} />
        
      </Routes>
      
      <Footer/>
      
        

    </>
  );
}

export default App
