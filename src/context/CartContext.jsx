import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const  [ cart, setCart ] = useState ([])

    const handleAddToCart = (product, quantity) => {
        if (product) {
            const existingItem = cart.find((item) => item.id === product.id);

            if (existingItem) {
                existingItem.quantity += quantity;
                setCart([...cart]);
            } else {
                const newItem = { ...product, quantity };
                setCart([...cart, newItem]);
            }
            console.log("Producto agregado al carrito:", product);
    console.log("Carrito actualizado:", cart);
        }
    };

    return(
        <CartContext.Provider value={{cart, setCart, handleAddToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)