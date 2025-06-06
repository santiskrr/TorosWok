import { platos } from './data.js';
import React from 'react';
import { platosCorea } from './dataCorea.js';

export default function Listcorea() {
  const listItems = platosCorea.map(plato =>
    
    <div className='flex justify-center'>
        <div className="plato p-10 h-80 rounded-2xl ">
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
