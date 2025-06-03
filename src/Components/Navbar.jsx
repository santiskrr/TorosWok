import { Link } from 'react-router-dom';
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-zinc-800 p-4 shadow-md flex justify-between items-center">
      <h1 className="text-red-500 text-2xl font-bold">Toro's Wok </h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-red-400">Inicio</Link>
        <Link to="/pagina2" className="hover:text-red-400">China</Link>
        <Link to="/pagina3" className="hover:text-red-400">Corea</Link>
        <Link to="/pagina4" className="hover:text-red-400">Japón</Link>
      </div>
    </nav>
  );
}