import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [pedido, setPedido] = useState([]);
  const [mostrarVistaPrevia, setMostrarVistaPrevia] = useState(false);

  useEffect(() => {
    const actualizarPedido = () => {
      const pedidoGuardado = JSON.parse(localStorage.getItem("pedido")) || [];
      setPedido(pedidoGuardado);
    };

    actualizarPedido(); // Cargar el pedido al iniciar
    
    window.addEventListener("storage", actualizarPedido); // Detectar cambios en localStorage

    return () => {
      window.removeEventListener("storage", actualizarPedido); // Limpiar el evento al desmontar
    };
  }, []);

  const eliminarPlato = (index) => {
    const nuevoPedido = pedido.filter((_, i) => i !== index);
    setPedido(nuevoPedido);
    localStorage.setItem("pedido", JSON.stringify(nuevoPedido));
  };

  const enviarPedidoWhatsApp = () => {
    if (pedido.length === 0) {
      alert("No has agregado ningún plato aún.");
      return;
    }

    const numero = "+542945656339"; // Reemplázalo con tu número de WhatsApp
    const mensaje = `Hola, quiero pedir estos platos: ${pedido.join(", ")}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");

    localStorage.removeItem("pedido");
    setPedido([]);
    setMostrarVistaPrevia(false);
  };

  return (
    <nav className="relative bg-black bg-[url('/public/banner2.jpg')] bg-cover bg-center p-4 flex items-center border-1 border-[#ff0000] shadow-[0_0_5px_#ff0000] overflow-hidden mx-auto">
      {/* GIF de partículas superpuesto */}
      <img
        src="/public/212830_small.gif"
        alt="Partículas"
        className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-70"
      />

      {/* Fondo semitransparente */}
      <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>

      {/* Contenedor del logo y texto */}
      <div className="relative flex items-center gap-4 p-2 rounded-lg">
        <img
          src="/public/logo_toroswok.svg"
          alt="Banner"
          className="h-12 w-auto object-contain"
        />
        <span className="text-white text-lg">/ Comida Tradicional Asiática</span>
      </div>

      {/* Contenedor de la lista de navegación */}
      <div className="relative flex flex-grow justify-center">
        <ul className="flex gap-20">
          <li><Link to="/" className="text-white hover:text-red-600">Inicio</Link></li>
          <li><Link to="/China" className="text-white hover:text-red-600">China</Link></li>
          <li><Link to="/Corea" className="text-white hover:text-red-600">Corea</Link></li>
          <li><Link to="/Japon" className="text-white hover:text-red-600">Japón</Link></li>
        </ul>
      </div>

      {/* Botón de pedido */}
      <button 
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition relative z-50"
        onClick={() => setMostrarVistaPrevia(true)}
      >
        📦 Hacer Pedido
      </button>

      {/* Modal de vista previa del pedido */}
      {mostrarVistaPrevia && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-black w-96">
            <h4 className="font-bold text-center text-red-500">Tu Pedido</h4>
            {pedido.length === 0 ? (
              <p className="text-gray-500 text-sm text-center">No has agregado platos aún.</p>
            ) : (
              <ul className="text-sm">
                {pedido.map((plato, index) => (
                  <li key={index} className="flex justify-between">
                    {plato} 
                    <button
                      className="text-red-500 ml-2 text-xs"
                      onClick={() => eliminarPlato(index)}
                    >
                      ❌
                    </button>
                  </li>
                ))}
              </ul>
            )}
            {/* Botones de acción */}
            <div className="flex justify-around mt-4">
              <button 
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
                onClick={() => setMostrarVistaPrevia(false)}
              >
                ❌ Cancelar
              </button>
              <button 
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                onClick={enviarPedidoWhatsApp}
              >
                ✅ Confirmar Pedido
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
