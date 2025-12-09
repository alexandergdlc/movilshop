import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative bg-gray-900 text-white overflow-hidden">
            {/* Background Pattern/Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800/50 z-10"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556656793-02715d88bf55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-30"></div>

            <div className="container mx-auto px-4 py-16 md:py-24 relative z-20">
                <div className="max-w-2xl">
                    <span className="text-accent font-bold tracking-wider text-sm uppercase mb-2 block">Nuevas Ofertas</span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Tecnología al <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Mejor Precio</span>
                    </h1>
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                        Encuentra los últimos modelos de smartphones, tablets y accesorios con garantía y envío a todo Ayacucho.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-accent hover:bg-orange-600 text-white px-8 py-3 rounded-md font-bold transition-all flex items-center justify-center gap-2 group">
                            Ver Catálogo
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="border border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-md font-bold transition-all">
                            Ofertas del Mes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
