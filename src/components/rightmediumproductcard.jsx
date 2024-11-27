import React from 'react';
import { FaShoppingCart, FaUser  } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Rightmediumproductcard = () => {
  return (
    <div className='Ad w-1/2 bg-gradient-to-t from-naranjaunimet to-rojoapagado p-10 rounded-tl-3xl flex-col'>
      {/* Cards que van al lado del cardmedianas*/}
      <div className='bg-white box-border h-1/2 w-full p-4 mb-3 rounded-2xl'>
        <img src="../src/img/electronicos.jpg" alt="Description of image 1" className="h-full w-full object-cover rounded-2xl" />
      </div>
      <div className='bg-white box-border h-1/2 w-full p-4 mb-3 rounded-2xl'>
        <img src="../src/img/audifonos.jpeg" alt="Description of image 2" className="h-full w-full object-cover rounded-2xl" />
      </div>
    </div>
  );
}

export default Rightmediumproductcard;