
import { Link } from "react-router";
import React from "react";
import "../index.css";
import GradientText from "./GradientText.jsx";
import logo from "/public/logo_toroswok.svg"



const Navbar = () => {
 

    return (
        <nav className="navegacion relative object-cover rounded-2xl bg-black bg-[url('/public/banner2.jpg')] bg-cover bg-center p-4 items-center border-1 border-[#ff0000] shadow-[0_0_5px_#ff0000]">
            {/* Logo y menú */}
             <div className="flex justify-center">
                <img src={logo}  className="max-h-[100px] h-auto max-w-[100px] w-auto" />
            </div>
            <div className="relative flex items-center gap-4 p-2 rounded-lg trade-winds-regular">
                <GradientText colors={["#40ffaa", "#40ffaa", "#ff0000", "#40ffaa", "#40ffaa"]} animationSpeed={5} showBorder={false}>
                    <h1 className="flex text-2xl ">Comida Tradicional Asiática</h1>
                </GradientText>
            </div>
            
            <div className="relative flex flex-grow justify-center">
                
                <ul className="flex gap-10 spectral-sc-regular">
                    <li><Link to="/" className="text-white shadow-md hover:shadow-green-500 hover:text-green-400">Inicio</Link></li>
                    <li><Link to="/China" className="text-white shadow-md hover:shadow-yellow-400 hover:text-yellow-400">China</Link></li>
                    <li><Link to="/Corea" className="text-white shadow-md hover:shadow-blue-400 hover:text-blue-400">Corea</Link></li>
                    <li><Link to="/Japon" className="text-white shadow-md hover:shadow-red-500 hover:text-red-600">Japón</Link></li>
                    
                </ul>
                
            </div>
           
            
        </nav>
    );
};


export default Navbar;
