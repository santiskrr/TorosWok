import React from "react";
import { nuevosPlatos } from "./dataHome.js";
<<<<<<< HEAD
import Button from '../componentes/Botonpedido.jsx';
=======
import { CartContext } from "../context/CartContext.jsx";
import { useState, useContext } from "react";
>>>>>>> 104dc46e7f613d0182c99e09dc995a50d604a0d1



const ArregloHome = () => {
<<<<<<< HEAD
=======
    const { addToCart } = useContext(CartContext);
>>>>>>> 104dc46e7f613d0182c99e09dc995a50d604a0d1
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
    {nuevosPlatos.map((plato, index) => (
        <div key={index} className="bg-[#121212] rounded-xl p-4 shadow-md hover:scale-105 hover:shadow-[#6E1B14] transition-transform text-center">
<<<<<<< HEAD
            <img src={plato.imagen} alt={plato.comida} className="w-full h-40 object-cover rounded-md mb-3" />
            <h3 className="text-xl font-semibold text-[#FFD700]">{plato.comida}</h3>
            <p className="text-sm text-[#F2D8A7] mt-1">{plato.descripcion}</p>
            <p className="mt-2 text-[#C9A227] font-bold">{plato.precio}</p>
            <div className='m-5'>
                <Button  comida ={plato}/>
                </div>
=======
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
>>>>>>> 104dc46e7f613d0182c99e09dc995a50d604a0d1
        </div>
    ))}
</div>


    );
};

export default ArregloHome;