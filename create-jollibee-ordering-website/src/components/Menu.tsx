import { useState } from 'react';
import type { MenuItem } from '../types';
import { categories, menuItems } from '../data/menu';

interface MenuProps {
  onAddToCart: (item: MenuItem) => void;
}

export default function Menu({ onAddToCart }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [addedId, setAddedId] = useState<string | null>(null);

  const filtered = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 800);
  };

  return (
    <section id="menu" className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-[#e5001f]">Our Menu</h2>
        <p className="mt-2 text-gray-600">Pick your favorites and add them to your cart 🛒</p>
      </div>

      {/* Category Tabs */}
      <div className="sticky top-[72px] z-30 bg-[#fff8e7]/95 backdrop-blur py-3 mb-6 -mx-4 px-4">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-semibold text-sm whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#e5001f] text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-[#ffe8a3] border border-gray-200'
              }`}
            >
              <span className="text-lg">{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map(item => (
          <div
            key={item.id}
            className="card-hover bg-white rounded-2xl overflow-hidden shadow-md border border-[#ffe8a3] flex flex-col relative"
          >
            {item.popular && (
              <div className="absolute top-3 left-3 z-10 bg-[#ffc72c] text-[#b8001a] text-xs font-bold px-2.5 py-1 rounded-full shadow">
                ⭐ POPULAR
              </div>
            )}

            {/* Image area (emoji) */}
            <div className="relative h-40 bg-gradient-to-br from-[#fff4d6] to-[#ffe494] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-20 jb-stripes" />
              <span className="text-7xl relative drop-shadow-lg">{item.emoji}</span>
            </div>

            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-display font-bold text-lg text-gray-900 leading-tight">{item.name}</h3>
              <p className="mt-1 text-sm text-gray-600 line-clamp-2 flex-1">{item.description}</p>

              <div className="mt-3 flex items-center justify-between">
                <span className="font-display font-bold text-xl text-[#e5001f]">
                  ₱{item.price.toFixed(0)}
                </span>
                <button
                  onClick={() => handleAdd(item)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-full font-bold text-sm transition-all ${
                    addedId === item.id
                      ? 'bg-green-500 text-white scale-95'
                      : 'bg-[#e5001f] hover:bg-[#b8001a] text-white hover:scale-105 shadow-md'
                  }`}
                >
                  {addedId === item.id ? (
                    <>
                      <span>✓</span>
                      <span>Added</span>
                    </>
                  ) : (
                    <>
                      <span>+</span>
                      <span>Add</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
