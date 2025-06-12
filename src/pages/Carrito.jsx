import React from "react";
import { IoAdd } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import Listcarrito from "../datos/ListaCarrito";

function Carrito() {
  return (
    <>
    <div className="contenedor-principal bg-white">
        <div className="contenedor-productos text-center">
            <div className="marcoCompra">
                <div className="titulo">
                    Productos
                </div>

                <div className="grid">

                    <div className="contenedor-imagendescripcion">
                        <Listcarrito/>
                    </div>

                    <div className="contenedor-masmenos border border-red-500 rounded-xl  ml-140 mr-140">
                        <span><button><FiMinus className="border h-5 w-5 m-2"/></button></span>
                        <span className=" p-1 m-1">1</span>
                        <span><button><IoAdd className=" border h-5 w-5 m-2"/></button></span>
                    </div>

                </div>
            </div>
        </div>



    </div>
    </>



  );
}

export default Carrito