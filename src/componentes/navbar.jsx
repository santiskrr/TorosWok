import { Link } from 'react-router';
import React from "react";
import "../index.css"
import GradientText from './GradientText.jsx';
import { TiShoppingCart } from "react-icons/ti";


export default function Navbar () {
  return (
  <nav className="relative rounded-2xl bg-black bg-[url(/public/banner2.jpg)] bg-cover bg-center p-4 flex items-center shadow-[0_0_5px_#ff0000] overflow-hidden">

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
  
<GradientText
  colors={["#40ffaa", "#40ffaa", "#ff0000", "#40ffaa", "#40ffaa"]}
  animationSpeed={5}
  showBorder={false}
  className=""
>
  Comida Tradicional Asiática
</GradientText>
     
  </div>


  <div className="relative flex flex-grow justify-center">
    <ul className="flex gap-20 spectral-sc-regular">
      <li>
        <Link to="/" className=" text-white shadow-md hover:shadow-green-600 hover:text-green-400">Inicio</Link>
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
      <li>
        <Link to="/Carrito" className="text-white "><TiShoppingCart className='h-10 w-10 shadow-md hover:shadow-violet-600 hover:text-violet-600'/></Link>
      </li>
    </ul>
  </div>
</nav>

  );
 }

