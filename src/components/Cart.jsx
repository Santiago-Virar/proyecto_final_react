import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Cart() {
    const { cart, clearCart, removeItem } = useContext(CartContext);

    const total = cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);

    if (cart.length === 0) {
        return <h2 className="text-center mt-4">🛒 El carrito está vacío</h2>;
    }

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Carrito de Compras</h2>

            {cart.map((item) => (
                <div className="card mb-3" key={item.id}>
                    <div className="card-body d-flex justify-content-between align-items-center">
                        <div>
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">Precio unitario: ${item.price}</p>
                            <p className="card-text">Cantidad: {item.quantity}</p>
                            <p className="card-text fw-bold">Subtotal: ${item.price * item.quantity}</p>
                        </div>
                        <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
                            Eliminar
                        </button>
                    </div>
                </div>
            ))}

            <div className="text-end">
                <h4 className="fw-bold">Total: ${total}</h4>
                <button className="btn btn-outline-danger mt-2" onClick={clearCart}>Vaciar carrito</button>
            </div>
        </div>
    );
}

export default Cart;
