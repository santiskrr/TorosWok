import React, { useContext } from "react";
import { platosEstrella } from "./dataPlatoEstrella";
import { CartContext } from "../context/CartContext.jsx";
import { motion } from "framer-motion";

const ArregloPlatoEstrella = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="p-2 max-w-screen">
      {platosEstrella.map((plato, index) => (
        <div
          key={index}
          className="cursor-pointer"
          onClick={() =>
            addToCart({ name: plato.nombre, price: plato.precio })
          }
        >
          <motion.div
            className="mt-16 flex flex-col md:flex-row items-center gap-8 bg-[#121212] rounded-xl p-4 shadow-md hover:scale-105 hover:shadow-[#6E1B14] transition-transform"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
          >
            <img
              src={plato.imagen}
              alt={plato.nombre}
              className="rounded-xl shadow-lg w-full md:w-1/2 object-cover h-64"
            />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-[#FFD700]">
                Plato Estrella: {plato.nombre}
              </h3>
              <p className="mt-2 text-[#F2D8A7]">{plato.descripcion}</p>
              <p className="mt-2 text-[#C9A227] font-semibold text-lg">
                Precio: {plato.precio}
              </p>
              <button
                className="mt-4 px-4 py-2 bg-[#A11916] text-white rounded-lg hover:bg-[#B96F1C] transition"
              >
                Hacer pedido
              </button>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default ArregloPlatoEstrella;
