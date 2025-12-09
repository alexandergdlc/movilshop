import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, ArrowLeft } from 'lucide-react';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getProductById(id);
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <div className="container mx-auto px-4 py-16 text-center">Cargando...</div>;
    }

    if (!product) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold mb-4">Producto no encontrado</h2>
                <Link to="/" className="text-accent hover:underline">Volver al inicio</Link>
            </div>
        );
    }

    const { name, price, original_price: originalPrice, image, description, category } = product;
    const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

    return (
        <div className="container mx-auto px-4 py-8">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-accent mb-6">
                <ArrowLeft size={16} className="mr-1" /> Volver
            </Link>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                    {/* Image */}
                    <div className="flex items-center justify-center bg-gray-50 rounded-lg p-8 relative">
                        {discount > 0 && (
                            <span className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded">
                                -{discount}%
                            </span>
                        )}
                        <img src={image} alt={name} className="max-h-96 object-contain" />
                    </div>

                    {/* Info */}
                    <div>
                        <span className="text-sm text-gray-500 uppercase tracking-wide font-medium">{category}</span>
                        <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-4">{name}</h1>

                        <div className="flex items-baseline gap-4 mb-6">
                            <span className="text-3xl font-bold text-gray-900">S/ {price.toFixed(2)}</span>
                            {originalPrice && (
                                <span className="text-xl text-gray-400 line-through">S/ {originalPrice.toFixed(2)}</span>
                            )}
                        </div>

                        <p className="text-gray-600 mb-8 leading-relaxed">
                            {description}
                        </p>

                        <div className="flex gap-4">
                            <button
                                onClick={() => addToCart(product)}
                                className="flex-1 bg-accent hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
                            >
                                <ShoppingCart size={20} />
                                Añadir al Carrito
                            </button>
                            <button className="border border-gray-300 hover:border-red-500 hover:text-red-500 text-gray-700 p-3 rounded-lg transition-colors">
                                <Heart size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
