import React from 'react';
import { platosCorea } from './dataCorea.js';
import { IoCartOutline } from "react-icons/io5";


export default function Listcorea() {
  const listItems = platosCorea.map(plato => (
    <div key={plato.id} className="flex justify-center">
      <div className="platoCorea p-4 rounded-xl shadow-md hover:shadow-green-400 hover:scale-105 transition-transform duration-300">
        <img
          className="imagen rounded-xl w-full h-40 object-cover mb-3"
          src={plato.imagen}
          alt={plato.comida}
        />
        <h3 className="text-xl font-semibold text-white Do Hyeon">{plato.comida}</h3>
        <p className="text-sm mt-1 Do Hyeon line-clamp-3">{plato.descripcion}</p>
        <p className="mt-2 text-green-500 font-bold Do Hyeon">{plato.precio}<IoCartOutline className='h-7 w-7'/></p>
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