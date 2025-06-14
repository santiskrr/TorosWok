import React from "react";
import { motion } from 'framer-motion';
import ListBebidas from "../datos/arregloBebidas.jsx";
import './bebidas.css'



function Bebidas() {
  return (

    <>
    <div className='bg-blue-200'>
      <div className="">
        <div className="text-center mb-12 text-white p-10">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div
              className="relative ml-40 mr-40 h-60 rounded-2xl bg-cover bg-center overflow-hidden"
              style={{
                backgroundImage: `url(https://th.bing.com/th/id/R.3ec05aebbde8ed6ff516d36456821cc8?rik=MrqPooaxMv4nog&pid=ImgRaw&r=0)`,
              }}
              
            >
              <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center">
                <h2 className="text-4xl font-bold text-red-600 orbitron">
                  Made in Japan
                </h2>
                <p className="text-lg text-slate-200 mt-2 orbitron">
                  Desde <span className="text-orange-500">Naruto</span> Hasta{" "}
                  <span className="text-gray-400">Hideo Kojima</span>
                </p>
              </div>
            </div>
          </motion.div>
          <ListBebidas />
        </div>

        

      </div>
    </div>
    </>
  );
}

export default Bebidas;