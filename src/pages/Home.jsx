import { motion } from 'framer-motion';
import React from 'react';
import ArregloHome from "../datos/ArregloHome.jsx"
import ArregloComboInicio from '../datos/ArregloComboInicio.jsx';


const Inicio = () => {
    

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
    className="flex flex-col md:flex-row items-center gap-8 bg-[#121212] rounded-xl p-4 shadow-md hover:scale-105 hover:shadow-[#6E1B14] transition-transform"
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
        <h3 className="text-2xl font-bold text-[#FFD700]">Plato Estrella: Ramen Tonkotsu</h3>
        <p className="mt-2 text-[#F2D8A7]">Nuestro ramen más vendido, con caldo cocido por 12 horas, topping de chashu y huevo marinado.</p>
        <p className="mt-2 text-[#C9A227] font-semibold text-lg">Precio: $18.000</p>
        <button 
            className="mt-4 px-4 py-2 bg-[#A11916] text-white rounded-lg hover:bg-[#B96F1C] transition"
            onClick={() => addToCart({ name: "Ramen Tonkotsu", price: "$18.000" })}
        >
            Hacer pedido
        </button>
    </div>
</motion.div>


 <div className="p-8 max-w-screen">
    <ArregloComboInicio />
</div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
    
    <div className="p-8 max-w-screen">
    
               
                 <motion.h2 
            className="text-2xl font-bold text-[#C9A227] text-center bg-[#121212] p-3 rounded-md shadow-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            Platos Nuevos
        </motion.h2>
    <ArregloHome />
</div>

</motion.div>

        </div>
    );
};

export default Inicio;
