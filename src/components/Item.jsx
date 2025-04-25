import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Item({ id, title, price, image, description }) {
    const { addItem } = useContext(CartContext);

    const handleAdd = () => {
        const item = { id, title, price, image };
        addItem(item, 1);
    };

    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100">
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text fw-bold">${price}</p>
                    <button onClick={handleAdd} className="btn btn-success">Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
}

export default Item;

