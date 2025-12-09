import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* About */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">MOVILSHOP</h3>
                        <p className="text-sm leading-relaxed mb-4">
                            Tu tienda de confianza para celulares, tablets y accesorios en Ayacucho.
                            Ofrecemos los mejores precios y garantía.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-accent transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-accent transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">Enlaces Rápidos</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-accent transition-colors">Sobre Nosotros</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Términos y Condiciones</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Política de Privacidad</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Contacto</a></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">Categorías</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-accent transition-colors">Celulares</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Tablets</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Accesorios</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Ofertas</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">Contacto</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-accent mt-1" />
                                <span>Av. Independencia 123, Ayacucho, Perú</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-accent" />
                                <span>+51 999 999 999</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-accent" />
                                <span>contacto@movilshopayacucho.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} MovilShop Ayacucho. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
