import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import products from '../mock/products';

function ItemDetailContainer() {
    const { itemId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Simulamos fetch (después será con Firebase)
        const getProduct = new Promise((resolve) => {
            const item = products.find(p => p.id === parseInt(itemId));
            setTimeout(() => resolve(item), 500); // simula demora
        });

        getProduct.then(data => setProduct(data));
    }, [itemId]);

    return (
        <div className="container mt-4">
            {product ? <ItemDetail {...product} /> : <p>Cargando producto...</p>}
        </div>
    );
}

export default ItemDetailContainer;

