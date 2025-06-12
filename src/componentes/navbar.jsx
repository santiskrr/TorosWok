
import { Link } from "react-router";
import React from "react";
import "../index.css";
import GradientText from "./GradientText.jsx";

const Navbar = () => {
 

    return (
        <nav className="relative rounded-2xl bg-black bg-[url('/public/banner2.jpg')] bg-cover bg-center p-4 flex items-center border-1 border-[#ff0000] shadow-[0_0_5px_#ff0000]">
            {/* Logo y menú */}
            <div className="relative flex items-center gap-4 p-2 rounded-lg trade-winds-regular">
                <img src="/public/logo_toroswok.svg" alt="Banner" className="h-12 w-auto object-contain" />
                <GradientText colors={["#40ffaa", "#40ffaa", "#ff0000", "#40ffaa", "#40ffaa"]} animationSpeed={5} showBorder={false}>
                    Comida Tradicional Asiática
                </GradientText>
            </div>
            
            <div className="relative flex flex-grow justify-center">
                <ul className="flex gap-20 spectral-sc-regular">
                    <li><Link to="/" className="text-white hover:text-green-400">Inicio</Link></li>
                    <li><Link to="/China" className="text-white hover:text-yellow-400">China</Link></li>
                    <li><Link to="/Corea" className="text-white hover:text-blue-400">Corea</Link></li>
                    <li><Link to="/Japon" className="text-white hover:text-red-600">Japón</Link></li>
                </ul>
            </div>
        
            
        </nav>
    );
};


export default Navbar;
