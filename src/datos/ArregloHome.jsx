import React from "react";
import { nuevosPlatos } from "./dataHome.js";
import { CartContext } from "../context/CartContext.jsx";
import { useState, useContext } from "react";



const ArregloHome = () => {
    const { addToCart } = useContext(CartContext);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
    {nuevosPlatos.map((plato, index) => (
        <div key={index} className="bg-[#121212] rounded-xl p-4 shadow-md hover:scale-105 hover:shadow-[#6E1B14] transition-transform text-center">
            <img src={plato.imagen} alt={plato.nombre} className="w-full h-40 object-cover rounded-md mb-3" />
            <h3 className="text-xl font-semibold text-[#FFD700]">{plato.nombre}</h3>
            <p className="text-sm text-[#F2D8A7] mt-1">{plato.descripcion}</p>
            <p className="mt-2 text-[#C9A227] font-bold">{plato.precio}</p>
            <button 
                className="mt-4 px-4 py-2 bg-[#A11916] text-white rounded-lg hover:bg-[#B96F1C] transition"
                onClick={() => addToCart({ name: plato.nombre, price: plato.precio })}
            >
                Hacer pedido
            </button>
        </div>
    ))}
</div>


    );
};

export default ArregloHome;