import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
    const { cart, totalQuantity, removeItem, clearCart } = useContext(CartContext);

    const totalPrice = () =>
        cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if (totalQuantity === 0) {
        return (
            <div className="container mt-4">
                <h2>Tu carrito está vacío 🛒</h2>
                <Link to="/" className="btn btn-primary mt-3">Volver al catálogo</Link>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <h2>Carrito de compras</h2>
            {cart.map((item) => (
                <div key={item.id} className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p>Cantidad: {item.quantity}</p>
                        <p>Precio unitario: ${item.price}</p>
                        <p>Subtotal: ${item.price * item.quantity}</p>
                        <button className="btn btn-danger mt-2" onClick={() => removeItem(item.id)}> Eliminar </button>
                    </div>
                </div>
            ))}
            <h4>Total: ${totalPrice()}</h4>
            <div className="d-flex justify-content-between mt-3">
                <Link to="/checkout" className="btn btn-success">Finalizar compra</Link>
                <button className="btn btn-warning" onClick={clearCart}>Vaciar carrito</button>
            </div>
        </div>
    );
}

export default Cart;



