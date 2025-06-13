import React, { useEffect, useRef } from 'react';

const cards = [
  {
    id: 1,
    title: 'Kashmir Almonds',
    brand: 'FableStreet',
    size: 'XL',
    price: 3676,
    originalPrice: 4595,
    discount: '20% OFF',
    label: 'Only Few Left!',
    image: 'src/Components/Cardslider/Image_9.jpg',
  },
  {
    id: 2,
    title: 'Handloom Craft',
    brand: 'FableStreet',
    size: 'XL',
    price: 3676,
    originalPrice: 4595,
    discount: '20% OFF',
    label: 'Only Few Left!',
    image: 'src/Components/Cardslider/Image_9.jpg',
  },
  {
    id: 3,
    title: 'Traditional Jewelry',
    brand: 'FableStreet',
    size: 'XL',
    price: 3676,
    originalPrice: 4595,
    discount: '20% OFF',
    label: 'Only Few Left!',
    image: 'src/Components/Cardslider/Image_9.jpg',
  },
  {
    id: 4,
    title: 'Saffron Spice',
    brand: 'FableStreet',
    size: 'XL',
    price: 3676,
    originalPrice: 4595,
    discount: '20% OFF',
    label: 'Only Few Left!',
    image: 'src/Components/Cardslider/Image_9.jpg',
  },
  {
    id: 5,
    title: 'Dry Fruits',
    brand: 'FableStreet',
    size: 'XL',
    price: 3676,
    originalPrice: 4595,
    discount: '20% OFF',
    label: 'Only Few Left!',
    image: 'src/Components/Cardslider/Image_9.jpg',
  },
  {
    id: 6,
    title: 'Kashmir Almonds',
    brand: 'FableStreet',
    size: 'XL',
    price: 3676,
    originalPrice: 4595,
    discount: '20% OFF',
    label: 'Only Few Left!',
    image: 'src/Components/Cardslider/Image_9.jpg',
  },
  {
    id: 7,
    title: 'Handloom Craft',
    brand: 'FableStreet',
    size: 'XL',
    price: 3676,
    originalPrice: 4595,
    discount: '20% OFF',
    label: 'Only Few Left!',
    image: 'src/Components/Cardslider/Image_9.jpg',
  },
  {
    id: 8,
    title: 'Traditional Jewelry',
    brand: 'FableStreet',
    size: 'XL',
    price: 3676,
    originalPrice: 4595,
    discount: '20% OFF',
    label: 'Only Few Left!',
    image: 'src/Components/Cardslider/Image_9.jpg',
  },
  {
    id: 9,
    title: 'Saffron Spice',
    brand: 'FableStreet',
    size: 'XL',
    price: 3676,
    originalPrice: 4595,
    discount: '20% OFF',
    label: 'Only Few Left!',
    image: 'src/Components/Cardslider/Image_9.jpg',
  },
  {
    id: 10,
    title: 'Dry Fruits',
    brand: 'FableStreet',
    size: 'XL',
    price: 3676,
    originalPrice: 4595,
    discount: '20% OFF',
    label: 'Only Few Left!',
    image: 'src/Components/Cardslider/Image_9.jpg',
    path: './CardSlider'
  },
];

const CardSlider = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const step = 1;
    const interval = 20;

    const scrollInterval = setInterval(() => {
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += step;
      }
    }, interval);

    return () => clearInterval(scrollInterval);
  }, []);

  const handleAddToCart = (item) => {
    console.log('Added to cart:', item);
    // Add cart logic here
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 ">
      <h2 className="text-3xl text-center mb-4 text-pink-800 hover:underline">
        Explore Kashmir's Rich Culture
      </h2>
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="min-w-[220px] sm:min-w-[240px] bg-pink-100 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:scale-105"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-4 text-center">
              <p className="text-sm text-gray-500">{card.brand}</p>
              <h3 className="text-md font-semibold text-gray-800">{card.title}</h3>
              <p className="text-sm text-gray-600">Size: {card.size}</p>
              <div className="mt-2">
                <span className="text-pink-700 font-bold">₹{card.price}</span>
                <span className="line-through text-sm text-gray-500 ml-2">₹{card.originalPrice}</span>
                <span className="text-green-600 text-sm ml-2">{card.discount}</span>
              </div>
              {card.label && (
                <p className="text-sm text-red-600 mt-1 font-semibold">{card.label}</p>
              )}
              <button
                onClick={() => handleAddToCart(card)}
                className="mt-3 px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition duration-200"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
