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
import BotonCart from './componentes/BotonCart.jsx';
import Carrito from './pages/Carrito.jsx';
import Bebidas from './pages/bebidas.jsx';
import Devs from './pages/Devs.jsx';


function App() {
  return (
    <>
    
    <CartProvider>
    <Navbar/>
    <BotonCart />
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/Japon" element={<Japon />} />
        <Route path="/China" element={<China />} />
        <Route path="/Corea" element={<Corea />} />
        <Route path="/Carrito" element={<Carrito />} />
        <Route path="/Bebidas" element={<Bebidas />} />
        <Route path="/Devs" element={<Devs />} />
      </Routes>
      <Footer/>
    </CartProvider>    
 
    </>
  );
}

export default App
