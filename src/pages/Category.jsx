import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../firebase/products"; // Importamos esta función nueva
import ItemList from "../components/ItemList";

function Category() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);

        getProductsByCategory(categoryId)
            .then((response) => {
                setProducts(response);
            })
            .catch((error) => {
                console.error("Error al cargar productos por categoría", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]);

    if (loading) {
        return <h2 className="text-center mt-4">Cargando productos de {categoryId}...</h2>;
    }

    return (
        <div className="container mt-4">
            <ItemList products={products} />
        </div>
    );
}

export default Category;
