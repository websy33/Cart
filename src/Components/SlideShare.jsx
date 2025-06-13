import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

import Image_1 from './Image_1.jpg'
import Image_2 from './Image_2.png'
import Image_3 from './Image_3.jpeg'
import Image_4 from './Image_4.jpg'
import Image_5 from './Image_5.jpg'
import Image_6 from './Image_6.jpg'
import Image_7 from './Image_7.jpg'
import Image_8 from './Image_8.png'

const images = [
  { src: Image_1, caption: 'Almond' },
  { src: Image_2, caption: 'Kashmir Handloom ' },
  { src: Image_3, caption: 'Kashmir Handloom ' },
  { src: Image_4, caption: 'Kashmir Handloom ' },
  { src: Image_5, caption: 'Kashmir Handloom ' },
  { src: Image_6, caption: 'Kashmir Jewellery ' },
  { src: Image_7, caption: 'Kashmir Saffron ' },
  { src: Image_8, caption: 'Kashmir Almond ' },
  

];

const SlideShow = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative  max-w-[75rem] mx-auto mt-10">
      <div className="relative h-70 sm:h-96 overflow-hidden rounded-xl shadow-2xl">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === current ? 'opacity-100 scale-100 z-15' : 'opacity-0 scale-95 z-0'
            }`}
          >
            <img
              src={img.src}
              alt={img.caption}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white text-lg sm:text-xl font-semibold">
              {img.caption}
            </div>
          </div>
        ))}
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 p-3 rounded-full text-xl shadow-md transition hover:scale-110"
        >
          <FaArrowAltCircleLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 p-3 rounded-full text-xl shadow-md transition hover:scale-110"
        >
          <FaArrowAltCircleRight />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === current ? 'bg-blue-500 scale-125' : 'bg-gray-400'
            }`}
          title={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
 
export default SlideShow;