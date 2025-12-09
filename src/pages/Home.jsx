import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import { getProducts } from '../data/products';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Cargando...</div>;
    }

    return (
        <div>
            <Hero />
            <div className="container mx-auto px-4 py-8 space-y-12">
                <ProductList title="Celulares Recientes" products={products.filter(p => p.category === 'Celulares').slice(0, 4)} />
                <ProductList title="Destacados" products={products.slice(0, 4)} />
            </div>
        </div>
    );
};

export default Home;
