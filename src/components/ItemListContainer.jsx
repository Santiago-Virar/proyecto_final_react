import { useEffect, useState } from "react";
import { getProducts } from "../firebase/products"; 
import ItemList from "./ItemList";

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts()
            .then((response) => {
                setProducts(response);
            })
            .catch((error) => {
                console.error("Error al cargar productos", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <h2 className="text-center mt-4">Cargando productos...</h2>;
    }

    return (
        <div className="container mt-4">
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer;

