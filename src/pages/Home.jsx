import { motion } from 'framer-motion';
import React from 'react';

const platos = [
  {
    nombre: "Bao Buns BBQ",
    descripcion: "Panecillos al vapor rellenos de cerdo BBQ coreano.",
    precio: "$5.500 c/u",
    imagen: "/public/BaoBuns.jpg",
  },
  {
    nombre: "Udon Picante",
    descripcion: "Fideos gruesos con salsa picante y camarones salteados.",
    precio: "$7.000",
    imagen: "/public/UdonPicante.png",
  },
  {
    nombre: "Mochis Artesanales",
    descripcion: "Postre japonés relleno de pasta dulce con sabores variados.",
    precio: "$3.000 c/u",
    imagen: "/public/Mochi.jpg",
  },
  
];
const platosEstrella = [
  {
    nombre: "Ramen Tonkotsu",
    descripcion: "Nuestro ramen más vendido, con caldo cocido por 12 horas, topping de chashu y huevo marinado.",
    precio: "$18.000",
    imagen: "/public/Tonkotsu-Ramen-FT-BLOG1122-8fe6c12d609a4fd4ab246bea3aae140e.jpg",
  }
]

const agregarPlato = (plato) => {
  const pedidoActual = JSON.parse(localStorage.getItem("pedido")) || [];
  pedidoActual.push(plato);
  localStorage.setItem("pedido", JSON.stringify(pedidoActual));
};

export default function Home() { 
    
return (

  
    <div className="p-8 bg-black bg-[url('/public/fondo.jpg')] bg-center bg-cover space-y-16">
      
{/* Bienvenida */} 
<motion.div className="text-center" 
initial={{ opacity: 0, y: -50 }} 
animate={{ opacity: 1, y: 0 }} 
transition={{ duration: 0.8 }}
>
<h2 className="text-4x1 text-red-500 font-bold text-lg">Bienvenido a Toro's Wok</h2>
<p className="mt-4 text-white">Explora los sabores intensos y exóticos de Asia</p>
</motion.div>

 {platosEstrella.map((plato, index) => (
        <motion.div
          key={index}
          className="flex flex-col md:flex-row items-center gap-8"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          <img 
            src={plato.imagen} 
            alt={plato.nombre}
            className="rounded-xl shadow-lg w-full md:w-1/2 object-cover h-64"
          />
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-red-400">{plato.nombre}</h3>
            <p className="mt-2 text-white">{plato.descripcion}</p>
            <p className="mt-2 text-red-300 font-semibold text-lg">{plato.precio}</p>
          </div>
        </motion.div>
      ))}

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

 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
  <h3 className="text-2xl font-bold text-red-500 mb-6 text-center">Nuevos Platos</h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {platos.map((plato, index) => (
      <div key={index} className="bg-zinc-800 p-4 rounded-xl shadow-md text-center">
        <img src={plato.imagen} alt={plato.nombre} className="w-full h-40 object-cover rounded-md mb-2" />
        <h4 className="text-lg text-red-500 font-semibold">{plato.nombre}</h4>
        <p className="text-white text-sm">{plato.descripcion}</p>
        <p className="text-red-300 font-semibold mt-1">{plato.precio}</p>
        <button className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          onClick={() => agregarPlato(plato.nombre)}>
          Agregar al pedido
        </button>
      </div>
    ))}
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