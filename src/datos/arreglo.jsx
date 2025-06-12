import { platos } from './data.js';
import React from 'react';
import { CartContext } from "../context/CartContext";
import { useState, useContext } from "react";

export default function List() {
        
        const { addToCart,cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  
  return (
    <article>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
        {  platos.map(plato => (
          <div key={plato.id} className="flex justify-center">
            <div className="plato p-4 rounded-xl shadow-md hover:shadow-blue-400 hover:scale-105 transition-transform duration-300">
              <img
                className="imagen rounded-xl w-full h-40 object-cover mb-3"
                src={plato.imagen}
                alt={plato.comida}
              />
              <h3 className="text-xl font-semibold text-white orbitron">{plato.comida}</h3>
              <p className="text-sm text-zinc-300 mt-1 orbitron line-clamp-3">{plato.descripcion}</p>
              <p className="mt-2 text-green-500 orbitron">{plato.precio}
                              <button 
                                  className="m-4 px-4 py-2 bg-green-400 text-black rounded-lg hover:bg-violet-700 transition hover: "
                                  onClick={() => addToCart({ name: plato.comida, price: plato.precio})}
                              >
                                  Hacer pedido
                              </button></p>
            </div>
          </div>
        ))}
      </ul>
    </article>
  );
}