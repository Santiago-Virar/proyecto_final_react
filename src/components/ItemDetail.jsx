import { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';

function ItemDetail({ id, title, price, image, description, stock }) {
    const [added, setAdded] = useState(false);
    const { addItem } = useContext(CartContext);

    const handleAdd = (quantity) => {
        const item = { id, title, price, image };
        addItem(item, quantity);
        setAdded(true);
    };

    return (
        <div className="card mb-4">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={image} className="img-fluid rounded-start" alt={title} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text fw-bold">Precio: ${price}</p>
                        <p className="card-text">Stock disponible: {stock}</p>

                        {added ? (
                            <p className="text-success">Producto agregado al carrito ✅</p>
                        ) : (
                            <ItemCount stock={stock} onAdd={handleAdd} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;

