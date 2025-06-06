import React from "react";
import './Japon.css';
import { motion } from 'framer-motion';
import List from "../datos/arreglo.jsx";



function Japon() {
  

  return (
    
        <div className='bg-red-400'>
      <div className="">
        <div className="text-center f mb-12 text-white p-10">
          <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
       
              <div className="ml-40 mr-40 h-60 p-10 bg-no-repeat bg-cover rounded-lg bg-center bg-[url(https://th.bing.com/th/id/R.3ec05aebbde8ed6ff516d36456821cc8?rik=MrqPooaxMv4nog&pid=ImgRaw&r=0)]">
            <h2 className="text-red-600">Made in Japon</h2>
            <p className="text-slate-100 font-orbitron"><p className="text-orange-600">Desde Naruto<p className="text-gray-500">hasta</p></p>Hideo Kojima</p>
            
            </div>
            
          </motion.div>
    <List />
      </div>  
       
      {/* Mini video */}
          <div className="m-20">
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
            <img src="./public/4117.png" className=" m-5 w-full md:w-1/2 h-114 object-cover rounded-xl shadow-md" />
            <div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Hecho por manos expertas</h3>
              <p className="text-zinc-300">Nuestros chefs traen técnicas auténticas de la cocina china y las fusionan con ingredientes frescos de la región para darte una experiencia inolvidable. ¡Cada plato es una obra de arte!</p>
            </div>
          </motion.div>
        </div>
    </div>  );
}

export default Japon;