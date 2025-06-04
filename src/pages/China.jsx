import React from "react";
import { motion } from 'framer-motion';


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

      {/* Platos destacados */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10"
      >
        {/* Plato 1 */}
        <div className="bg-zinc-800 rounded-xl p-4 shadow-md hover:scale-105 hover:shadow-yellow-400 transition-transform">
          <img src="./public/KunPao.jpg" alt="Pollo Kung Pao" className="w-full h-40 object-cover rounded-md mb-3" />
          <h3 className="text-xl font-semibold text-yellow-300">Pollo Kung Pao</h3>
          <p className="text-sm text-zinc-300 mt-1">Pollo salteado con maní, chiles secos y salsa especial.</p>
          <p className="mt-2 text-yellow-200 font-bold">$10.90</p>
        </div>

        {/* Plato 2 */}
        <div className="bg-zinc-800 rounded-xl p-4 shadow-md hover:scale-105 hover:shadow-yellow-400 transition-transform">
          <img src="./public/ArrozFrito.jpg" alt="Arroz frito especial" className="w-full h-40 object-cover rounded-md mb-3" />
          <h3 className="text-xl font-semibold text-yellow-300">Arroz Frito Especial</h3>
          <p className="text-sm text-zinc-300 mt-1">Arroz con vegetales, cerdo, camarones y huevo salteado.</p>
          <p className="mt-2 text-yellow-200 font-bold">$8.50</p>
        </div>

        {/* Plato 3 */}
        <div className="bg-zinc-800 rounded-xl p-4 shadow-md hover:scale-105 hover:shadow-yellow-400 transition-transform">
          <img src="./Dumplin.jpg" alt="Dumplings" className="w-full h-40 object-cover rounded-md mb-3" />
          <h3 className="text-xl font-semibold text-yellow-300">Dumplings al vapor</h3>
          <p className="text-sm text-zinc-300 mt-1">Rellenos de cerdo, repollo y cebollin con salsa de soja.</p>
          <p className="mt-2 text-yellow-200 font-bold">$6.80</p>
        </div>
      </motion.div>

     <motion.div
  className="mt-16 relative text-black rounded-xl text-center shadow-lg overflow-hidden"
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
>
  {/* FONDOS GIF superpuestos */}
  <div className="absolute inset-0 z-0">
    <div className="w-full h-full flex">
      <img
        src="/public/dumplin.gif"
        alt="Dumpling"
        className="w-1/2 h-full object-cover"
      />
      <img
        src="/public/Arroz.gif"
        alt="Arroz Frito"
        className="w-1/2 h-full object-cover"
      />
      
    </div>
    {/* Overlay para mejorar legibilidad */}
    <div className="absolute inset-0 bg-yellow-600/80 backdrop-blur-sm"></div>
  </div>

  {/* CONTENIDO */}
  <div className="relative z-10 p-6">
    <h3 className="text-2xl font-bold">🎁 Combo del Día</h3>
    <p className="mt-2">6 Dumplings + Arroz Frito + Bebida</p>
    <p className="mt-1 font-semibold text-lg">Solo $</p>
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

      {/* Sección extra con imagen y descripción */}
      <motion.div
        className="mt-20 flex flex-col md:flex-row items-center gap-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img src="https://images.unsplash.com/photo-1609645882325-63d88f2c1f3e" alt="Chef chino" className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-md" />
        <div>
          <h3 className="text-2xl font-bold text-yellow-400 mb-2">Hecho por manos expertas</h3>
          <p className="text-zinc-300">Nuestros chefs traen técnicas auténticas de la cocina china y las fusionan con ingredientes frescos de la región para darte una experiencia inolvidable. ¡Cada plato es una obra de arte!</p>
        </div>
      </motion.div>
    </div>
    </>
  );
}
