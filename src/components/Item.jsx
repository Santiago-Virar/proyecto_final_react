import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Item({ id, title, price, image, description }) {
    const { addItem } = useContext(CartContext);

    const handleAddToCart = () => {
        addItem({ id, title, price, image }, 1);
    };

    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100">
                {/* Imagen que lleva al detalle */}
                <Link to={`/item/${id}`}>
                    <img src={image} className="card-img-top" alt={title} />
                </Link>

                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text fw-bold">${price}</p>

                    {/* Botón para agregar al carrito */}
                    <button className="btn btn-success" onClick={handleAddToCart}>
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Item;


