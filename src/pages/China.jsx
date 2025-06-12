import React from "react";
import { motion } from "framer-motion";

const platos = [
  {
    nombre: "Pollo Kung Pao",
    descripcion: "Pollo salteado con maní, chiles secos y salsa especial.",
    precio: "$15.000",
    imagen: "./public/KunPao.jpg",
  },
  {
    nombre: "Arroz Frito Especial",
    descripcion: "Arroz con vegetales, cerdo, camarones y huevo salteado.",
    precio: "$5.500",
    imagen: "./public/ArrozFrito.jpg",
  },
  {
    nombre: "Dumplings al vapor",
    descripcion: "Rellenos de cerdo, repollo y cebollín con salsa de soja.",
    precio: "$4.000 c/u.",
    imagen: "./public/Dumplin.jpg",
  },
];

const gifs = [
  { src: "/public/dumplin.gif", alt: "Dumpling" },
  { src: "/public/Arroz.gif", alt: "Arroz Frito" },
];

const combo = {
  titulo: "Combo del Día",
  descripcion: "6 Dumplings + Arroz Frito + Bebida",
  precio: "Solo $35.000",
};

const secciones = [
  {
    imagen: "/public/3975.png",
    titulo: "Hecho por manos expertas",
    descripcion:
      "Nuestros chefs traen técnicas auténticas de la cocina china y las fusionan con ingredientes frescos de la región para darte una experiencia inolvidable. ¡Cada plato es una obra de arte!",
  },
];


export default function China() {
  return (
    <>
      <div className="p-8 space-y-16 bg-black bg-[url('/public/FondoChina2.jpg')] bg-cover bg-center">
        {/* Título principal con fondo oscuro */}
        <div className="text-center mb-12 text-white p-10">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div
              className="relative mx-10 md:mx-30 h-40 rounded-2xl bg-cover bg-center overflow-hidden bg-black/50"
              style={{ backgroundImage: `url(public/chinese.jpg)` }}
            >
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                <h2 className="text-4xl font-bold text-red-600 Do Hyeon">
                  COMIDA TRADICIONAL CHINA
                </h2>
                <p className="text-lg shadow-xl bg-black/60 text-white mt-2">
                  你好
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Platos con fondo negro y efectos rojos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10"
        >
          {platos.map((plato, index) => (
            <div
              key={index}
              className="bg-black/80 rounded-xl p-4 shadow-md hover:scale-105 hover:shadow-red-500 transition-transform"
            >
              <img
                src={plato.imagen}
                alt={plato.nombre}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
             <h3 className="text-xl font-semibold text-red-400 text-center">{plato.nombre}</h3>
              <p className="text-sm text-gray-300 mt-1 text-center">{plato.descripcion}</p>
              <p className="mt-2 text-yellow-300 font-bold text-center">{plato.precio}</p>

            </div>
          ))}
        </motion.div>

        {/* Combo con fondo rojo en lugar de amarillo */}
        <motion.div
          className="mt-16 relative text-black rounded-xl text-center shadow-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* FONDOS GIF superpuestos */}
          <div className="absolute inset-0 z-0 flex">
            {gifs.map((gif, index) => (
              <img
                key={index}
                src={gif.src}
                alt={gif.alt}
                className="w-1/2 h-full object-cover"
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-red-600/80 backdrop-blur"></div>

          {/* CONTENIDO */}
          <div className="relative z-10 p-6">
            <h3 className="text-2xl font-bold text-white">{combo.titulo}</h3>
            <p className="mt-2 text-white">{combo.descripcion}</p>
            <p className="mt-1 font-semibold text-lg text-yellow-300">{combo.precio}</p>
          </div>
        </motion.div>

        {/* Mini video */}
        <div className="mt-12">
          <video
            src="/public/Video.mp4"
            autoPlay
            muted
            loop
            className="w-full h-64 object-cover rounded-xl shadow-lg"
          ></video>
        </div>

       <motion.div
  className="mt-16 flex flex-col md:flex-row items-center gap-8 bg-black/30 via-red-900 to-black p-6 rounded-xl border-4 border-yellow-500 shadow-yellow-500 scale-90"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 0.9 }}
  transition={{ duration: 0.7 }}
>
  {/* Imagen del chef ajustada */}
  <div className="max-w-[150px] md:max-w-[200px] h-auto">
    <img 
      src="/public/3975.png" 
      alt="Chef Lián Fuentes" 
      className="w-full h-auto object-cover rounded-xl shadow-md"
    />
  </div>

  {/* Información del chef más compacta */}
  <div className="text-left md:w-1/2">
    <h3 className="text-3xl font-bold text-yellow-400 mb-2">👨‍🍳 Chef Lián Fuentes</h3>
    <p className="text-gray-300 text-base leading-normal">
      Lián Fuentes, maestro de la cocina china-argentina, perfeccionó su técnica en Guangzhou y Buenos Aires. Su especialidad es la fusión equilibrada de sabores intensos y sutiles. Actualmente dirige Toro’s Wok, ofreciendo platos auténticos con un toque personal.
    </p>
  </div>
</motion.div>


</div>



        
    
    </>
  );
}
