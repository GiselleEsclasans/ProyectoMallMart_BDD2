import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; 

const Categoryfooter = ({ categories, onSelectCategory }) => {
  return (
    <div className='Category bg-naranjaunimet p-5 pl-2'>
      <span className="text-3xl font-bold text-gray-900 dark:text-white m-5">Categorías</span>
      <div className='flex flex-nowrap justify-between'>
          {categories.map((category) => (
            <Link 
              key={category.categoryId} 
              onClick={() => { 
                window.scrollTo(0, 0); 
                onSelectCategory(category.categoryId); 
              }} 
              to={`/productos/${category.categoryId}`} 
              className='border-8 border-moradoclaro bg-white text-orange-950 font-bold py-4 px-4 rounded-full m-1'
            >
              {category.name}
            </Link>
          ))}
      </div>
    </div>
  );
}

Categoryfooter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    categoryId: PropTypes.string.isRequired,
  })).isRequired,
  onSelectCategory: PropTypes.func.isRequired, 
};

export default Categoryfooter;