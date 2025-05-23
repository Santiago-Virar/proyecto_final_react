import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { db } from "./config";

export const getProducts = async () => {
    const productsRef = collection(db, "products");
    const snapshot = await getDocs(productsRef);
    const products = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    return products;
};

export const getProductsByCategory = async (categoryId) => {
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("category", "==", categoryId));
    const snapshot = await getDocs(q);
    const products = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    return products;
};

// ⚠️ ESTE ES EL QUE FALTABA:
export const getProductById = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        throw new Error("Producto no encontrado");
    }

    return {
        id: docSnap.id,
        ...docSnap.data()
    };
};
