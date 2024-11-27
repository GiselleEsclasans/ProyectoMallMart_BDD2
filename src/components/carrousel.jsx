import React, { useState } from 'react';
import logo from '../img/Foto1.png'; 
import logo1 from '../img/Foto2.png';
import logo2 from '../img/Foto3.png';
const images = [
  { id: 1, src: logo, alt: 'Image 1' },
  { id: 2, src: logo1, alt: 'Image 2' },
  { id: 3, src: logo2, alt: 'Image 3' },
];

const Carrousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-violetaoscuro h-96 text-white flex items-center justify-center">
      <div className="relative w-full max-w-lg">
        <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="w-full rounded-lg" />
        <button onClick={prevImage} className="absolute left-0 w-10 top-1/2 transform -translate-y-1/2 bg-naranjaunimet p-2 rounded-full shadow-lg">
          &lt;
        </button>
        <button onClick={nextImage} className="absolute right-0 w-10 top-1/2 transform -translate-y-1/2 bg-naranjaunimet p-2 rounded-full shadow-lg">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carrousel;