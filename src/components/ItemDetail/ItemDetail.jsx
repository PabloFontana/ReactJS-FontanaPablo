import { useContext } from "react";

import { ItemCount } from "../ItemCount/ItemCount" ; 
import { CartContext } from "../../contexts/CartContext";


export const ItemDetail = (product) =>{
    const { addItem } = useContext(CartContext);


    const add = (quantity)=> {
        addItem(product, quantity);
    };

 return(
    <div>
        {<h1>{product.title}</h1>}
        <img 
        src={product.image}
        style={{height: 500 , width: "auto" }}
        alt={product.title}
        />
        <p>{product.description}</p>
        <div>{`Stock: ${product.stock}`}</div>
        <div>{`Precio: $${product.price}`}</div>
    <ItemCount stock={product.stock} onAdd={add}/>
    </div>
 )
};