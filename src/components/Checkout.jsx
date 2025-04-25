import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Checkout() {
    const { cart, clearCart } = useContext(CartContext);
    const [form, setForm] = useState({ nombre: '', email: '', telefono: '' });
    const [orderId, setOrderId] = useState(null);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación básica
        if (!form.nombre || !form.email || !form.telefono) {
            alert('Por favor completá todos los campos');
            return;
        }

        // Simular envío y generación de orden
        const fakeOrderId = Math.floor(Math.random() * 1000000);
        setOrderId(fakeOrderId);
        clearCart();
    };

    if (orderId) {
        return (
            <div className="container mt-4">
                <h2>¡Gracias por tu compra, {form.nombre}!</h2>
                <p>Tu número de orden es: <strong>{orderId}</strong></p>
                <Link to="/" className="btn btn-primary mt-3">Volver al inicio</Link>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <h2>Finalizar compra</h2>
            <form onSubmit={handleSubmit} className="mt-3">
                <div className="mb-3">
                    <label className="form-label">Nombre completo</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Teléfono</label>
                    <input
                        type="tel"
                        className="form-control"
                        name="telefono"
                        value={form.telefono}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-success">Confirmar compra</button>
            </form>
        </div>
    );
}

export default Checkout;

