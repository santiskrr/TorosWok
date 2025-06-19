import React from "react";
import { postresChina } from "./postresChina";
<<<<<<< HEAD
import Button from '../componentes/Botonpedido.jsx';

const ArregloPostres = () => {
=======
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ArregloPostres = () => {
    const { addToCart } = useContext(CartContext);
>>>>>>> 104dc46e7f613d0182c99e09dc995a50d604a0d1

    return (
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
    {postresChina.map((postre, index) => (
        <div key={index} className="bg-black/80 rounded-xl p-4 shadow-md hover:scale-105 hover:shadow-red-500 transition-transform text-center min-h-[340px] flex flex-col justify-between overflow-hidden">
            <div 
                className="relative overflow-hidden rounded-md group w-full h-56 cursor-grab"
                onMouseDown={(e) => {
                    const img = e.currentTarget.querySelector("img");
                    img.style.transform = "scale(2)";
                    img.style.cursor = "grabbing";
                    img.style.position = "absolute";
                    img.style.left = "0";
                    img.style.top = "0";
                    
                    e.currentTarget.onmousemove = (event) => {
                        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
                        const x = event.clientX - left - (width / 2);
                        const y = event.clientY - top - (height / 2);
                        img.style.transform = `scale(2) translate(${x}px, ${y}px)`;
                    };
                }}
                onMouseUp={(e) => {
                    const img = e.currentTarget.querySelector("img");
                    img.style.transform = "scale(1)";
                    img.style.cursor = "grab";
                    img.style.position = "relative";
                    e.currentTarget.onmousemove = null;
                }}
            >
                <img 
                    src={postre.imagen} 
<<<<<<< HEAD
                    alt={postre.comida} 
=======
                    alt={postre.nombre} 
>>>>>>> 104dc46e7f613d0182c99e09dc995a50d604a0d1
                    className="w-full h-full object-cover rounded-md mb-3 transition-transform duration-300 ease-out"
                    draggable="false"
                />
            </div>
<<<<<<< HEAD
            <h3 className="text-xl font-semibold text-red-400">{postre.comida}</h3>
            <p className="text-sm text-white mt-1">{postre.descripcion}</p>
            <p className="mt-2 text-yellow-300 font-bold">{postre.precio}</p>
            <div className='m-5'>
                <Button  comida ={postre}/>
                </div>
=======
            <h3 className="text-xl font-semibold text-red-400">{postre.nombre}</h3>
            <p className="text-sm text-white mt-1">{postre.descripcion}</p>
            <p className="mt-2 text-yellow-300 font-bold">{postre.precio}</p>
            <button 
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                onClick={() => addToCart({ name: postre.nombre, price: postre.precio })}
            >
                Hacer pedido
            </button>
>>>>>>> 104dc46e7f613d0182c99e09dc995a50d604a0d1
        </div>
    ))}
</div>


    );
};

export default ArregloPostres;
