import { Item } from "./Item" ;

export const ItemList = ({products}) => {
    return(
    <div className="d-flex , ListCards">
        {products.map(product => (
        <Item key={product.id} product={product}/>
        ))}
    </div>
    );
};