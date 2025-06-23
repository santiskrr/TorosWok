import { Link } from "react-router";
import React from "react";
import "../index.css";
import GradientText from "./GradientText.jsx";
import logo from "/public/logo_toroswok.svg";
import gifDecorativo from "../assets/212830_small.gif"; // Asegurate de que el gif esté en la ruta correcta

const Navbar = () => {
  return (
    <nav className="navegacion relative object-cover rounded-2xl bg-black bg-[url('/public/banner2.jpg')] bg-cover bg-center p-4 items-center shadow-[0_0_5px_#ff0000] overflow-hidden">

      {/* GIF decorativo superpuesto */}
      <img
        src={gifDecorativo}
        alt="Decoración animada"
        className="absolute top-0 left-0 w-full h-full object-cover mix-blend-screen pointer-events-none z-0"
      />

      {/* Contenido de la navbar */}
      <div className="relative z-10 flex justify-center">
        <Link to="/">
          <img src={logo} className="max-h-[100px] h-auto max-w-[100px] w-auto" />
        </Link>
      </div>

      <div className="relative z-10 flex items-center gap-4 p-2 rounded-lg trade-winds-regular">
        <GradientText
          colors={["#40ffaa", "#40ffaa", "#ff0000", "#40ffaa", "#40ffaa"]}
          animationSpeed={5}
          showBorder={false}
        >
          <Link to="/">
            <h1 className="flex text-2xl">Comida Tradicional Asiática</h1>
          </Link>
        </GradientText>
      </div>

      <div className="relative z-10 flex flex-grow justify-center">
        <ul className="flex gap-7 spectral-sc-regular">
          <li>
            <Link to="/China" className="text-white shadow-md hover:shadow-yellow-400 hover:text-yellow-400">
              China
            </Link>
          </li>
          <li>
            <Link to="/Corea" className="text-white shadow-md hover:shadow-blue-400 hover:text-blue-400">
              Corea
            </Link>
          </li>
          <li>
            <Link to="/Japon" className="text-white shadow-md hover:shadow-red-400 hover:text-red-400">
              Japón
            </Link>
          </li>
          <li>
            <Link to="/Bebidas" className="text-white shadow-md hover:shadow-blue-200 hover:text-blue-200">
              Bebidas
            </Link>
          </li>
          <li>
            <Link to="/Devs" className="text-white shadow-md hover:shadow-blue-200 hover:text-blue-200">
              Devs
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
