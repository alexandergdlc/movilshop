import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { getProductsByCategory } from '../data/products';

const CategoryPage = () => {
    const { categoryName } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Normalizar para título (ej: "celulares" -> "Celulares")
    const normalizedCategory = categoryName.charAt(0).toUpperCase() + categoryName.slice(1).toLowerCase();

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const data = await getProductsByCategory(categoryName);
                setProducts(data);
            } catch (error) {
                console.error('Error fetching category:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [categoryName]);

    if (loading) {
        return <div className="container mx-auto px-4 py-16 text-center">Cargando productos...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {products.length > 0 ? (
                <ProductList title={normalizedCategory} products={products} />
            ) : (
                <div className="text-center py-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Categoría no encontrada</h2>
                    <p className="text-gray-600">No hay productos disponibles en esta categoría.</p>
                </div>
            )}
        </div>
    );
};

export default CategoryPage;
