import { Link } from "react-router-dom";
import { useContext } from "react"

import { CartContext } from "../contexts/CartContext"




export const CartWidget = () =>{

    const {items} = useContext(CartContext);

    const total = items.reduce((acc, elem) => acc + elem.quantity , 0); 

    return (
    <Link to='/cart' className="cartNav" /* style={{display: totalQuantity > 0 ? 'block' : 'none'}} */>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAATRJREFUSEvN1a8vR1EYx/HX16aoNlTZZqKkCYokKLKZYGYz/4JgikBQFARJERTJRKOoElMUyYZ7tnu3u
        zvnfs91XfOUG54f7/M8n/Oc29Ox9Tqu708Bn3k3bzjE2m90V+6gABR1Z3HZFvLdiDaxjXPMdwEYxhMGMI7HNpCYyEdYalH4FlMhPwaYxnULwB0m6wDBd4+JCKQ4WPViFOFbuY61e7CM/R8APrK8Mbz062AoDwrfwmIjLXdygbl+CYV/L4Os
        NgQs4jQVEDQIWlQtpsErRvCeCghxV5ipEGKAoNlKOTblsQstHyde2XC9b5oCBvGQb3Ud5ywb50JslokHbB6WMqJQdR0b2MFuBVPnS/7hhMdvNBPwOV+iMqPOlww4QBD7BGHDy1bnSwY0H36ekarB/wV8AXiEMRkxc+GbAAAAAElFTkSuQmCC"
        alt="Imagen carrito"/>
        <span>{total}</span>
    </Link>
    )
}