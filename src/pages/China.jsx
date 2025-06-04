import React from "react";
import { motion } from 'framer-motion';

const platos = [
  {
    nombre: "Pollo Kung Pao",
    descripcion: "Pollo salteado con maní, chiles secos y salsa especial.",
    precio: "$10.90",
    imagen: "./public/KunPao.jpg",
  },
  {
    nombre: "Arroz Frito Especial",
    descripcion: "Arroz con vegetales, cerdo, camarones y huevo salteado.",
    precio: "$8.50",
    imagen: "./public/ArrozFrito.jpg",
  },
  {
    nombre: "Dumplings al vapor",
    descripcion: "Rellenos de cerdo, repollo y cebollín con salsa de soja.",
    precio: "$6.80",
    imagen: "./Dumplin.jpg",
  },
];
const gifs = [
  { src: "/public/dumplin.gif", alt: "Dumpling" },
  { src: "/public/Arroz.gif", alt: "Arroz Frito" }
];

const combo = {
  titulo: "🎁 Combo del Día",
  descripcion: "6 Dumplings + Arroz Frito + Bebida",
  precio: "Solo $",
};
const secciones = [
  {
    imagen: "/public/3975.png",
    titulo: "Hecho por manos expertas",
    descripcion: "Nuestros chefs traen técnicas auténticas de la cocina china y las fusionan con ingredientes frescos de la región para darte una experiencia inolvidable. ¡Cada plato es una obra de arte!"
  }
];

export default function China() {

  return (
    <>
    <div className='bg-black'>
    <div className="text-center mb-12 text-white p-10">
      {/* Introducción */}
      <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2>Cocina China Tradicional</h2>
        <p>Explora los sabores auténticos y los platos más representativos de la gastronomía china.</p>
      </motion.div>

      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10"
    >
      {platos.map((plato, index) => (
        <div
          key={index}
          className="bg-zinc-800 rounded-xl p-4 shadow-md hover:scale-105 hover:shadow-yellow-400 transition-transform"
        >
          <img src={plato.imagen} alt={plato.nombre} className="w-full h-40 object-cover rounded-md mb-3" />
          <h3 className="text-xl font-semibold text-yellow-300">{plato.nombre}</h3>
          <p className="text-sm text-zinc-300 mt-1">{plato.descripcion}</p>
          <p className="mt-2 text-yellow-200 font-bold">{plato.precio}</p>
        </div>
      ))}
    </motion.div>

      <motion.div
      className="mt-16 relative text-black rounded-xl text-center shadow-lg overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* FONDOS GIF superpuestos */}
      <div className="absolute inset-0 z-0 flex">
        {gifs.map((gif, index) => (
          <img key={index} src={gif.src} alt={gif.alt} className="w-1/2 h-full object-cover" />
        ))}
      </div>
      <div className="absolute inset-0 bg-yellow-600/80 backdrop-blur"></div>

      {/* CONTENIDO */}
      <div className="relative z-10 p-6">
        <h3 className="text-2xl font-bold">{combo.titulo}</h3>
        <p className="mt-2">{combo.descripcion}</p>
        <p className="mt-1 font-semibold text-lg">{combo.precio}</p>
      </div>
    </motion.div>

   </div>   {/* Mini video */}
      <div className="mt-12">
        <video
          src="/public/Video.mp4"
          autoPlay
          muted
          loop
          className="w-full h-64 object-cover rounded-xl shadow-lg"
        ></video>
      </div>

      <div className="text-center mb-12 text-white p-10">
      {/* Sección extra con imagen y descripción */}
      {secciones.map((seccion, index) => (
        <motion.div
          key={index}
          className="mt-20 flex flex-col md:flex-row items-center gap-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img src={seccion.imagen} alt={seccion.titulo} className="w-full md:w-1/2 h-100 object-cover rounded-xl shadow-md" />
          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">{seccion.titulo}</h3>
            <p className="text-zinc-300">{seccion.descripcion}</p>
          </div>
        </motion.div>
      ))}
    </div>
    </div>
    </>
  );
}
