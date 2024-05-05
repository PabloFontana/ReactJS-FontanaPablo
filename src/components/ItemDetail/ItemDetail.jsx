import { useContext, useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount" ; 
import { Link } from 'react-router-dom';
import { CartContext } from "../../contexts/CartContext";

export const ItemDetail = ({id, title , image , categoryId ,description , price , stock}) =>{
    const [quantityAdded , setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) =>{
        setQuantityAdded(quantity)
    
        const item = {
            id, title , price 
        }
        addItem(item, quantity)
    }

    return(
        <article>
            <header>
                <h2>
                    {title}
                </h2>
            </header>
            <picture>
                <img src={image} alt={title} />
            </picture>
            <section>
                <p>
                    Categoria: {categoryId}
                </p>
                <p>
                    Descripcion: {description}
                </p>
                <p>
                    Precio: {price}
                </p>
                <p>
                    Stock: {stock}
                </p>
            </section>
            <footer>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart'> Terminar Compra </Link>
                    ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            
            </footer>
        </article> 
    )
}