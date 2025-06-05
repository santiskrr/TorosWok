import React from "react";
import './Corea.css';
import { motion } from 'framer-motion';
import List from "../datos/arregloCorea.jsx";

function Corea() {
  return (
    <div className="">
            <div className='bg-red-400'>
            <div className="text-center mb-12 text-white p-10">
              {/* Introducción */}
              <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <h2 className="text-red-600">Made in Japon</h2>
                <p className="text-slate-600 font-(family-:Orbitron)"><p className="text-orange-600">Desde Naruto<p className="text-gray-500">hasta</p></p>Hideo Kojima</p>
              </motion.div>
    
              {/* Platos destacados */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10"
              >
              </motion.div>
        <List />
    
    
          </div>   {/* Mini video */}
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
                <img src="" className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-md" />
                <div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">Hecho por manos expertas</h3>
                  <p className="text-zinc-300">Nuestros chefs traen técnicas auténticas de la cocina china y las fusionan con ingredientes frescos de la región para darte una experiencia inolvidable. ¡Cada plato es una obra de arte!</p>
                </div>
              </motion.div>
    
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
        </div>
        );
    }
    

export default Corea;