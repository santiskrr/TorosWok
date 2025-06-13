import React from 'react';
import { bebidas } from './dataBebidas.js';
import { useContext, useState } from "react";
import { CartContext } from '../context/CartContext.jsx';

export default function ListBebidas() {
  const { addToCart } = useContext(CartContext);

  const listItems = bebidas.map(plato => (
    <div key={plato.id} className="flex justify-center">
      <div className="platoBebidas p-4 rounded-xl shadow-md hover:shadow-green-400 hover:scale-105 transition-transform duration-300">
        <img
          className=" rounded-xl w-full h-60 object-cover mb-3"
          src={plato.imagen}
          alt={plato.comida}
        />
        <h3 className="text-xl font-semibold text-white">{plato.comida}</h3>
        <p className="text-sm mt-1 Do Hyeon line-clamp-3">{plato.descripcion}</p>
        <p className="mt-2 text-green-500 font-bold">{plato.precio}<button 
                                  className="m-4 px-4 py-2 bg-green-400 text-black rounded-lg hover:bg-red-700 transition"
                                  onClick={() => addToCart({ name: plato.comida, price: plato.precio})}
                              >
                                  Hacer pedido
                              </button></p>
      </div>
    </div>
  ));

  return (
    <article>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
        {listItems}
      </ul>
    </article>
  );
}