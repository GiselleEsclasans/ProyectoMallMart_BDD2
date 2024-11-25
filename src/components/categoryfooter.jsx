import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; 

const Categoryfooter = ({ categories }) => {
  return (
    <div className='Category bg-naranjaunimet p-5 pl-2'>
      <span className="text-3xl font-bold text-gray-900 dark:text-white m-5">Categorías</span>
      <div className='flex flex-nowrap justify-between'>
      
          {categories.map((category, index) => (
            <Link 
              key={index}
              onClick={() => { window.scrollTo(0, 0); }} 
              to="/productos" 
              className='border-8 border-white text-orange-950 font-bold py-4 px-4 size-24 rounded-full m-1'
            >
              {category}
            </Link>
          ))
        }
      </div>
    </div>
  );
}

// Definición de PropTypes
Categoryfooter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Categoryfooter;