 import React from "react"
 import { SiInstagram } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { FaTiktok } from "react-icons/fa";

 export default function Footer(){

    return(<footer className="bg-zinc-800 text-white mt-16 p-6 rounded-xl">
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
            <p className="text-sm">
              
            <a href="https://www.instagram.com/toroswok.sushi/p/ChX2jerprcS/" target="_blank" rel="noopener noreferrer"><SiInstagram />Instagram</a>
            
             
            <a href="https://www.facebook.com/toroswok/" target="_blank" rel="noopener noreferrer"><SiFacebook />Facebook</a>
             
            <a href="https://www.instagram.com/toroswok.sushi/p/ChX2jerprcS/" target="_blank" rel="noopener noreferrer"><FaTiktok />TikTok</a>
            </p>
            
          </div>
        </div>
        <div className="text-center text-xs text-zinc-400 mt-4">© 2025 Toro's Wok. Todos los derechos reservados.</div>
      </footer>
      )}
 