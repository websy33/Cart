import React from 'react';
import { Sparkles } from 'lucide-react';

const categories = [
  { id: 1, title: 'Ethnic Wear', tag: '✨ New', image: 'src/Components/Cardslider/Image_9.jpg', },
  { id: 2, title: 'Activewear', tag: '🔥 Trending',image: 'src/Components/Cardslider/Image_9.jpg', },
  { id: 3, title: 'Loungewear', tag: '', image: 'src/Components/Cardslider/Image_9.jpg', },
  { id: 4, title: 'Footwear', tag: '🆕 Just In', image: 'src/Components/Cardslider/Image_9.jpg', },
  { id: 5, title: 'Winterwear', tag: '❄️ Cozy Picks', image: 'src/Components/Cardslider/Image_9.jpg', },
  { id: 6, title: 'Fusion Wear', tag: '', image: 'src/Components/Cardslider/Image_9.jpg', },
  { id: 7, title: 'Sportswear', tag: '🏃‍♂️ Best Seller', image: 'src/Components/Cardslider/Image_9.jpg' },
  { id: 8, title: 'Casuals', tag: '',image: 'src/Components/Cardslider/Image_9.jpg', },
];

const ShopByCategory = () => {
  return (
    <section className="bg-gradient-to-br from-pink-50 via-white to-amber-50 py-16">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 drop-shadow-sm tracking-tight">
          <span className="inline-flex items-center gap-2">
            <Sparkles className="w-7 h-7 text-pink-500" />
            Shop by Category
          </span>
        </h2>
        <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
          Fashion for every mood, season & celebration.
        </p>
      </div>

      {/* Horizontal Scroll */}
      <div className="overflow-x-auto scrollbar-hide px-6">
        <div className="flex gap-6 min-w-max pb-4">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group relative min-w-[280px] bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >
              {/* Category Image */}
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-56 object-cover rounded-t-3xl group-hover:scale-105 transition-transform duration-300"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent group-hover:opacity-100 transition-opacity" />

              {/* Title & Badge */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold drop-shadow">{cat.title}</h3>
                {cat.tag && (
                  <span className="mt-1 inline-block bg-white/90 text-pink-600 text-xs font-medium px-2 py-0.5 rounded-full shadow">
                    {cat.tag}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
