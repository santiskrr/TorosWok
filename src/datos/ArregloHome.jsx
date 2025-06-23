import React, { useContext } from "react";
import { motion } from "framer-motion";
import { nuevosPlatos } from "./dataHome.js";
import { CartContext } from "../context/CartContext.jsx";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.35
    }
  }
};


const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8
    }
  }
};


const ArregloHome = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {nuevosPlatos.map((plato, index) => (
        <motion.div
          key={index}
          variants={item}
          className="bg-[#121212] rounded-xl p-4 shadow-md hover:scale-105 hover:shadow-[#6E1B14] transition-transform text-center"
        >
          <img
            src={plato.imagen}
            alt={plato.nombre}
            className="w-full h-40 object-cover rounded-md mb-3"
          />
          <h3 className="text-xl font-semibold text-[#FFD700]">
            {plato.nombre}
          </h3>
          <p className="text-sm text-[#F2D8A7] mt-1">{plato.descripcion}</p>
          <p className="mt-2 text-[#C9A227] font-bold">{plato.precio}</p>
          <button
            className="mt-4 px-4 py-2 bg-[#A11916] text-white rounded-lg hover:bg-[#B96F1C] transition"
            onClick={() =>
              addToCart({ name: plato.nombre, price: plato.precio })
            }
          >
            Hacer pedido
          </button>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ArregloHome;
