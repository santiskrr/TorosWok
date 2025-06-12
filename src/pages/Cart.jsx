import { useState } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    const sendOrder = () => {
        const orderText = cart.map(item => `- ${item.name}: ${item.price}`).join("\n");
        const whatsappMessage = `Hola, quiero realizar el siguiente pedido:\n${orderText}`;
        window.open(`https://www.whatsapp.com/privacy=${encodeURIComponent(whatsappMessage)}`, "_blank");
    };

    return (
        <div>
            <h2>Tu Pedido</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.price} 
                        <button onClick={() => removeFromCart(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
            <button onClick={sendOrder}>Enviar por WhatsApp</button>
        </div>
    );
};

export default Cart;
