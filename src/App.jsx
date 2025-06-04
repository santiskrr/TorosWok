import Navbar from './componentes/navbar.jsx';
import { Routes, Route } from 'react-router';
import China from './pages/China.jsx';
import Japon from './pages/Japon.jsx';
import Corea from './pages/Corea.jsx';
import Home from './pages/Home.jsx';
import './App.css'
import React from 'react';

function App() {
  return (
    <>
    <Navbar/>
    <div className=''>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/Japon" element={<Japon />} />
        <Route path="/China" element={<China />} />
        <Route path="/Corea" element={<Corea />} />
      </Routes>
      </div>
    </>
  );
}

export default App
