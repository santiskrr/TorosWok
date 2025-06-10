import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Navbar () {
  return (
    <nav className="relative bg-black bg-[url('/public/banner2.jpg')] bg-cover bg-center p-4 flex items-center border-1 border-[#ff0000] shadow-[0_0_5px_#ff0000] overflow-hidden mx-auto">
      {/* GIF de partículas superpuesto */}
      <img
        src="/public/212830_small.gif"
        alt="Partículas"
        className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-70"
      />

      {/* Fondo semitransparente */}
      <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>

      {/* Contenedor del logo y texto */}
      <div className="relative flex items-center gap-4 p-2 rounded-lg">
        <img
          src="/public/logo_toroswok.svg"
          alt="Banner"
          className="h-12 w-auto object-contain"
        />
        <span className="text-white text-lg">/ Comida Tradicional Asiática</span>
      </div>

      {/* Contenedor de la lista de navegación */}
      <div className="relative flex flex-grow justify-center">
        <ul className="flex gap-20">
          <li><Link to="/" className="text-white hover:text-red-600">Inicio</Link></li>
          <li><Link to="/China" className="text-white hover:text-red-600">China</Link></li>
          <li><Link to="/Corea" className="text-white hover:text-red-600">Corea</Link></li>
          <li><Link to="/Japon" className="text-white hover:text-red-600">Japón</Link></li>
        </ul>
      </div>
    </nav>
  );
 }

