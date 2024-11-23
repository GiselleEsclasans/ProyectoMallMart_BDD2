import React from 'react';
import { FaShoppingCart, FaUser  } from 'react-icons/fa'; // Importing shopping cart and user icons from react-icons
import { Link } from 'react-router-dom';
const Categoryfooter = () => {
  return (
    <div className='Category bg-naranjaunimet p-5 pl-2'>
      {/* Footer de categorías*/}
            <span className="text-3xl font-bold text-gray-900 dark:text-white m-5">Categorías</span>
                <div className='flex flex-nowrap justify-between'>
                    <Link onClick={() => {scroll(0, 0)}} to="/productos" className='border-8 border-white  text-orange-950 font-bold py-4 px-4 size-24 rounded-full m-1'></Link>
                    <Link onClick={() => {scroll(0, 0)}} to="/productos" className='border-8 border-white  text-orange-950 font-bold py-4 px-4 size-24 rounded-full m-1'></Link>
                    <Link onClick={() => {scroll(0, 0)}} to="/productos" className='border-8 border-white  text-orange-950 font-bold py-4 px-4 size-24 rounded-full m-1'></Link>
                    <Link onClick={() => {scroll(0, 0)}} to="/productos" className='border-8 border-white  text-orange-950 font-bold py-4 px-4 size-24 rounded-full m-1'></Link>
                    <Link onClick={() => {scroll(0, 0)}} to="/productos" className='border-8 border-white  text-orange-950 font-bold py-4 px-4 size-24 rounded-full m-1'></Link>
                </div>
            </div>
  );
}

export default Categoryfooter;