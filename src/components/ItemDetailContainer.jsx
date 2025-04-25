import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductById } from '../firebase/products';
import ItemDetail from '../components/ItemDetail'; 

function ItemDetailContainer() {
    const { itemId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        getProductById(itemId)
            .then(data => {
                setProduct(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError(true);
                setLoading(false);
            });
    }, [itemId]);

    if (loading) return <p>Cargando producto...</p>;
    if (error) return <p>Producto no encontrado ❌</p>;

    return (
        <div className="container mt-4">
            <ItemDetail {...product} />
        </div>
    );
}

export default ItemDetailContainer;




