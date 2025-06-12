import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import React from "react";
import "../index.css";
import GradientText from "./GradientText.jsx";

const Navbar = () => {
    const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
    const [showCart, setShowCart] = useState(false);

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

            {/* Ícono flotante del carrito */}
            <div className="fixed bottom-4 right-4 z-50">
                <button
                    className="bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition flex items-center"
                    onClick={() => setShowCart(!showCart)}
                >
                    🛒
                    <span className="ml-2 bg-white text-red-600 text-xs font-bold rounded-full px-2">
                        {cart.length}
                    </span>
                </button>

                {/* 🛍 Carrito flotante */}
                {showCart && (
                    <div className="absolute bottom-12 right-0 bg-black p-4 rounded-xl shadow-lg w-72 z-50">
                        <h3 className="text-lg font-bold text-white">Tu pedido 🛒</h3>
                        {cart.length === 0 ? (
                            <p className="text-gray-400">El carrito está vacío.</p>
                        ) : (
                            <ul className="text-white">
                                {cart.map((item) => (
                                    <li key={item.name} className="flex justify-between items-center py-1">
                                        <span>{item.name} - {item.price} x {item.quantity}</span>
                                        <div>
                                            <button className="px-2 bg-red-600 text-white rounded hover:bg-red-400 mx-1" onClick={() => increaseQuantity(item.name)}>+</button>
                                            <button className="px-2 bg-red-600 text-white rounded hover:bg-red-700" onClick={() => decreaseQuantity(item.name)}>-</button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <Link to="/Carrito" className="mt-2 block text-center px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-red-700 transition">
                            Ir al carrito
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
