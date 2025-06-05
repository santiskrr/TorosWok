import { platos } from './data.js';
import React from 'react';

export default function List() {
  const listItems = platos.map(plato =>
    
    <div className='flex justify-center'>
        <div className="plato p-10 h-80  bg-zinc-800 rounded-xl p-4 hover:shadow-black ">
              <img className='imagen rounded-xl ' src={plato.imagen} />
              <h3 className="text-xl font-semibold">{plato.comida} </h3>
              <p className="">{plato.descripcion} </p>
              <p className="mt-2 text-green-500 font-bold">{plato.precio}</p>
          </div>
    </div>
  );
  return (
    <article>
      <ul className='flex shadow-md shadow-black grid grid-cols-3 md:grid-cols-3 gap-8 p-10'>{listItems}</ul>
    </article>
  );
}
