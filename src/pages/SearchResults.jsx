import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { searchProducts } from '../data/products';

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchResults = async () => {
            setLoading(true);
            try {
                const data = await searchProducts(query);
                setProducts(data);
            } catch (error) {
                console.error('Error searching products:', error);
            } finally {
                setLoading(false);
            }
        };

        if (query) {
            fetchResults();
        } else {
            setProducts([]);
            setLoading(false);
        }
    }, [query]);

    if (loading) {
        return <div className="container mx-auto px-4 py-16 text-center">Buscando...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Resultados para: "{query}"</h1>

            {products.length > 0 ? (
                <ProductList title={`Encontrados (${products.length})`} products={products} />
            ) : (
                <div className="text-center py-16 bg-gray-50 rounded-lg">
                    <p className="text-gray-600 text-lg">No encontramos productos que coincidan con tu búsqueda.</p>
                    <p className="text-gray-500 mt-2">Intenta con otros términos o categorías.</p>
                </div>
            )}
        </div>
    );
};

export default SearchResults;
