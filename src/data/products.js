import { supabase } from '../supabase/client';

export const getProducts = async () => {
    const { data, error } = await supabase
        .from('products')
        .select('*');

    if (error) throw error;
    return data;
};

export const getProductById = async (id) => {
    const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();

    if (error) throw error;
    return data;
};

export const getProductsByCategory = async (category) => {
    // Normalizar categoría para búsqueda insensible a mayúsculas/minúsculas si es necesario
    // En este caso simple, asumimos coincidencia exacta o ILIKE
    const { data, error } = await supabase
        .from('products')
        .select('*')
        .ilike('category', category);

    if (error) throw error;
    return data;
};

export const searchProducts = async (query) => {
    const { data, error } = await supabase
        .from('products')
        .select('*')
        .or(`name.ilike.%${query}%,description.ilike.%${query}%,category.ilike.%${query}%`);

    if (error) throw error;
    return data;
};
