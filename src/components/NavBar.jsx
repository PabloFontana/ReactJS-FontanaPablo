import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { CartWidget } from "./CartWidget"

export const NavBar = () => {
    return (
        <>



<Navbar bg="light" data-bs-theme="light">
        <Container>
        <Navbar.Brand to="/" as={NavLink}>Tu Estilo</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link to="/category/remeras" as={NavLink}>Remeres</Nav.Link>
                <Nav.Link to="/category/pantalones"as={NavLink}>Pantalones</Nav.Link>
                <Nav.Link to="/category/calzado"as={NavLink}>Calzado</Nav.Link>
            </Nav>
        
        </Container>
        {/* carrito */}
        <CartWidget />
    </Navbar>
        </>
    )
}