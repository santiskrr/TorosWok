import { motion } from 'framer-motion';
import React from 'react';


export default function Home() { 
    
return (

  
    <div className="p-8 space-y-16">
{/* Bienvenida */} 
<motion.div className="text-center" 
initial={{ opacity: 0, y: -50 }} 
animate={{ opacity: 1, y: 0 }} 
transition={{ duration: 0.8 }}
>
<h2 className="text-4x1 text-red-500 font-bold">Bienvenido a Toro's Wok</h2>
<p className="mt-4">Explora los sabores intensos y exóticos de Asia</p>
</motion.div>

  {/* Plato estrella */}
  <motion.div 
    className="flex flex-col md:flex-row items-center gap-8"
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 1 }}
  >
    <img 
      src="../public/Tonkotsu-Ramen-FT-BLOG1122-8fe6c12d609a4fd4ab246bea3aae140e.jpg" 
      alt="Ramen Tonkotsu"
      className="rounded-xl shadow-lg w-full md:w-1/2 object-cover h-64"
    />
    <div className="text-center md:text-left">
      <h3 className="text-2xl font-bold text-red-400">Plato Estrella: Ramen Tonkotsu</h3>
      <p className="mt-2 text-white">Nuestro ramen más vendido, con caldo cocido por 12 horas, topping de chashu y huevo marinado.</p>
      <p className="mt-2 text-red-300 font-semibold text-lg">Precio: $18.000</p>
    </div>
  </motion.div>

  <motion.div
  className="relative bg-red-800 p-6 rounded-xl text-center shadow-md overflow-hidden"
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
>
  {/* Fondo GIF */}
  <div
    className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
    style={{ backgroundImage: "url('/public/bg.gif')" }}
  ></div>

  {/* Contenido */}
  <div className="relative z-10">
    <h3 className="text-2xl font-bold text-white">🔥 Oferta de la Semana 🔥</h3>
    <p className="mt-2 text-white">2x1 en Sushi Rolls todos los miércoles</p>
    <p className="text-sm text-red-200">¡Solo en pedidos para llevar o comer en el local!</p>
  </div>
</motion.div>

  {/* Platos nuevos */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <h3 className="text-2xl font-bold text-red-500 mb-6 text-center">Nuevos Platos</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Plato 1 */}
      <div className="bg-zinc-800 p-4 rounded-xl shadow-md text-center">
        <img src="../public/BaoBuns.jpg" alt="Bao buns" className="w-full h-40 object-cover rounded-md mb-2" />
        <h4 className="text-lg text-red-400 font-semibold">Bao Buns BBQ</h4>
        <p className="text-white text-sm">Panecillos al vapor rellenos de cerdo BBQ coreano.</p>
        <p className="text-red-300 font-semibold mt-1">$5.500 c/u</p>
      </div>

      {/* Plato 2 */}
      <div className="bg-zinc-800 p-4 rounded-xl shadow-md text-center">
        <img src="../public/UdonPicante.png" alt="Udon picante" className="w-full h-40 object-cover rounded-md mb-2" />
        <h4 className="text-lg text-red-400 font-semibold">Udon Picante</h4>
        <p className="text-white text-sm">Fideos gruesos con salsa picante y camarones salteados.</p>
        <p className="text-red-300 font-semibold mt-1">$7.000</p>
      </div>

      {/* Plato 3 */}
      <div className="bg-zinc-800 p-4 rounded-xl shadow-md text-center">
        <img src="../public/Mochi.jpg" alt="Mochis" className="w-full h-40 object-cover rounded-md mb-2" />
        <h4 className="text-lg text-red-400 font-semibold">Mochis Artesanales</h4>
        <p className="text-white text-sm">Postre japonés relleno de pasta dulce con sabores variados.</p>
        <p className="text-red-300 font-semibold mt-1">$3.000 c/u</p>
      </div>
    </div>
  </motion.div>

  {/* Pie de página */}
  <footer className="bg-zinc-800 text-white mt-16 p-6 rounded-xl">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
      <div>
        <h5 className="text-red-400 font-bold mb-2">Toro's Wok</h5>
        <p className="text-sm">Auténtica cocina asiática con ingredientes frescos y recetas tradicionales.</p>
      </div>
      <div>
        <h5 className="text-red-400 font-bold mb-2">Contacto</h5>
        <p className="text-sm"> Urquiza 583</p>
        <p className="text-sm"> +54 2945-656339</p>
        <p className="text-sm"> contacto@toros.com</p>
      </div>
      <div>
        <h5 className="text-red-400 font-bold mb-2">Síguenos</h5>
        <p className="text-sm">🔗 Instagram / Facebook / TikTok</p>
        <p className="text-sm">@toroswok</p>
      </div>
    </div>
    <div className="text-center text-xs text-zinc-400 mt-4">© 2025 Toro's Wok. Todos los derechos reservados.</div>
  </footer>
</div>
);
}