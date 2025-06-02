import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-zinc-800 p-4 shadow-md flex justify-between items-center">
      <h1 className="text-red-500 text-2xl font-bold">Toro's wOK </h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-red-400">Inicio</Link>
        <Link to="/pagina2" className="hover:text-red-400">Página2</Link>
        <Link to="/pagina3" className="hover:text-red-400">Página3</Link>
        <Link to="/pagina4" className="hover:text-red-400">Página4</Link>
      </div>
    </nav>
  );
}