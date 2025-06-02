import { Link } from 'react-router';
import React from "react";

function Navbar() {
  return (
    <nav className="rounded-2xl bg-white-500 p-4 flex items-center justify-between border-2 border-[#00f7ff] shadow-[0_0_10px_#00f7ff]">
      <div className="flex items-center">
        <h1 className="text-2xl text-white">Navegacion</h1>
      </div>
      <ul className="flex gap-10">
        <li>
          <Link to="/" className="text-white hover:text-red-600">Inicio</Link>
        </li>
        <li>
          <Link to="/China" className="text-white hover:text-red-600">China</Link>
        </li>
        <li>
          <Link to="/Corea" className="text-white hover:text-red-600">Corea</Link>
        </li>
         <li>
          <Link to="/Japon" className="text-white hover:text-red-600">Japón</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;