import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import{ItemCount} from './ItemCount/ItemCount';

export const Item = ({ product }) => (
    <Card  className='Cards'>
    <Card.Img className='ImgCards' variant="top" src={product.image } />
    <Card.Body className='bodyCards'>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>{product.categoryId}</Card.Text>
        <Card.Text>Precio ${product.price}</Card.Text>
        <Link to={`/item/${product.id}`}><Button className='ButtonCards' variant="primary">Ver detalles</Button></Link>
    </Card.Body>
    </Card>
)
