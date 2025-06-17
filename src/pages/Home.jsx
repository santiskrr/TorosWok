import { motion } from 'framer-motion';
import React from 'react';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";



const Inicio = () => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="p-8 space-y-16 bg-black bg-[url('/public/Fondo.jpg')] bg-cover bg-center bg-fixed mx-w-screen">
           <motion.div
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
>
    <div className="relative mx-6 md:mx-20 h-60 rounded-2xl bg-cover bg-center shadow-2xl overflow-hidden flex flex-col items-center text-center gap-3">
        
        {/* Mensaje superior */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-red-600">Bienvenidos a</h1>

        {/* Logotipo protagonista con animación de entrada */}
        <motion.img 
            src="/public/logotipotorored.png" 
            alt="Toro's Wok" 
            className="h-24 md:h-28 w-auto object-contain"
            initial={{ scale: 3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Texto debajo del logotipo */}
        <p className="text-lg md:text-xl text-white px-6 py-2 rounded-lg shadow-md tracking-wide">
            Explora los sabores intensos y exóticos de Asia
        </p>

    </div>
</motion.div>



            <motion.div 
    className="flex flex-col md:flex-row items-center gap-8 bg-black/80 rounded-xl p-4 shadow-md hover:scale-105 hover:shadow-red-500 transition-transform"
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
        <h3 className="text-2xl bg-black/40 font-bold text-red-600">Plato Estrella: Ramen Tonkotsu</h3>
        <p className="mt-2 text-white">Nuestro ramen más vendido, con caldo cocido por 12 horas, topping de chashu y huevo marinado.</p>
        <p className="mt-2 text-red-400 font-semibold text-lg">Precio: $18.000</p>
        <button 
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            onClick={() => addToCart({ name: "Ramen Tonkotsu", price: "$18.000" })}
        >
            Hacer pedido
        </button>
    </div>
</motion.div>


            {/* Oferta de la semana */}
            <motion.div
                className="relative bg-red-800 p-6 rounded-xl text-center shadow-md overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                <div className="absolute inset-0 z-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('/public/bg.gif')" }}></div>
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white">🔥 Oferta de la Semana 🔥</h3>
                    <p className="mt-2 text-white">2x1 en Sushi Rolls todos los miércoles</p>
                    <p className="text-sm text-red-200">¡Solo en pedidos para llevar o comer en el local!</p>
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
    <h3 className="text-2xl font-bold text-red-600 mb-6 text-center bg-black/40">Nuevos Platos</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Bao Buns */}
        <div className="bg-zinc-800 p-4 rounded-xl shadow-md text-center hover:scale-105 hover:shadow-red-500 transition-transform">
            <img src="../public/BaoBuns.jpg" alt="Bao buns" className="w-full h-40 object-cover rounded-md mb-2" />
            <h4 className="text-lg text-red-600 font-semibold">Bao Buns BBQ</h4>
            <p className="text-white text-sm">Panecillos al vapor rellenos de cerdo BBQ coreano.</p>
            <p className="text-red-400 font-semibold mt-1">$5.500 c/u</p>
            <button 
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                onClick={() => addToCart({ name: "Bao Buns BBQ", price: "$5.500 c/u" })}
            >
                Hacer pedido
            </button>
        </div>

        {/* Udon Picante */}
        <div className="bg-zinc-800 p-4 rounded-xl shadow-md text-center hover:scale-105 hover:shadow-red-500 transition-transform">
            <img src="../public/UdonPicante.png" alt="Udon picante" className="w-full h-40 object-cover rounded-md mb-2" />
            <h4 className="text-lg text-red-600 font-semibold">Udon Picante</h4>
            <p className="text-white text-sm">Fideos gruesos con salsa picante y camarones salteados.</p>
            <p className="text-red-400 font-semibold mt-1">$7.000</p>
            <button 
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                onClick={() => addToCart({ name: "Udon Picante", price: "$7.000" })}
            >
                Hacer pedido
            </button>
        </div>

        {/* Mochis */}
        <div className="bg-zinc-800 p-4 rounded-xl shadow-md text-center hover:scale-105 hover:shadow-red-500 transition-transform">
            <img src="../public/Mochi.jpg" alt="Mochis" className="w-full h-40 object-cover rounded-md mb-2" />
            <h4 className="text-lg text-red-600 font-semibold">Mochis Artesanales</h4>
            <p className="text-white text-sm">Postre japonés relleno de pasta dulce con sabores variados.</p>
            <p className="text-red-400 font-semibold mt-1">$3.000 c/u</p>
            <button 
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                onClick={() => addToCart({ name: "Mochis Artesanales", price: "$3.000 c/u" })}
            >
                Hacer pedido
            </button>
        </div>
    </div>
</motion.div>

        </div>
    );
};

export default Inicio;
