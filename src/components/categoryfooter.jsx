import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; 

const Categoryfooter = ({ categories }) => {
  return (
    <div className='Category bg-naranjaunimet p-5 pl-2'>
      <span className="text-3xl font-bold text-gray-900 dark:text-white m-5">Categorías</span>
      <div className='flex flex-nowrap justify-between'>
          {categories.map((category) => (
            <Link 
              key={category.categoryId} 
              onClick={() => { window.scrollTo(0, 0); }} 
              to={`/productos/${category.categoryId}`} // Asegúrate de que el enlace sea correcto
              className='border-8 bg-white border-moradoclaro text-orange-950 font-bold py-8 px-3 size-28 rounded-full m-1'
            >
              {category.name}
            </Link>
          ))}
      </div>
    </div>
  );
}

// Definición de PropTypes
Categoryfooter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    categoryId: PropTypes.string.isRequired,
  })).isRequired,
};

export default Categoryfooter;