import "./ItemCount.css";
import { useState } from "react";

export const ItemCount = ({ onAdd, stock }) =>{
    const [ quantity , setQuantity] = useState(1);

    const handleDecrease = () => {
        if(quantity > 1) setQuantity((prev) => prev - 1);
    };

    const handleIncrease = () => {
        if(stock > quantity) setQuantity((prev) => prev + 1);
    };


    const handleAdd = () => {
        onAdd(quantity);
        setQuantity(1);
    };

    return(
        <div>
            <button onClick={handleDecrease}>-</button>
            <input type="number" value={quantity} readOnly/>
            <button onClick={handleIncrease}>+</button>
            <div>
            <button type="button" onClick={handleAdd}>Agregar al carrito</button>
            </div>
        </div>
    );

};






