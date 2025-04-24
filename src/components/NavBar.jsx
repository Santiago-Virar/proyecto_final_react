import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';


function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Mi E-commerce</Link>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex gap-3">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/remeras">Remeras</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/zapatillas">Zapatillas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cart">Carrito</Link>
                    </li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar;
