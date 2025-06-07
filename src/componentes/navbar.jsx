import { Link } from 'react-router';
import React from "react";
import "../index.css"

function Navbar() {
  return (
  <nav className="relative rounded-2xl bg-black bg-[url('/public/banner2.jpg')] bg-cover bg-center p-4 flex items-center border-1 border-[#ff0000] shadow-[0_0_5px_#ff0000] overflow-hidden">

  <img
    src="/public/212830_small.gif"
    alt="Partículas"
    className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-70"
  />


  <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>


  <div className="relative flex items-center gap-4 p-2 rounded-lg trade-winds-regular">
    <img
      src="/public/logo_toroswok.svg"
      alt="Banner"
      className="h-12 w-auto object-contain"
    />
    <span className="text-white text-lg trade-winds-regular underline"> Comida Tradicional Asiática</span>
  </div>


  <div className="relative flex flex-grow justify-center">
    <ul className="flex gap-20 orbitron">
      <li>
        <Link to="/" className="text-white shadow-md hover:shadow-white hover:text-green-600">Inicio</Link>
      </li>
      <li>
        <Link to="/China" className="text-white shadow-md hover:shadow-yellow-600 hover:text-yellow-400">China</Link>
      </li>
      <li>
        <Link to="/Corea" className="text-white shadow-md hover:shadow-blue-600 hover:text-blue-400">Corea</Link>
      </li>
      <li>
        <Link to="/Japon" className="text-white shadow-md hover:shadow-red-600 hover:text-red-600">Japón</Link>
      </li>
    </ul>
  </div>
</nav>

  );
}

export default Navbar;