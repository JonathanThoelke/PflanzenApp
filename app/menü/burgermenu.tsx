import React from 'react';

const BurgerMenu = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-white z-50 p-4">
      <button onClick={() => onSelectCategory('')} className="text-xl font-bold mb-4">Menü schließen</button>
      <ul>
        {categories.map((category) => (
          <li key={category} className="mb-2">
            <button
              className={`text-lg ${selectedCategory === category ? 'font-bold' : ''}`}
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BurgerMenu;
