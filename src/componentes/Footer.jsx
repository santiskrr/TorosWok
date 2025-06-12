 import React from "react"
 import { SiInstagram } from "react-icons/si";
import { IoLogoFacebook } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";


 export default function Footer(){

    return(<footer className="bg-zinc-800 text-white mt-1 p-6 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <h5 className="text-red-600 font-bold mb-2">Toro's Wok</h5>
            <p className="text-sm">Auténtica cocina asiática con ingredientes frescos y recetas tradicionales.</p>
          </div>
          <div>
            <h5 className="text-red-600 font-bold mb-2">Contacto</h5>
            <p className="text-sm"> Urquiza 583</p>
            <p className="text-sm"> +54 2945-656339</p>
            <p className="text-sm"> contacto@toros.com</p>
          </div>
          <div>
            <h5 className="text-red-600 font-bold mb-2">Síguenos</h5>
            <p className="text-sm">
            

            <div className="relative flex">
            <a href="https://www.instagram.com/toroswok.sushi/p/ChX2jerprcS/" target="_blank" rel="noopener noreferrer"><SiInstagram className="h-15 w-15 p-2 rounded-2xl bg-gradient-to-t from-[#fcba03] via-[#f21167] to-[#870af5] m-5" /></a>
            
             
            <a href="https://www.facebook.com/toroswok/" target="_blank" rel="noopener noreferrer"><IoLogoFacebook  className="h-20 w-20 text-blue-500 bg-blue mt-2"/></a>
             
            
             <a href="https://www.instagram.com/toroswok.sushi/p/ChX2jerprcS/" target="_blank" rel="noopener noreferrer"><FaTiktok className="text-red-500 h-15 w-15 ml-5.5 mb-2 mt-5 mr-1 absolute"/><FaTiktok className="h-15 w-15 m-4.5 absolute text-cyan-400 "/><FaTiktok className="h-15 w-15 m-5 text-black relative"/></a>
             </div>
            </p>
            
          </div>
        </div>
        <div className="text-center text-xs text-zinc-400 mt-4">© 2025 Toro's Wok. Todos los derechos reservados.</div>
      </footer>
      )}
 