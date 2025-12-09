import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, Phone, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
    const { cartCount, setIsCartOpen } = useCart();
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
        }
    };

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            {/* Top Bar */}
            <div className="bg-primary text-white text-xs py-2">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1"><Phone size={14} /> +51 999 999 999</span>
                        <span className="hidden sm:inline">envios@movilshopayacucho.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to="/login" className="hover:text-accent transition-colors">Mi Cuenta</Link>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between gap-4">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-primary">
                        MOVIL<span className="text-accent">SHOP</span>
                    </Link>

                    {/* Search Bar - Hidden on mobile, shown on desktop */}
                    <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl mx-8 relative">
                        <input
                            type="text"
                            placeholder="Buscar productos..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:border-accent"
                        />
                        <button type="submit" className="bg-accent text-white px-6 rounded-r-md hover:bg-orange-600 transition-colors">
                            <Search size={20} />
                        </button>
                    </form>

                    {/* Actions */}
                    <div className="flex items-center gap-6">
                        <button className="md:hidden text-gray-600">
                            <Search size={24} />
                        </button>
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="relative text-gray-700 hover:text-accent transition-colors"
                        >
                            <ShoppingCart size={24} />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                        <button className="md:hidden text-gray-700">
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden md:block border-t border-gray-100">
                <div className="container mx-auto px-4">
                    <ul className="flex items-center gap-8 py-3 text-sm font-medium text-gray-700">
                        <li><Link to="/" className="hover:text-accent transition-colors">INICIO</Link></li>
                        <li><Link to="/category/celulares" className="hover:text-accent transition-colors">CELULARES</Link></li>
                        <li><Link to="/category/tablets" className="hover:text-accent transition-colors">TABLETS</Link></li>
                        <li><Link to="/category/accesorios" className="hover:text-accent transition-colors">ACCESORIOS</Link></li>
                        <li><Link to="/category/ofertas" className="hover:text-accent transition-colors text-red-500">OFERTAS</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
