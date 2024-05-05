import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import { CartContext } from "../../contexts/CartContext";
import {
    getFirestore,
    collection,
    addDoc,
} from "firebase/firestore" ;


const initialValues = {
    name:'',
    phone:'',
    email:'',
}

export const Cart = () => {
    const [values, setValues] = useState(initialValues);

    const { items , clear } = useContext (CartContext);


    const total = () => items.reduce((acc , i) => acc + i.quantity * i.price, 0);

    const handleChange = (ev) =>{
        setValues((prev)=>{
            return{
                ...prev,
                [ev.target.name]: ev.target.value,
            };
        });
    };

    const handleSubmit = () => {
        const order ={
            buyer: values,
            items,
            total: total(),
        };

        console.log(order);

        const db = getFirestore();
        const orderCollection = collection(db, 'order');
        
        addDoc(orderCollection, order).then(({ id })=>{
            if(id){
                alert('Su orden: ' + id + 'ha sido completada!');
            }
        }).finally(()=> {
            clear();
            setValues(initialValues);
            
    });
    };


    return(
        <Container>
            <h3>Productos</h3> 
            {items.map((i) =>{
                return(
                        <ul key={i.title}>
                            <li>Producto: {i.title} </li>
                            <li>Cantidad: {i.quantity} </li> 
                            <li>${i.price} </li>
                        </ul>
                        );
            })}
            <div> 
                <h3>Total: {total()}</h3>
            </div>
            {items?.length > 0 && (
                <form>
                <label>Nombre</label>
                <input type="text" value={values.name} name="name" onChange={handleChange} />
                <label>Celular</label>
                <input type="text" value={values.phone} name="phone" onChange={handleChange} />
                <label>Email</label>
                <input type="email" value={values.email} name="email" onChange={handleChange} />
                <button type="button" onClick={handleSubmit}>Enviar</button>
                </form>
            )}
           
        </Container>
    );
};


{/* 
export const Cart = () => {
    const {cart, clearCart , totalQuantity, total, CartItem} = useContext (CartContext);

    if(totalQuantity === 0) {
        return(
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/'> Ir a Productos </Link>
            </div>
        )
    }
        <div>
            {cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${total}</h3>
            <button onClick={()=> clearCart()}>Vaciar carrito</button>
            <Link to='/checkout'>Checkout</Link>
        </div>
         */}