import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Productformat2 from '../components/Productformat2';
import Categoryfooter from '../components/categoryfooter';
import { Link } from 'react-router-dom';
import useApi from '../context/useApi'; 

function Products() {
    const { products, categories, loading, error } = useApi(); 
    const { categoryId } = useParams(); 
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(categoryId || '');

    useEffect(() => {
        setSelectedCategory(categoryId); 
    }, [categoryId]);

    if (loading) {
        return <div>Cargando productos...</div>; 
    }

    if (error) {
        console.error("Error en la carga de productos:", error); 
        return <div>Error: {error}</div>; 
    }
   
    const filteredProducts = products.filter(product => {
        const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory ? product.categoryID === selectedCategory : true; 
        return matchesSearchTerm && matchesCategory;
    });

    return (
        <div className='Products'>
            <div className='Busqueda bg-moradooscuro p-5'>
                <form className="max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex">            
                        <div className="relative w-full">
                            <input 
                                type="search" 
                                id="search-dropdown" 
                                className="block p-2.5 w-full z-20 text-sm rounded-xl text-morarosa bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-s-moradoclaro dark:border-moradoclaro dark:placeholder-gray-400 dark:text-moradooscuro dark:focus:border-morarosa" 
                                placeholder="Buscar..." 
                                required 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-morarosa rounded-e-lg border border-morarosa hover:bg-morarosa focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-morarosa dark:hover:bg-moradoclaro dark:focus:ring-moradoclaro">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg " fill="none" viewBox="0 0 20 20 ">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                                <span className="sr-only">Buscar</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            
            <ul className="flex flex-wrap justify-center text-sm font-medium text-center text-gray-500 dark:text-gray-400 m-5">
                {categories.map(category => (
                    <li key={category.categoryId} className="me-2">
                        <Link 
                            to={`/productos/${category.categoryId}`} 
                            onClick={() => setSelectedCategory(category.categoryId)} 
                            className={`inline-block px-4 py-3 rounded-lg ${selectedCategory === category.categoryId ? 'text-white bg-moradooscuro' : 'hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-morarosa dark:hover:text-white'}`}
                        >
                            {category.name}
                        </Link>
                    </li>
                ))}
            </ul>
    
            <div className='Products_'>
                {filteredProducts.map(product => (
                    <Productformat2 key={product.productId} product={product} />
                ))}
            </div>
    
            <Categoryfooter categories={categories} onSelectCategory={setSelectedCategory} />
        </div>
    );
}

export default Products;