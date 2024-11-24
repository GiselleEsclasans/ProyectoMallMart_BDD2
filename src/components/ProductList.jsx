import React from 'react';
import PropTypes from 'prop-types'; 
import Mediumproductcard from './mediumproductcard';
import Miniproductcard from './miniproductcard'; 

const ProductList = ({ products }, ) => {
  return (
    <div className="flex flex-wrap justify-center">
      {products.map(product => (
        <Mediumproductcard key={product.productId} product={product} />     
      ))}
    </div>
  );
}


ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      productId: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductList;