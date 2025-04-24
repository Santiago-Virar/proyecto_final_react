import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import products from '../mock/products';

function ItemListContainer() {
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const getData = new Promise((resolve) => {
            setTimeout(() => {
                if (categoryId) {
                    const filtered = products.filter((p) => p.category === categoryId);
                    resolve(filtered);
                } else {
                    resolve(products);
                }
            }, 1000);
        });

        getData.then((res) => setItems(res));
    }, [categoryId]);

    return (
        <div className="container mt-4">
            <h2 className="mb-4">
                {categoryId ? `Categoría: ${categoryId}` : 'Productos destacados'}
            </h2>
            <ItemList products={items} />
        </div>
    );
}

export default ItemListContainer;
