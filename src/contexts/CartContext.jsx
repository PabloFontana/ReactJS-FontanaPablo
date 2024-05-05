import { useState, createContext } from "react"


export const CartContext = createContext();

export const Provider = ({children}) =>{
    const [items, setItems] = useState([
        { title: 'auto', price: 20, quantity: 4},
        { title: 'moto', price: 10 , quantity: 2},
     ]);

    const clear = () => setItems([]);

    const removeItem = (id) =>{
        const filtered = items.filter((item) => item.id !==id ) ;
        setItems(filtered); 
        };

        const addItem = (item) =>{
            setItems([...items, item]);
        };

        return ( 
            <CartContext.Provider value={ {addItem, clear, items, removeItem} }>
                {children}
            </CartContext.Provider>
        )
};
































/* import { createContext, useState } from "react";

export const CartContext = createContext({
    cart : []
})

export const CartProvider = ({children}) =>{
    const [ cart, setCart ] = useState ([])
    console.log(cart);

    const addItem = (item, quantity) =>{
        if(!isInCart (item.id)){
            setCart(prev => [...prev , {...item, quantity}])
        } else{
            console.error('El producto ya fue agregado')
        }
    }
    const removeItem = (itemId) =>{
        const cartUpdated = cart.filter (prod => prod.id !== itemId)
        setCart(cartUpdated);
    }
    const clearCart =() => {
        setCart([]);
    }

    const isInCart = (itemId) => {
        return cart.some(prod=> prod.id === itemId)
    }

    return(
        <CartContext.Provider value={{ cart , addItem , removeItem , clearCart }}>
            {children}
        </CartContext.Provider>
    )
} */