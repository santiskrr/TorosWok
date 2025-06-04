import { platos } from './data.js';
import { getImageUrl } from './utils.js';
import React from 'react';

export default function List() {
  const listItems = platos.map(plato =>
    <div className="plato bg-zinc-800 rounded-xl p-4 shadow-md hover:scale-105 hover:shadow-yellow-400 transition-transform">
          <img src={plato.imagen} />
          <h3 className="text-xl font-semibold text-white">{plato.comida} </h3>
          <p className="text-sm text-zinc-300 mt-1">{plato.descripcion} </p>
          <p className="mt-2 text-green-500 font-bold">{plato.precio}</p>
      </div>
  );
  return (
    <article>
      <ul>{listItems}</ul>
    </article>
  );
}
