 import React from "react"
 import { SiInstagram } from "react-icons/si";
import { IoLogoFacebook } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";


 export default function Footer(){

    return(<footer className="bg-zinc-800 text-white mt-1 p-6 rounded-xl">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center sm:text-left">
    <div>
      <h5 className="text-red-600 font-bold mb-2">Toro's Wok</h5>
      <p className="text-sm">Auténtica cocina asiática con ingredientes frescos y recetas tradicionales.</p>
    </div>
    
    <div>
      <h5 className="text-red-600 font-bold mb-2">Contacto</h5>
      <p className="text-sm">Urquiza 583</p>
      <p className="text-sm">+54 2945-656339</p>
      <p className="text-sm">contacto@toros.com</p>
    </div>
    
    <div>
      <h5 className="text-red-600 font-bold mb-2">Síguenos</h5>

      {/* Contenedor mejorado para los íconos */}
      <div className="flex justify-center md:justify-start gap-4">
        <a href="https://www.instagram.com/toroswok.sushi/" target="_blank" rel="noopener noreferrer">
          <SiInstagram className="h-12 w-12 p-2 rounded-xl bg-gradient-to-t from-[#fcba03] via-[#f21167] to-[#870af5]" />
        </a>

        <a href="https://www.facebook.com/toroswok/" target="_blank" rel="noopener noreferrer">
          <IoLogoFacebook className="h-12 w-12 text-blue-500" />
        </a>

        <a href="https://www.tiktok.com/@toroswok.sushi" target="_blank" rel="noopener noreferrer">
          <FaTiktok className="h-12 w-12 text-black" />
        </a>
      </div>
    </div>
  </div>

  <div className="text-center text-xs text-zinc-400 mt-4">© 2025 Toro's Wok. Todos los derechos reservados.</div>
</footer>
    )}
 