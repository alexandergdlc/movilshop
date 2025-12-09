import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { id, name, price, originalPrice, image, category } = product;
    const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;
    const { addToCart } = useCart();

    return (
        <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden group">
            <div className="relative p-4 bg-gray-50 h-64 flex items-center justify-center">
                {discount > 0 && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        -{discount}%
                    </span>
                )}
                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
                    <Heart size={18} />
                </button>
                <img
                    src={image}
                    alt={name}
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/300x300?text=No+Image'; }}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            <div className="p-4">
                <span className="text-xs text-gray-500 uppercase tracking-wide">{category}</span>
                <Link to={`/product/${id}`}>
                    <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 hover:text-accent transition-colors min-h-[3rem]">
                        {name}
                    </h3>
                </Link>

                <div className="flex items-end justify-between mt-4">
                    <div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-lg font-bold text-gray-900">S/ {price.toFixed(2)}</span>
                            {originalPrice && (
                                <span className="text-sm text-gray-400 line-through">S/ {originalPrice.toFixed(2)}</span>
                            )}
                        </div>
                    </div>

                    <button
                        onClick={() => addToCart(product)}
                        className="bg-primary hover:bg-accent text-white p-2 rounded-md transition-colors"
                    >
                        <ShoppingCart size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
