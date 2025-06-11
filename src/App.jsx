import Navbar from './componentes/navbar.jsx';
import { Routes, Route } from 'react-router';
import China from './pages/China.jsx';
import Japon from './pages/Japon.jsx';
import Corea from './pages/Corea.jsx';
import Home from './pages/Home.jsx';
import './App.css'
import React from 'react';
import Footer from './componentes/Footer.jsx';
import { CartProvider } from "./context/CartContext";


function App() {
  return (
    <>
    <CartProvider>
    <Navbar/>
    <div className=''>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/Japon" element={<Japon />} />
        <Route path="/China" element={<China />} />
        <Route path="/Corea" element={<Corea />} />
      </Routes>
      <Footer/>
      </div>
    </CartProvider>    
 
    </>
  );
}

export default App
