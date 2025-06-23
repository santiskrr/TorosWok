import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Carrito() {
    const { cart, decreaseQuantity } = useContext(CartContext);

    const totalPrecio = cart.reduce((total, item) => {
        return total + parseFloat(item.price.replace("$", "").replace(".", ""));
    }, 0).toLocaleString("es-AR");

    const enviarPedido = () => {
        if (cart.length === 0) {
            alert("Tu carrito está vacío.");
            return;
        }

        const mensaje = cart.map(item => `- ${item.name}: ${item.price} x ${item.quantity}`).join("\n");
        const whatsappMensaje = `Hola, quiero hacer un pedido:\n${mensaje}\n\nTotal: $${totalPrecio}`;
        
        window.open(`https://wa.me/?text=${encodeURIComponent(whatsappMensaje)}`, "_blank");
    };

    return (
        <div className="p-8 bg-black rounded-xl text-white text-center">
            <h1 className="text-3xl font-bold text-yellow-400 mb-6">🛒 Tu Pedido</h1>

            {cart.length === 0 ? (
                <p className="text-gray-400">El carrito está vacío.</p>
            ) : (
                <>
                    <ul className="mb-4">
                        {cart.map((item, index) => (
                            <li key={index} className="text-lg flex justify-between items-center">
                                {item.name} - {item.price} x {item.quantity}
                                <button 
                                    className="ml-4 px-2 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
                                    onClick={() => decreaseQuantity(item.name)}
                                >
                                    ➖
                                </button>
                            </li>
                        ))}
                    </ul>
                    <p className="text-xl font-bold text-green-400">Total: ${totalPrecio}</p>
                </>
            )}

            <button 
                onClick={enviarPedido}
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
                📲 Enviar pedido por WhatsApp
            </button>
        </div>
    );
}