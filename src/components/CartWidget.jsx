import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { BsCart4 } from 'react-icons/bs'; // ícono de carrito

function CartWidget() {
    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to="/cart" className="btn btn-outline-primary position-relative">
            <BsCart4 size={24} />
            {totalQuantity > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {totalQuantity}
                </span>
            )}
        </Link>
    );
}

export default CartWidget;
