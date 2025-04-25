import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import products from '../mock/products'; // asegurate de que la ruta sea correcta

function ItemDetailContainer() {
    const { itemId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        console.log("ID del producto desde URL:", itemId);
        console.log("Lista de productos:", products);

        const getProduct = new Promise((resolve) => {
            const item = products.find(p => p.id === parseInt(itemId));
            console.log("Producto encontrado:", item);
            setTimeout(() => resolve(item), 500);
        });

        getProduct.then(data => setProduct(data));
    }, [itemId]);

    return (
        <div className="container mt-4">
            {product ? (
                <div>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>Precio: ${product.price}</p>
                    <img src={product.image} alt={product.title} width="200" />
                    {}
                </div>
            ) : (
                <p>Cargando producto...</p>
            )}
        </div>
    );
}

export default ItemDetailContainer;


