import { useState } from 'react';

function ItemCount({ stock, initial = 1, onAdd }) {
    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if (count < stock) setCount(count + 1);
    };

    const handleSubtract = () => {
        if (count > 1) setCount(count - 1);
    };

    return (
        <div className="mt-3">
            <div className="d-flex align-items-center gap-2 mb-2">
                <button className="btn btn-outline-secondary" onClick={handleSubtract}>-</button>
                <span>{count}</span>
                <button className="btn btn-outline-secondary" onClick={handleAdd}>+</button>
            </div>
            <button className="btn btn-success" onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;
