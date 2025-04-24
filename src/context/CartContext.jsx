import { createContext, useState } from 'react';

// Creamos el contexto
export const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    // Agregar al carrito
    const addItem = (item, quantity) => {
        const existing = cart.find(prod => prod.id === item.id);

        if (existing) {
            const updatedCart = cart.map(prod =>
                prod.id === item.id
                    ? { ...prod, quantity: prod.quantity + quantity }
                    : prod
            );
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    // Vaciar carrito
    const clearCart = () => setCart([]);

    // Eliminar item
    const removeItem = (id) => {
        setCart(cart.filter(prod => prod.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
